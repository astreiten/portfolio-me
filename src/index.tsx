import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";

let root: ReactDOMClient.Root;

//@ts-ignore
window.renderMe = (containerId) => {
  const container = document.getElementById(containerId);
  //@ts-ignore
  root = ReactDOMClient.createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

//@ts-ignore
window.unmountMe = () => {
  //@ts-ignore
  root.unmount();
};
