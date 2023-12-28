import "./App.css";
import { Cards } from "./MaterialUI/Cards";

function App() {
  return (
    <div>
      <Cards />
      {/* <Modals /> */}
      {/* button style in material ui */}

      {/* <Typography variant="h1" component={"h2"} sx={{ color: "green" }}>
        Techinfo YT
      </Typography>
      <Button varitant="contained" color="success" sx={{ margin: "30px" }}>
        Click me
      </Button>
      <Button varitant="text">Click her</Button>
      <Button
        variant="outlined"
        sx={{ margin: "20px" }}
        onClick={() => alert("you clicked her")}
      >
        click to signup
      </Button>
      <br></br>

      {/* Input field style in material ui  */}

      {/* <TextField
        type="text"
        placeholder="name"
        variant="standard"
        sx={{ margin: "20px" }}
      />
      <TextField
        type="email"
        placeholder="email enter"
        variant="standard"
        sx={{ margin: "20px" }}
      />
      <TextField
        type="tel"
        placeholder="enter phone number "
        variant="outlined"
        sx={{ margin: "20px" }}
      />
      <TextField
        type="password"
        placeholder="enter password"
        variant="filled"
        sx={{ margin: "18px" }}
      /> */}
    </div>
  );
}

export default App;
