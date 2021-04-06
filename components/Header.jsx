import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  NavLink,
  Text,
  Image,
} from "theme-ui";

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
      <Container sx={{ display: ["none", "block"] }}>
        <Flex sx={{ alignItems: "center" }}>
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
            pr={4}
          >
            FAQ
          </NavLink>
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
              pr={4}
            >
              FAQ
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
      <Button
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
        marginTop: ["-16px", "0px"],
        marginLeft: ["32px", "0px"],
        gridRowStart: [3, 2],
        gridColumnStart: [1, 2],
        justifyContent: "center",
      }}
    >
      <Image sx={{ maxHeight: "700px" }} src="/mobile.png" />
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
