import React from "react";
import { Button, Container, Flex, Grid, Image, NavLink, Text } from "theme-ui";

const Logo = () => {
  return (
    <Flex sx={{ display: "flex", alignItems: "center" }}>
      <img src="/icon.svg" />
      <Text
        sx={{ height: "auto", fontWeight: "bold", marginLeft: "4px" }}
        variant="logo"
      >
        poof
      </Text>
    </Flex>
  );
};

const useClickOutside = (onClickOutside) => {
  const ref = React.useRef(null);
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      return;
    }
    onClickOutside();
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  }, [ref]);
  return ref;
};

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const ref = useClickOutside(() => setShowMenu(false));

  return (
    <div ref={ref}>
      <Flex sx={{ alignItems: "flex-end", marginTop: "4px" }}>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: "normal" }}
          href="https://discord.com/invite/UwAzkVYcJx"
          pr={4}
        >
          Discord
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: "normal" }}
          href="https://twitter.com/PoofCash"
          pr={4}
        >
          Twitter
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: "normal" }}
          href="https://docs.poof.cash/"
        >
          FAQ
        </NavLink>
      </Flex>
    </div>
  );
};

const Motto = () => {
  return (
    <Container
      sx={{
        gridRowStart: [2, 2],
        gridColumnStart: [1],
        gridColumnEnd: [3],
      }}
    >
      <Text variant="motto">Now they see it,</Text>
      <br />
      <Text variant="motto">Now they don't</Text>
      <br />
      <br />
      <Text variant="subtitle">
        Poof Cash protects your privacy on Celo. Keep your identity, balances,
        and transactions safe from prying eyes.
      </Text>
      <br />
      <br />
      <a href="https://app.poof.cash">
        <Button
          onClick={() => {
            location.href = "https://app.poof.cash";
          }}
          variant="launch"
        >
          Launch App
        </Button>
      </a>
    </Container>
  );
};

const Illustration = () => {
  return (
    <Flex
      sx={{
        width: ["120%", "100%"],
        marginTop: ["-64px", "0px"],
        marginLeft: ["-8px", "0px"],
        gridRowStart: [3, 2],
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 2],
        justifyContent: "center",
      }}
    >
      <Image sx={{ maxHeight: ["700px"] }} src="/mobile.png" />
    </Flex>
  );
};

export const Header = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: "1fr auto",
        rowGap: ["4rem", "8rem"],
        justifyContent: "center",
        mb: 6,
      }}
    >
      <Logo />
      <Navbar />
      <Motto />
      <Illustration />
    </Grid>
  );
};
