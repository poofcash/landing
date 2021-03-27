import { Container } from "@theme-ui/components";
import { ThemeProvider } from "@theme-ui/theme-provider";
import Head from "next/head";
import { AboutSection } from "../components/AboutSection";
import { FAQSection } from "../components/FAQSection";
import { Header } from "../components/Header";
import { MagicSection } from "../components/MagicSection";
import { MainSection } from "../components/MainSection";
import styles from "../styles/Home.module.css";
import theme from "../styles/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Poof.cash</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container sx={{ mx: 5, my: 4, width: "auto" }}>
          <Header />
          <MainSection />
          <AboutSection />
          <MagicSection />
          <FAQSection />
        </Container>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}
