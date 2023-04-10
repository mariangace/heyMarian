import Layout from "../components/layout";
import Main from "../components/Home/Main";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";

export default function Home() {
  return (
    <Layout>
      <Main />
      <About />
      <Projects />
    </Layout>
  );
}
