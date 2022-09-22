import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/articles");

  }
  const token = localStorage.getItem("token");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IMIE-NEWS
          </Typography>
          {token === null ? (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
              className="link"
            >
              <Button color="inherit">Login</Button>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
              className="link"
            >
              <Button onClick={logout} color="inherit">
                logout
              </Button>
            </Link>
          )}
          <Link
            to="/articles"
            style={{ textDecoration: "none", color: "inherit" }}
            className="link"
          >
            <Button color="inherit">Articles</Button>
          </Link>
          <Link
            to="/new-article"
            style={{ textDecoration: "none", color: "inherit" }}
            className="link"
          >
            <Button color="inherit">new Articles</Button>
          </Link>
          <Link
            to="/new-article"
            style={{ textDecoration: "none", color: "inherit" }}
            className="link"
          >
            <Button color="inherit">new Articles</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
