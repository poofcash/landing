import { Box, Button, Container, Grid, Text } from "@theme-ui/components";
import React from "react";

export const MainSection = () => {
  return (
    <Grid
      sx={{ mb: 6, gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "1fr 1fr"] }}
    >
      <Container>
        <Text variant="styles.h2">Now they see it,</Text>
        <br />
        <Text variant="styles.h2">Now they don't</Text>
        <br />
        <br />
        <Text>
          Poof Cash protects your privacy on Celo. Keep your identity, balances,
          and transactions safe from prying eyes.
        </Text>
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
      <Box
        sx={{
          height: 300,
          width: 300,
          bg: "grey",
        }}
      />
    </Grid>
  );
};
