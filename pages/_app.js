import Head from "next/head";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  
  
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      
      <main style={{scrollBehavior:'smooth'}}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp

