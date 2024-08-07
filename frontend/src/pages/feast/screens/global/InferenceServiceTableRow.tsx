import * as React from 'react';
import { Td } from '@patternfly/react-table';
import { Link } from 'react-router-dom';
import ResourceActionsColumn from '~/components/ResourceActionsColumn';
import ResourceNameTooltip from '~/components/ResourceNameTooltip';
import useModelMetricsEnabled from '~/pages/feast/useModelMetricsEnabled';
import { InferenceServiceKind, ServingRuntimeKind } from '~/k8sTypes';
import { isModelMesh } from '~/pages/feast/utils';
import { SupportedArea } from '~/concepts/areas';
import useIsAreaAvailable from '~/concepts/areas/useIsAreaAvailable';
import { getDisplayNameFromK8sResource } from '~/concepts/k8s/utils';
import InferenceServiceEndpoint from './InferenceServiceEndpoint';
import InferenceServiceProject from './InferenceServiceProject';
import InferenceServiceStatus from './InferenceServiceStatus';
import InferenceServiceServingRuntime from './InferenceServiceServingRuntime';
import InferenceServiceAPIProtocol from './InferenceServiceAPIProtocol';

type InferenceServiceTableRowProps = {
  obj: InferenceServiceKind;
  isGlobal: boolean;
  servingRuntime?: ServingRuntimeKind;
  onDeleteInferenceService: (obj: InferenceServiceKind) => void;
  onEditInferenceService: (obj: InferenceServiceKind) => void;
  showServingRuntime?: boolean;
};

const InferenceServiceTableRow: React.FC<InferenceServiceTableRowProps> = ({
  obj: inferenceService,
  servingRuntime,
  onDeleteInferenceService,
  onEditInferenceService,
  isGlobal,
  showServingRuntime,
}) => {
  const [modelMetricsEnabled] = useModelMetricsEnabled();
  const kserveMetricsEnabled = useIsAreaAvailable(SupportedArea.K_SERVE_METRICS).status;

  const modelMesh = isModelMesh(inferenceService);
  const modelMeshMetricsSupported = modelMetricsEnabled && modelMesh;
  const kserveMetricsSupported = modelMetricsEnabled && kserveMetricsEnabled && !modelMesh;

  const displayName = getDisplayNameFromK8sResource(inferenceService);

  return (
    <>
      <Td dataLabel="Name">
        <ResourceNameTooltip resource={inferenceService}>
          {modelMeshMetricsSupported ? (
            <Link
              data-testid={`metrics-link-${displayName}`}
              to={
                isGlobal
                  ? `/modelServing/${inferenceService.metadata.namespace}/metrics/${inferenceService.metadata.name}`
                  : `/projects/${inferenceService.metadata.namespace}/metrics/model/${inferenceService.metadata.name}`
              }
            >
              {displayName}
            </Link>
          ) : kserveMetricsSupported ? (
            <Link
              data-testid={`metrics-link-${displayName}`}
              to={
                isGlobal
                  ? `/modelServing/${inferenceService.metadata.namespace}/metrics/${inferenceService.metadata.name}`
                  : `/projects/${inferenceService.metadata.namespace}/metrics/model/${inferenceService.metadata.name}`
              }
            >
              {displayName}
            </Link>
          ) : (
            displayName
          )}
        </ResourceNameTooltip>
      </Td>
      {isGlobal && (
        <Td dataLabel="Project">
          <InferenceServiceProject inferenceService={inferenceService} />
        </Td>
      )}
      {showServingRuntime && (
        <Td dataLabel="Serving Runtime">
          <InferenceServiceServingRuntime servingRuntime={servingRuntime} />
        </Td>
      )}
      <Td dataLabel="Inference endpoint">
        <InferenceServiceEndpoint
          inferenceService={inferenceService}
          servingRuntime={servingRuntime}
          isKserve={!modelMesh}
        />
      </Td>
      <Td dataLabel="API protocol">
        <InferenceServiceAPIProtocol
          servingRuntime={servingRuntime}
          isMultiModel={modelMeshMetricsSupported}
        />
      </Td>
      <Td dataLabel="Status">
        <InferenceServiceStatus inferenceService={inferenceService} isKserve={!modelMesh} />
      </Td>
      <Td isActionCell>
        <ResourceActionsColumn
          resource={inferenceService}
          items={[
            {
              title: 'Edit',
              onClick: () => {
                onEditInferenceService(inferenceService);
              },
            },
            {
              title: 'Delete',
              onClick: () => {
                onDeleteInferenceService(inferenceService);
              },
            },
          ]}
        />
      </Td>
    </>
  );
};

export default InferenceServiceTableRow;
