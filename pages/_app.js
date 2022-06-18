import GlobalStyle from "../src/components/theme/GlobalStyle";
{/*Componenente que envolver todos no next*/}
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
  }

  export default MyApp;