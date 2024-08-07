import * as React from 'react';
import Iframe from "react-iframe";

const FeastRoutes: React.FC = () => {
  return (
    <Iframe
      url="/echo/commonjs-example/feast-test.html"
      styles={{height: "100%"}}
      />
  );
};

export default FeastRoutes;
