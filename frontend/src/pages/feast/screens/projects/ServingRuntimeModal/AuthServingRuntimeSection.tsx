import * as React from 'react';
import {
  Alert,
  Button,
  Checkbox,
  FormGroup,
  FormSection,
  Popover,
  Stack,
  StackItem,
  getUniqueId,
} from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';
import { UpdateObjectAtPropAndValue } from '~/pages/projects/types';
import {
  CreatingInferenceServiceObject,
  CreatingServingRuntimeObject,
} from '~/pages/modelServing/screens/types';

import ServingRuntimeTokenSection from './ServingRuntimeTokenSection';

type AuthServingRuntimeSectionProps = {
  data: CreatingServingRuntimeObject | CreatingInferenceServiceObject;
  setData:
    | UpdateObjectAtPropAndValue<CreatingServingRuntimeObject>
    | UpdateObjectAtPropAndValue<CreatingInferenceServiceObject>;
  allowCreate: boolean;
  publicRoute?: boolean;
};

const AuthServingRuntimeSection: React.FC<AuthServingRuntimeSectionProps> = ({
  data,
  setData,
  allowCreate,
  publicRoute,
}) => {
  const createNewToken = React.useCallback(() => {
    const name = 'default-name';
    const duplicated = data.tokens.filter((token) => token.name === name);
    const duplicatedError = duplicated.length > 0 ? 'Duplicates are invalid' : '';
    setData('tokens', [
      ...data.tokens,
      {
        name,
        uuid: getUniqueId('ml'),
        error: duplicatedError,
      },
    ]);
  }, [data.tokens, setData]);

  return (
    <Stack hasGutter>
      {!allowCreate && (
        <StackItem>
          <Popover
            showClose
            bodyContent={
              publicRoute
                ? 'Model route and token authentication can only be changed by administrator users.'
                : 'Token authentication can only be changed by administrator users and component Authorino needs to be installed.'
            }
          >
            <Button variant="link" icon={<OutlinedQuestionCircleIcon />} isInline>
              {publicRoute
                ? "Why can't I change the model route and token authentication fields?"
                : "Why can't I change the token authentication field?"}
            </Button>
          </Popover>
        </StackItem>
      )}
      {publicRoute && (
        <StackItem>
          <FormSection title="Model route" titleElement="div">
            <FormGroup>
              <Checkbox
                label="Make deployed models available through an external route"
                id="alt-form-checkbox-route"
                data-testid="alt-form-checkbox-route"
                name="alt-form-checkbox-route"
                isChecked={data.externalRoute}
                isDisabled={!allowCreate}
                onChange={(e, check) => {
                  setData('externalRoute', check);
                  if (check && allowCreate) {
                    setData('tokenAuth', check);
                    if (data.tokens.length === 0) {
                      createNewToken();
                    }
                  }
                }}
              />
            </FormGroup>
          </FormSection>
        </StackItem>
      )}
      <StackItem>
        <ServingRuntimeTokenSection
          data={data}
          setData={setData}
          allowCreate={allowCreate}
          createNewToken={createNewToken}
        />
      </StackItem>
      {((publicRoute && data.externalRoute && !data.tokenAuth) ||
        (!publicRoute && !data.tokenAuth)) && (
        <StackItem>
          <Alert
            id="external-route-no-token-alert"
            data-testid="external-route-no-token-alert"
            variant="warning"
            isInline
            title="Making models available by external routes without requiring authorization can lead to security vulnerabilities."
          />
        </StackItem>
      )}
    </Stack>
  );
};

export default AuthServingRuntimeSection;
