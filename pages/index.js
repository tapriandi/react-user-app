import Head from "next/head";
import Home from "components/Page/Home";
import Layout from "components/Common/Layout";

export default function Homepage() {
  return (
    <Layout withSearch>
      <Head title="Home" />
      <Home />
    </Layout>
  );
}
