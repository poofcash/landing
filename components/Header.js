import React from "react";
import { Text, Flex, NavLink, Button } from "theme-ui";

export const Header = () => {
  return (
    <Flex sx={{ justifyContent: "space-between", alignItems: "center", mb: 6 }}>
      <Text sx={{ fontWeight: "bold" }}>Poof.cash</Text>
      <Flex sx={{ alignItems: "center" }}>
        <NavLink sx={{ fontWeight: "normal" }} href="#about" pr={4}>
          About
        </NavLink>
        <NavLink sx={{ fontWeight: "normal" }} href="#magic" pr={4}>
          The Magic
        </NavLink>
        <NavLink sx={{ fontWeight: "normal" }} href="#faq" pr={4}>
          FAQ
        </NavLink>
        <Button
          onClick={() => {
            location.href = "https://app.poof.cash";
          }}
          variant="outline"
        >
          Launch App
        </Button>
      </Flex>
    </Flex>
  );
};
