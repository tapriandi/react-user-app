import Head from "next/head";

export default function MetaHead({ title }) {
  return (
    <Head>
      <title>{title} | React User App</title>
    </Head>
  );
}
