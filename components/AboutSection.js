import { Box, Container, Grid, Text } from "@theme-ui/components";
import React from "react";

export const AboutSection = () => {
  return (
    <Grid id="about" sx={{ mb: 6 }} columns={[3]}>
      <Container>
        <Box sx={{ bg: "grey", height: 200, width: "100%" }} />
        <Text>First</Text>
      </Container>
      <Container>
        <Box sx={{ bg: "grey", height: 200, width: "100%" }} />
        <Text>Second</Text>
      </Container>
      <Container>
        <Box sx={{ bg: "grey", height: 200, width: "100%" }} />
        <Text>Third</Text>
      </Container>
    </Grid>
  );
};
