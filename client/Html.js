import React from "react";
import PropTypes from "prop-types";

const Html = ({ children }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>Express + React SSR App</title>
    </head>
    <body>{children}</body>
  </html>
);

export default Html;
