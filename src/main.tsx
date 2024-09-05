import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import url_01_url from "./assets/01.svg?url";
import url_02_url from "./assets/02.svg?url";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ul>
      <li>dev mode is working correctly</li>
      <li>prod mode is wrong url</li>
    </ul>

    <ul>
      <li>01: {url_01_url}</li>
      <li>02: {url_02_url}</li>
    </ul>
  </StrictMode>
);
