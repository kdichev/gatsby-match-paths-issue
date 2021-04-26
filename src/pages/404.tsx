import React from "react";
import { PageProps } from "gatsby";
import ErrorPageTemplate from "../templates/error-page";

export type ErrorPageProps = PageProps<any, { locale: string }>;

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  return <ErrorPageTemplate {...props} />;
};

export default ErrorPage;
