import 'boxicons/css/boxicons.min.css';
import '../styles/globals.css';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Header from '../components/Header';
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "9PYnjNUSfsLncyjdESC5wQtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: 'us'
  }
});

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  <Component {...pageProps} />;
  </>
}

export default MyApp;
