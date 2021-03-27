import { Container } from "@theme-ui/components";
import { ThemeProvider } from "@theme-ui/theme-provider";
import Head from "next/head";
import { AboutSection } from "../components/AboutSection";
import { FAQSection } from "../components/FAQSection";
import { Header } from "../components/Header";
import { MagicSection } from "../components/MagicSection";
import { MainSection } from "../components/MainSection";
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

        <Container sx={{ mx: [2, 4], my: 4 }}>
          <Header />
          <MainSection />
          <AboutSection />
          <MagicSection />
          <FAQSection />
        </Container>
      </Container>
    </ThemeProvider>
  );
}
