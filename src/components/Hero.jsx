import { Box, Heading, Text, Flex, Button, Image } from "@theme-ui/components";
import React from "react";
// import LeaveModal from "./LeaveModal";

export const Hero = () => {
  // const [leaveModalOpen, setLeaveModalOpen] = React.useState(false);

  return (
    <>
      {/* <LeaveModal open={leaveModalOpen} setOpen={setLeaveModalOpen} /> */}
      <Flex
        sx={{
          mt: [0, 2, 5, 5],
          pt: ["72px", 0, 0, 0],
          justifyContent: "space-between",
          alignItems: ["center", "flex-start", "center", "center"],
          flexDirection: ["column-reverse", "column-reverse", "row", "row"],
        }}
      >
        <Box sx={{ width: ["100%", "65%", "45%", "40%"] }}>
          <Heading as="h1" sx={{ variant: "text.display" }}>
            Now they see it, now they don’t
          </Heading>
          <Box sx={{ pt: 3, width: ["100%", "100%", "80%", "90%"] }}>
            <Text>
              Poof is a decentralized, private DeFi protocol. Users can
              privately lend, borrow, send, and request crypto.
            </Text>
          </Box>
          <a href="https://app.poof.cash">
            <Button mt="4"> Launch App</Button>
          </a>
        </Box>
        <Image
          src="images/Main.svg"
          sx={{ width: ["100%", "60%", "550px", "600px"], mb: [3, 3, 0, 0] }}
        ></Image>
      </Flex>
    </>
  );
};
