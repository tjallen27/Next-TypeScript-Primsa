import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { GlobalStyle } from "../styles/global";
import { store } from "../store/configureStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
