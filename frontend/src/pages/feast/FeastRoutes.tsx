import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';
import ProjectsRoutes from '~/concepts/projects/ProjectsRoutes';
import GlobalModelServingCoreLoader from './screens/global/GlobalModelServingCoreLoader';
import ModelServingGlobal from './screens/global/FeastServingGlobal';

const FeastRoutes: React.FC = () => {

  return (
    <ProjectsRoutes>
      <Route
        path="/:namespace?/*"
        element={
          <GlobalModelServingCoreLoader
            getInvalidRedirectPath={(namespace) => `/feast/${namespace}`}
          />
        }
      >
        <Route index element={<ModelServingGlobal />} />
        <Route path="*" element={<Navigate to="." />} />
      </Route>
    </ProjectsRoutes>
  );
};

export default FeastRoutes;
