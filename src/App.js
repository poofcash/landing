import { Container } from "@theme-ui/components";
import { ThemeProvider } from "@theme-ui/theme-provider";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Start } from "./components/Start";
import { Info } from "./components/Info";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import theme from "./styles/theme";
import Modal from "react-modal";
import React from "react";

export default function App() {
  React.useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ maxWidth: [1, 2, 1, 0] }}>
        <Nav />
        <Hero />
        <Start />
        <Info />
        <Banner />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
