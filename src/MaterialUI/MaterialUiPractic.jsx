import Button from "@mui/material/Button";

function Material() {
  return (
    <>
      <h1>Text Button</h1>
      <Button>Click Me</Button>
      <Button color="secondary">Click Me</Button>
      <Button color="primary" href="https://google.com">
        Link
      </Button>
      <Button disabled>Disabled</Button>

      <h1>Contained Button</h1>
      <Button varient="contained">Click Me</Button>
      <Button varient="contained" color="secondary">
        Click Me
      </Button>
      <Button variant="contained" color="primray" href="https://google.com">
        Link
      </Button>
    </>
  );
}

export default Material;
