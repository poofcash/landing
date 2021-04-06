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
      <Flex
        sx={{
          alignItems: "flex-end",
          marginTop: "4px",
          justifyContent: "flex-end",
        }}
      >
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
      <Text sx={{ maxWidth: "200px" }} variant="subtitle">
        Poof Cash protects your privacy on Celo. <br />
        Keep your identity, balances, and <br />
        transactions safe from prying eyes.
      </Text>
      <br />
      <br />
      <Button
        sx={{ zIndex: 200 }}
        onClick={() => {
          location.href = "https://app.poof.cash";
        }}
        variant="launch"
      >
        Launch App
      </Button>
    </Container>
  );
};

const Illustration = () => {
  return (
    <Flex
      sx={{
        width: ["200%", "200%"],
        marginTop: ["-180px", "-284px"],
        marginLeft: ["-164px", "-100px"],
        gridRowStart: [3, 2],
        gridColumnStart: [1, 2],
        gridColumnEnd: [3, 2],
        justifyContent: "center",
        zIndex: -1,
      }}
    >
      <Image sx={{ maxHeight: ["800px", "1000px"] }} src="/mobile.png" />
    </Flex>
  );
};

export const Header = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: ["50% 50%"],
        rowGap: ["8rem", "16rem"],
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
