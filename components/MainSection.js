import { Box, Button, Container, Flex, Text } from "@theme-ui/components";
import React from "react";

export const MainSection = () => {
  return (
    <Flex sx={{ mb: 6, justifyContent: "space-between" }}>
      <Container>
        <Text variant="styles.h2">Now they see it,</Text>
        <br />
        <Text variant="styles.h2">Now they don't</Text>
        <br />
        <br />
        <Text>Poof Cash protects your privacy on Celo. Keep</Text>
        <br />
        <Text> your identity, balances, and transactions safe</Text>
        <br />
        <Text> from private eyes.</Text>
        <br />
        <br />
        <Button
          onClick={() => {
            location.href = "https://app.poof.cash";
          }}
          variant="outline"
        >
          Launch App
        </Button>
      </Container>
      <Box sx={{ height: 300, width: 1000, bg: "grey" }} />
    </Flex>
  );
};
