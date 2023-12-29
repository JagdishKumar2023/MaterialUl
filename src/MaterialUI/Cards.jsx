import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export const Cards = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          np
          height="140"
          image="https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg"
          alt="testImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Design
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem excepturi, minima quam quo asperiores rem tenetur fugiat
            ex aspernatur ad in culpa numquam reprehenderit. Provident enim
            alias esse eius!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContentText>
          Are you sure to Delete this product ?
        </DialogContentText>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
