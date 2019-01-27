import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import Html from "./client/Html";
import App from "./client/App";

const render = res => {
  const sheet = new ServerStyleSheet;

  sheet
    .interleaveWithNodeStream(
      renderToNodeStream(
        <Html>
          <App name="World" />
        </Html>
      )
    )
    .pipe(res)
};

export default render;