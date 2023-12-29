import React, { useState } from "react";
import { Button, Box, Modal, Typography, Link } from "@mui/material";

export const Modals = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absoulte" top="50%" left="50%"></Box>
        <Typography>This is Modal</Typography>

        <Button variant="contained" onClick={() => setOpen(false)}>
          cancel
        </Button>
      </Modal>

      <Link
        variant="h4"
        color="secondary"
        href="https://www.youtube.com/c/techinfoyt"
        underline="always"
      ></Link>
    </div>
  );
};
