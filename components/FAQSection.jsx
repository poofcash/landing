import { Box, Container, Grid, Text } from "@theme-ui/components";
import React from "react";

export const FAQSection = () => {
  return (
    <Container id="faq">
      <Box sx={{ bg: "grey", height: 200, mb: 4, width: "100%" }} />
      <Grid sx={{ gridTemplateColumns: ["1fr", "1fr 1fr"] }}>
        <Container>
          <Container sx={{ mb: 4 }}>
            <Text variant="styles.h5">How do you do it?</Text>
            <br />
            <Text>This is how we do it</Text>
          </Container>
          <Container>
            <Text variant="styles.h5">How do you do it?</Text>
            <br />
            <Text>This is how we do it</Text>
          </Container>
        </Container>
        <Container>
          <Container sx={{ mb: 4 }}>
            <Text variant="styles.h5">How do you do it?</Text>
            <br />
            <Text>This is how we do it</Text>
          </Container>
          <Container>
            <Text variant="styles.h5">How do you do it?</Text>
            <br />
            <Text>This is how we do it</Text>
          </Container>
        </Container>
      </Grid>
    </Container>
  );
};
