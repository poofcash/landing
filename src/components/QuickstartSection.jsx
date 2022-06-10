import { Box, Container, Grid, Text } from "@theme-ui/components";
import React from "react";

export const QuickstartSection = () => {
  return (
    <>
      <Text id="quickstart" variant="styles.h3">
        Quickstart
      </Text>
      <Grid sx={{ gridTemplateColumns: ["1fr", "1fr 1fr 1fr"], mb: 6, mt: 2 }}>
        <Container>
          <Box sx={{ bg: "grey", height: 200, width: "100%" }} />
          <Text>
            Deposit tokens into the smart contract. You will then receive a
            secret note to redeem those tokens in the future.
          </Text>
        </Container>
        <Container>
          <Box sx={{ bg: "grey", height: 200, width: "100%" }} />
          <Text>
            Wait before withdrawing tokens. The more deposits into Poof between
            your deposit and withdrawal, the greater your privacy.
          </Text>
        </Container>
        <Container>
          <Box sx={{ bg: "grey", height: 200, width: "100%" }} />
          <Text>
            Withdraw tokens by specifying the secret note from the first step
            and a recipient address. The recipient address can be a completely
            empty wallet.
          </Text>
        </Container>
      </Grid>
    </>
  );
};
