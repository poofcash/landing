import { Container } from "@theme-ui/components";
import { ThemeProvider } from "@theme-ui/theme-provider";
import Head from "next/head";
import { Header } from "../components/Header";
import theme from "../styles/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>Poof.cash</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Container sx={{ mx: [2, "15%"], my: 4, width: "auto" }}>
          <Header />
        </Container>
      </Container>
    </ThemeProvider>
  );
}
