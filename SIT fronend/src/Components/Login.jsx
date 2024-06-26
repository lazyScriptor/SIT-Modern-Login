import React, { useState, useEffect } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import "./login.css";
import monitor from "../assets/monitor.png";
import element from "../assets/element1.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import purple from "../assets/purple.png";
import green from "../assets/green.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClearUsername = () => setUsername("");
  const handleUsernameChange = (event) => setUsername(event.target.value);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTransform = () => {
    const xOffset = (mousePos.x - 0.5) * 50;
    const yOffset = (mousePos.y - 0.5) * 50;
    return `translate(${xOffset}px, ${yOffset}px)`;
  };

  return (
    <Box
      display={"flex"}
      width={"95vw"}
      height={"91vh"}
      sx={{ backgroundColor: "#15172E", borderRadius: 5, p: 5 }}
    >
      <Box width={"28vw"} display={"flex"}>
        <img
          src={monitor}
          style={{ width: "300px", position: "absolute", top: "20px" }}
        />
        <Box sx={{ mt: "25vh" }}>
          <Typography variant="h2" sx={{ color: "white", ml: 5 }}>
            Sign In to Monitor
          </Typography>
          <Box sx={{ height: "100px" }} />
          <Typography
            variant="h5"
            sx={{ color: "white", ml: 5, lineHeight: 1.9 }}
          >
            If you don't have an <br /> account you can
          </Typography>
          <a
            href="https://www.google.com/"
            style={{
              zIndex: 20000,
              position: "relative",
              textDecoration: "none",
            }}
          >
            <Typography variant="h5" sx={{ color: "#05DAB8", mt: 1, ml: 5 }}>
              Register here!
            </Typography>
          </a>
        </Box>
      </Box>
      <Box
        width={"28vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          transform: calculateTransform(),
          transition: "transform 0.1s ease-out",
        }}
      >
        <img src={element} />
      </Box>
      <Box
        gap={4}
        width={"38vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <TextField
          sx={{
            zIndex: 10,
            borderRadius: 2,
            width: "400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          id="outlined-basic"
          label="Enter username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear username"
                  onClick={handleClearUsername}
                  edge="end"
                >
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          }}
          component={Paper}
        />
        <TextField
          sx={{
            zIndex: 10,
            borderRadius: 2,
            width: "400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          component={Paper}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{
            mt: 5,
            zIndex: 10,
            width: "400px",
            height: "55px",
            borderRadius: 2,
            backgroundColor: "#05DAB8",
            "&:hover": {
              backgroundColor: "#04c5a1",
            },
          }}
        >
          Sign in
        </Button>
        <Box justifyContent={"center"} display={"flex"}>
          <Typography sx={{}} color={"grey"}>
            forgot password ?
          </Typography>
          <a href="https://www.google.com" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#05DAB8" }}> Sign in here</Typography>{" "}
          </a>
        </Box>
      </Box>
      <img
        src={purple}
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "900px",
          opacity: 0.4,
          zIndex: -1,
        }}
      />
      <img
        src={purple}
        style={{
          position: "absolute",
          top: "-40%",
          right: "-10%",
          width: "1000px",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <img
        src={green}
        style={{
          position: "absolute",
          top: "56%",
          left: "10%",
          width: "700px",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
    </Box>
  );
}
