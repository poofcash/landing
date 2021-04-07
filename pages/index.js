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

        <Container
          sx={{
            px: [4, "15%"],
            py: 4,
            width: "auto",
            maxWidth: "100%",
            overflowX: "hidden",
          }}
        >
          <Header />
        </Container>
      </Container>
    </ThemeProvider>
  );
}
