import Script from "next/script";
import Layout from "../components/layout";
import Main from "../components/Home/Main";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";

export default function Home() {
  return (
    <Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TEGWTXG7GH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-TEGWTXG7GH');
        `}
      </Script>
      <Main />
      <About />
      <Projects />
    </Layout>
  );
}
