import { Box, Heading, Button, Text, Flex, Image } from "@theme-ui/components";
import React from "react";

export const Banner = () => {
  return (
    <Flex
      sx={{
        mt: 6,
        py: [4, "72px"],
        borderRadius: "6px",
        bg: "muted",
        justifyContent: "center",
      }}
    >
      <Flex sx={{ width: "80%", flexDirection: ["column-reverse", "row"] }}>
        <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
          <Box sx={{ width: ["100%", "60%"] }}>
            <Heading as="h1" sx={{ variant: "text.title", mb: [2, 4] }}>
              Join the show
            </Heading>
            <Text>
              Be a part of the magic by joining us on Discord. Keep track of the
              latest news, announcements, and talk to fellow users.
            </Text>
            <Box sx={{ mt: [2, 4] }}>
              <Button
                variant="round"
                onClick={() => {
                  window.open(
                    "https://discord.com/invite/xgEbWkGgu7",
                    "_blank"
                  );
                }}
              >
                Join Discord
              </Button>
            </Box>
          </Box>
        </Flex>
        <Image
          sx={{ width: ["400px"], mb: [4, 0] }}
          src="/images/Discord.svg"
        ></Image>
      </Flex>
    </Flex>
  );
};
