import React from "react";
import { FaBomb } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <>
      <FaBomb />
      <div>An unknown error has occurred.</div>
      <div>
        Please try refreshing the page, or contact support if the problem
        persists
      </div>
    </>
  );
};

export default ErrorPage;
