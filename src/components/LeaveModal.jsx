import Modal from "react-modal";
import { Box, Button, Flex, Text } from "theme-ui";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function LeaveModal({ open, setOpen }) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
      contentLabel="Redirect Notice"
    >
      <Box p={2} sx={{ maxWidth: "400px" }}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <h2>Redirect Notice</h2>
          <p sx={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
            x
          </p>
        </Flex>
        <Text sx={{ display: "block" }} mb={4}>
          By accessing this link you are leaving poof.cash and are being
          redirected to a third party, independent website.
        </Text>
        <Text sx={{ display: "block" }} mb={4}>
          This redirect takes you to a community deployed and maintained
          instance of the open source Poof.cash front end, hosted and served on
          the distributed, peer-to-peer file network known as the Interplanetary
          File System (IPFS).
        </Text>
        <Flex sx={{ justifyContent: "center" }}>
          <a href="https://app.poof.cash">
            <Button>Agree</Button>
          </a>
        </Flex>
      </Box>
    </Modal>
  );
}
