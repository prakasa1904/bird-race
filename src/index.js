import React from "react";
import { hydrate, render } from "react-dom";
import Loadable from "react-loadable";
import { createBrowserHistory } from "history";

import App from "./App";

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  /**
   * On location changes Do Something ....
   */
});

Loadable.preloadReady().then(() => {
  const container = document.getElementById("devetek");
  const bootstrap = window.ssr ? hydrate : render;
  const props = {
    history: browserHistory
  };

  bootstrap(<App {...props} />, container);
});
