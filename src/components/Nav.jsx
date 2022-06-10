import { Container, Image, Flex, Link } from "@theme-ui/components";
import React from "react";
import LeaveModal from "./LeaveModal";

export const Nav = () => {
  const [leaveModalOpen, setLeaveModalOpen] = React.useState(false);
  return (
    <Container
      sx={{
        py: [1, 0, 4, 4],
        position: ["fixed", "relative"],
        maxWidth: [1, "100%"],
        bg: "white",
      }}
    >
      <LeaveModal open={leaveModalOpen} setOpen={setLeaveModalOpen} />
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          sx={{ display: ["none", "inline-block"] }}
          src="images/Logo.svg"
        />
        <Image sx={{ display: ["block", "none"] }} src="images/LogoMark.svg" />
        <Flex
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link sx={{ display: ["none", "inline-block"] }} href="#start" mr="3">
            How it works
          </Link>
          <Link href="https://discord.gg/xgEbWkGgu7" target="_blank" mr="3">
            Discord
          </Link>
          <Link href="https://docs.poof.cash/" target="_blank" mr="3">
            Docs
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
