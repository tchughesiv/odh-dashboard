import { feastProxyService } from '../../../../utils/proxy';

export default feastProxyService< null >(
  null,
  null,
  {
    // Use port forwarding for local development:
    // kubectl port-forward -n <namespace> svc/ds-pipeline-md-dspa 10001:8443
    host: process.env.FEAST_ENVOY_SERVICE_HOST,
    port: process.env.FEAST_ENVOY_SERVICE_PORT,
  },
  null,
  false,
);
