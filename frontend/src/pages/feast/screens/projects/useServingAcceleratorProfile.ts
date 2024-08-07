import { InferenceServiceKind, ServingRuntimeKind } from '~/k8sTypes';
import useAcceleratorProfileState, {
  AcceleratorProfileState,
} from '~/utilities/useAcceleratorProfileState';
import { GenericObjectState } from '~/utilities/useGenericObjectState';

const useServingAcceleratorProfile = (
  servingRuntime?: ServingRuntimeKind | null,
  inferenceService?: InferenceServiceKind | null,
): GenericObjectState<AcceleratorProfileState> => {
  const acceleratorProfileName =
    servingRuntime?.metadata.annotations?.['opendatahub.io/accelerator-name'];
  const resources =
    inferenceService?.spec.predictor.model?.resources ||
    servingRuntime?.spec.containers[0].resources;
  const tolerations =
    inferenceService?.spec.predictor.tolerations || servingRuntime?.spec.tolerations;

  return useAcceleratorProfileState(resources, tolerations, acceleratorProfileName);
};

export default useServingAcceleratorProfile;
