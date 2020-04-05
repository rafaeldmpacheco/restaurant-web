import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./config/ReactotronConfig";
import "./global.css";
import Routes from "./routes";
import history from "./services/history";
import { persistor, store } from "./store";
import "./config/ReactotronConfig";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
