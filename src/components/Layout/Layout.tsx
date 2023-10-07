import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import Loader from "../Loader";
import { RouterLink } from "../Link";

const Layout = () => {
  return (
    <>
      <nav>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#1A2027" }}>
              <Toolbar>
                <IconButton
                  component={RouterLink}
                  href={`/`}
                  size="large"
                  edge="start"
                  style={{ color: "orange" }}
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <AirplanemodeActiveIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Country
                </Typography>
                <Button color="inherit" disabled>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </Container>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
