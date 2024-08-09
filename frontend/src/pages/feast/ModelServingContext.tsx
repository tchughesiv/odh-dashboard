import * as React from 'react';
//import * as fs from 'fs';
import ReactDOMServer from "react-dom/server";
import { useNavigate } from 'react-router-dom';
import {
  ServingRuntimeKind,
  InferenceServiceKind,
  TemplateKind,
  ProjectKind,
  SecretKind,
} from '~/k8sTypes';
import { DEFAULT_CONTEXT_DATA, DEFAULT_LIST_WATCH_RESULT } from '~/utilities/const';
import { ContextResourceData, CustomWatchK8sResult } from '~/types';
import { useContextResourceData } from '~/utilities/useContextResourceData';
import { useDashboardNamespace } from '~/redux/selectors';
import { DataConnection } from '~/pages/projects/types';
import useDataConnections from '~/pages/projects/screens/detail/data-connections/useDataConnections';
import useSyncPreferredProject from '~/concepts/projects/useSyncPreferredProject';
import { ProjectsContext, byName } from '~/concepts/projects/ProjectsContext';
import { SupportedArea, conditionalArea } from '~/concepts/areas';
import useServingPlatformStatuses from './useServingPlatformStatuses';
import { useTemplates } from '~/api';
import useInferenceServices from './useInferenceServices';
import useServingRuntimes from './useServingRuntimes';
import useTemplateOrder from './customServingRuntimes/useTemplateOrder';
import useTemplateDisablement from './customServingRuntimes/useTemplateDisablement';
import { getTokenNames } from './utils';
import useServingRuntimeSecrets from './screens/projects/useServingRuntimeSecrets';

type ModelServingContextType = {
  refreshAllData: () => void;
  filterTokens: (servingRuntime?: string) => SecretKind[];
  dataConnections: ContextResourceData<DataConnection>;
  servingRuntimeTemplates: CustomWatchK8sResult<TemplateKind[]>;
  servingRuntimeTemplateOrder: ContextResourceData<string>;
  servingRuntimeTemplateDisablement: ContextResourceData<string>;
  servingRuntimes: ContextResourceData<ServingRuntimeKind>;
  inferenceServices: ContextResourceData<InferenceServiceKind>;
  project: ProjectKind | null;
  preferredProject: ProjectKind | null;
  serverSecrets: ContextResourceData<SecretKind>;
  projects: ProjectKind[] | null;
};

type ModelServingContextProviderProps = {
  children: React.ReactNode;
  namespace?: string;
  getErrorComponent?: (errorMessage?: string) => React.ReactElement;
};

export const ModelServingContext = React.createContext<ModelServingContextType>({
  refreshAllData: () => undefined,
  filterTokens: () => [],
  dataConnections: DEFAULT_CONTEXT_DATA,
  servingRuntimeTemplates: DEFAULT_LIST_WATCH_RESULT,
  servingRuntimeTemplateOrder: DEFAULT_CONTEXT_DATA,
  servingRuntimeTemplateDisablement: DEFAULT_CONTEXT_DATA,
  servingRuntimes: DEFAULT_CONTEXT_DATA,
  inferenceServices: DEFAULT_CONTEXT_DATA,
  serverSecrets: DEFAULT_CONTEXT_DATA,
  project: null,
  preferredProject: null,
  projects: null,
});

const ModelServingContextProvider = conditionalArea<ModelServingContextProviderProps>(
  SupportedArea.MODEL_SERVING,
  true,
)(({ children, namespace, getErrorComponent }) => {
  const { dashboardNamespace } = useDashboardNamespace();
  const navigate = useNavigate();
  const { projects, preferredProject } = React.useContext(ProjectsContext);
  const project = projects.find(byName(namespace)) ?? null;
  useSyncPreferredProject(project);
  const servingRuntimeTemplates = useTemplates(dashboardNamespace);

  const servingRuntimeTemplateOrder = useContextResourceData<string>(
    useTemplateOrder(dashboardNamespace),
  );
  const servingRuntimeTemplateDisablement = useContextResourceData<string>(
    useTemplateDisablement(dashboardNamespace),
  );
  const serverSecrets = useContextResourceData<SecretKind>(useServingRuntimeSecrets(namespace));
  const servingRuntimes = useContextResourceData<ServingRuntimeKind>(useServingRuntimes(namespace));
  const inferenceServices = useContextResourceData<InferenceServiceKind>(
    useInferenceServices(namespace),
  );
  const dataConnections = useContextResourceData<DataConnection>(useDataConnections(namespace));

  const servingRuntimeRefresh = servingRuntimes.refresh;
  const inferenceServiceRefresh = inferenceServices.refresh;
  const dataConnectionRefresh = dataConnections.refresh;
  const refreshAllData = React.useCallback(() => {
    servingRuntimeRefresh();
    inferenceServiceRefresh();
    dataConnectionRefresh();
  }, [servingRuntimeRefresh, inferenceServiceRefresh, dataConnectionRefresh]);

  const {
    kServe: { installed: kServeInstalled },
    modelMesh: { installed: modelMeshInstalled },
  } = useServingPlatformStatuses();

  const notInstalledError =
    !kServeInstalled && !modelMeshInstalled
      ? new Error('No model serving platform installed')
      : undefined;

  const filterTokens = React.useCallback(
    (servingRuntimeName?: string): SecretKind[] => {
      if (!namespace || !servingRuntimeName) {
        return [];
      }
      const { serviceAccountName } = getTokenNames(servingRuntimeName, namespace);

      const secrets = serverSecrets.data.filter(
        (secret) =>
          secret.metadata.annotations?.['kubernetes.io/service-account.name'] ===
          serviceAccountName,
      );

      return secrets;
    },
    [namespace, serverSecrets],
  );

  const iframeRef = React.useRef() as React.MutableRefObject<HTMLIFrameElement>;
  const [height, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(iframeRef.current?.contentWindow?.document.body.scrollHeight + "px");
  };
  //const srcDoc = <MyComponent />;
  return (
    <iframe
      ref={iframeRef}
      onLoad={onLoad}
      id="myFrame"
      //src="http://transcendentlushmajesticmelody.neverssl.com/online/"
      src="../../echo/commonjs-example/feast-test.html"
      //srcDoc={ReactDOMServer.renderToString(srcDoc)}
      width="100%"
      height={height}
      scrolling="no"
      frameBorder="0"
      style={{
        maxWidth: 640,
        width: "100%",
        overflow: "auto",
      }}></iframe>
  );

  /*
  return (
    <ModelServingContext.Provider
      value={{
        servingRuntimes,
        inferenceServices,
        servingRuntimeTemplates,
        servingRuntimeTemplateOrder,
        servingRuntimeTemplateDisablement,
        dataConnections,
        refreshAllData,
        filterTokens,
        serverSecrets,
        project,
        preferredProject,
        projects,
      }}
    >
      {children}
    </ModelServingContext.Provider>
  );
  */
});

/*
const MyComponent = () => {
  var test = "";
  fs.readFile('../../echo/commonjs-example/feast-test.html', (err, inputD) => {
    if (err) throw err;
      test = inputD.toString();
  });
  return test;
};
*/

export default ModelServingContextProvider;
