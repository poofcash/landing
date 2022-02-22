import {
  Box,
  Container,
  Image,
  Flex,
  Link,
  Button,
} from "@theme-ui/components";
import React from "react";

export const Nav = () => {
  return (
    <Container
      sx={{
        py: [1, 0, 4, 4],
        position: ["fixed", "relative"],
        maxWidth: [1, "100%"],
        bg: "white",
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          sx={{ display: ["none", "inline-block"] }}
          src="images/Logo.svg"
        />
        <Image sx={{ display: ["block", "none"] }} src="images/LogoMark.svg" />
        <Flex
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link sx={{ display: ["none", "inline-block"] }} href="#start" mr="3">
            How it works
          </Link>
          <Link href="https://discord.gg/xgEbWkGgu7" target="_blank" mr="3">
            Discord
          </Link>
          <Link href="https://docs.poof.cash/" target="_blank" mr="3">
            Docs
          </Link>
          <Button
            variant="small"
            sx={{ display: ["block", "block", "none"], textAlign: "center" }}
            onClick={() => {
              window.open("https://app.poof.cash", "_blank");
            }}
          >
            App
          </Button>
          <a href="https://app.poof.cash">
            <Button
              sx={{ display: ["none", "none", "block"], textAlign: "center" }}
            >
              Launch App
            </Button>
          </a>
        </Flex>
      </Flex>
    </Container>
  );
};

