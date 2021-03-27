import React from "react";
import { Box, Container, Grid, Text } from "@theme-ui/components";

export const MagicSection = () => {
  return (
    <Grid columns={[2]} id="magic" sx={{ mb: 6 }}>
      <Box sx={{ height: 300, width: 500, bg: "grey" }} />
      <Container>
        <Text>Here's how we do it...</Text>
      </Container>
    </Grid>
  );
};
