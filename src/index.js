import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import "./styles/styles.scss";

const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
for resolving this error:

./src/styles/styles.scss (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/styles.scss)
Error: resolve-url-loader: CSS error
  source-map information is not available at url() declaration (found orphan CR, try removeCR option) 
  
 solve:
  goto resolve-url-loader from node_modules then click on index.js then turn removeCR : false, to removeCR : true,
  and then start the server
*/
