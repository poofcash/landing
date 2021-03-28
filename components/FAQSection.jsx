import { Box, Container, Grid, Text } from "@theme-ui/components";
import React from "react";

export const FAQSection = () => {
  return (
    <Container id="faq">
      <Box sx={{ bg: "grey", height: 200, mb: 4, width: "100%" }} />
      <Grid
        sx={{
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          gridTemplateRows: [null, "repeat(2, 1fr)"],
          gridGap: "8px",
        }}
      >
        <Container>
          <Text variant="styles.h5">Why would I use Poof?</Text>
          <br />
          <Text>
            Imagine having a bank account, but everyone could see your balances
            and transactions.
            <br />
            Money is a sensitive topic for most people. By default, CELO
            balances and transactions can be tied to an identity through the
            public ledger. Even if funds are moved from account to account, a
            trail can be followed to the origin. Poof breaks that trail and
            enables privacy on CELO.
          </Text>
        </Container>
        <Container>
          <Text variant="styles.h5">Are the contracts open source?</Text>
          <br />
          <Text>
            Yes, the contracts are open source and can be found{" "}
            <a
              href="https://github.com/poofcash/tornado-core"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>here</u>
            </a>
          </Text>
        </Container>
        <Container>
          <Text variant="styles.h5">Have the contracts received audits?</Text>
          <br />
          <Text>
            Yes. The Poof contracts use the Tornado.cash contracts at commit
            `77af0c5bddfcf9d973efbc38278a249bb0173da3`. We did not modify the
            contracts from that commit, and those contracts have been audited by{" "}
            <a
              href="https://www.abdk.consulting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>ADBK Consulting</u>
            </a>
            .
          </Text>
        </Container>
        <Container>
          <Text variant="styles.h5">Does app.poof.cash collect data?</Text>
          <br />
          <Text>
            No, app.poof.cash does not collect any user data. It is a web app
            that only makes network requests for interacting with smart
            contracts and relayers.
          </Text>
        </Container>
      </Grid>
    </Container>
  );
};
