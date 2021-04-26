import React from "react";
import { PageProps } from "gatsby";

const BasicPageTemplate: React.FC<PageProps<any>> = (props) => {
  return <div>Hello from basic page: {props.path}</div>;
};

export default BasicPageTemplate;
