import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Container,
  Image,
} from "@theme-ui/components";
import React from "react";

export const Info = () => {
  return (
    <Container>
      <Flex
        sx={{
          mb: 4,
          mt: [0, 2, 6, 7],
          textAlign: ["left", "center"],
          flexDirection: "column",
        }}
      >
        <Heading as="h1" sx={{ variant: "text.title" }}>
          Behind the magic
        </Heading>
        <Heading as="h2" sx={{ variant: "text.subtitle" }}>
          Most magicians don’t reveal their secrets, but we will
        </Heading>
        <Flex
          sx={{
            mt: 2,
            flexDirection: ["column", "row"],
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ mb: 5, width: ["100%", "28%"] }}>
            <Image src="images/Contracts.svg" sx={{ mb: 3 }}></Image>
            <Heading as="h3" sx={{ variant: "text.h3" }}>
              Smart Privacy Contracts
            </Heading>
            <Text>
              Poof uses zk-sNARK smart contracts to support all users
              transactions. These contracts have been audited and are
              open-source and unstoppable by anyone.
            </Text>
          </Box>
          <Box sx={{ mb: 5, width: ["100%", "28%"] }}>
            <Image src="images/Knight.svg" sx={{ mb: 3 }}></Image>
            <Heading as="h3" sx={{ variant: "text.h3" }}>
              Decentralized Framework
            </Heading>
            <Text>
              Poof is fully decentralized. No user tracking or monitoring at
              all. Users also control the direction of Poof through community
              governance.
            </Text>
          </Box>
          <Box sx={{ mb: 5, width: ["100%", "28%"] }}>
            <Image src="images/Potion.svg" sx={{ mb: 3 }}></Image>
            <Heading as="h3" sx={{ variant: "text.h3" }}>
              Community Incentives
            </Heading>
            <Text>
              The magic is inside all of us. Poof’s privacy relies on users
              funding the pool so there are liquidity mining rewards and early
              bird incentives for the users who help make the magic happen.
            </Text>
          </Box>
        </Flex>
        <Box>
          <Button
            variant="secondary"
            onClick={() => {
              window.open("https://docs.poof.cash/", "_blank");
            }}
          >
            Learn More
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};
