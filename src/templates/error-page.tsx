import React from "react";
import { ErrorPageProps } from "./../pages/404";

export const ErrorPageTemplate: React.FC<ErrorPageProps> = (props) => {
  return <div>404: {props.pageContext.locale || "en"}</div>;
};

export default ErrorPageTemplate;
