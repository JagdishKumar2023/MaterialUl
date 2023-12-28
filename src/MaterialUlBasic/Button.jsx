import React from "react";
import "./MaterialUlBasic/Button";

export const Button = () => {
  return (
    <div>
      <Stack spacing={2} direection="row">
        <Button varient="text">Text</Button>
        <Button varient="contained"></Button>
        <Button varient="Outline">Outline</Button>
      </Stack>
    </div>
  );
};
