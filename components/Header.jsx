import React from "react";
import { Box, Button, Container, Flex, Grid, NavLink, Text } from "theme-ui";

const Logo = () => {
  return <Text sx={{ height: "auto", fontWeight: "bold" }}>Poof.cash</Text>;
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
      <Container sx={{ display: ["none", "block"] }}>
        <Flex sx={{ alignItems: "center" }}>
          <NavLink sx={{ fontWeight: "normal" }} href="#quickstart" pr={4}>
            Quickstart
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
      </Container>
      <Flex sx={{ justifyContent: "flex-end" }}>
        <Button
          title="Toggle Menu"
          sx={{
            display: ["block", "none"],
            appearance: "none",
            width: 8,
            height: 8,
            m: 0,
            p: 1,
            color: "inherit",
            bg: "transparent",
            border: 0,
            ":focus": {
              outline: "2px solid",
            },
            ":hover": {
              color: "primary",
            },
          }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentcolor"
            viewBox="0 0 24 24"
            sx={{
              display: "block",
              margin: 0,
            }}
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </Button>
        {showMenu && (
          <Flex
            sx={{
              flexDirection: "column",
              position: "absolute",
              top: "80px",
              textAlign: "right",
            }}
          >
            <NavLink sx={{ fontWeight: "normal" }} href="#quickstart">
              Quickstart
            </NavLink>
            <NavLink sx={{ fontWeight: "normal" }} href="#magic">
              The Magic
            </NavLink>
            <NavLink sx={{ fontWeight: "normal" }} href="#faq">
              FAQ
            </NavLink>
            <NavLink href={"https://app.poof.cash"} variant="outline">
              Launch App
            </NavLink>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

const Motto = () => {
  return (
    <Container>
      <Text variant="styles.h2">Now they see it,</Text>
      <br />
      <Text variant="styles.h2">Now they don't</Text>
      <br />
      <br />
      <Text>
        Poof Cash protects your privacy on Celo. Keep your identity, balances,
        and transactions safe from prying eyes.
      </Text>
      <br />
      <br />
      <Button
        onClick={() => {
          location.href = "https://app.poof.cash";
        }}
        variant="outline"
      >
        Launch App
      </Button>
    </Container>
  );
};

const Illustration = () => {
  return (
    <Box
      sx={{
        display: ["none", "block"],
        height: 300,
        width: 300,
        bg: "grey",
      }}
    />
  );
};

export const Header = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: "1fr auto",
        rowGap: "8rem",
        justifyContent: "space-between",
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
