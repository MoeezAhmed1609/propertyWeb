import React from "react";
import Routing from "./Routing";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FlagProvider } from "./Context/FlagContext";

export default function App() {
  return (
    <FlagProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routing />
          <ToastContainer position="bottom-right" />
        </PersistGate>
      </Provider>
    </FlagProvider>

  );
}
