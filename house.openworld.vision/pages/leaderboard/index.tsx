import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Header from "../../components/Header";

export default function Leaderboard() {
  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Leaderboard" />
      <Container></Container>
    </>
  );
}
