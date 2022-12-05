import React from "react";
// import { Toaster } from "react-hot-toast";

import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Slider.css";
import "../styles/HomeSlider.css";
import "../styles/BackToTop.css";
import "../styles/AuthModal.css";
import "../styles/Login.css";
import { StateContext } from "../context/StateContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  return (
    <StateContext>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </StateContext>
  );
}

export default MyApp;
