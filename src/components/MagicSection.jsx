import React from "react";
import { Box, Container, Grid, Text } from "@theme-ui/components";

export const MagicSection = () => {
  return (
    <>
      <Text id="magic" variant="styles.h3">
        The Magic
      </Text>
      <Grid columns={[2]} sx={{ mb: 6, mt: 2 }}>
        <Box sx={{ height: 300, width: "100%", bg: "grey" }} />
        <Container>
          <ul>
            <li>
              During the deposit, Poof generates a secret and shares it with{" "}
              <strong>only</strong> you. This secret is generated completely
              offline.
            </li>
            <li>
              Poof sends a <strong>hashed</strong> version of your secret with
              your deposit. Observers cannot figure out your secret from the
              hashed version.
            </li>
            <li>Poof’s smart contract stores the hashed secret.</li>
            <li>
              During the withdrawal, you supply your secret and recipient
              address to Poof. Poof creates a proof using your secret and the
              recipient address and sends it to a Relayer node to execute the
              transaction.
              <br />
              NOTE: Relayer nodes are unable to tamper with your recipient
              address because it is <strong>practically impossible</strong> to
              modify the proof.
            </li>
            <li>
              Poof’s smart contract verifies your proof. If successful, it
              directs the originally deposited funds to the recipient address
              and refunds gas and fees to the relayer.
            </li>
            <li>
              The verification process is considered{" "}
              <strong>zero knowledge</strong>. This means that the withdrawal
              proof cannot be linked to the original hashed secret.
            </li>
          </ul>
        </Container>
      </Grid>
    </>
  );
};
