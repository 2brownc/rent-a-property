import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import Link from "@mui/material/Link";
import { styles } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Catalog", href: "#catalog" },
  { name: "About", href: "#about" },
];

export default function Navigation() {

  const [sideNavOpen, setSideNavOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setSideNavOpen({ ...sideNavOpen, [anchor]: open });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="default"
            sx={{
              flexGrow: "1"
            }}
          >
            Goshen Realty
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block"
              }
            }}
          >
            {navigationLinks.map((item) => (
              <Button
                color="inherit"
                href={item.href}
                key={item.href}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: {
                xs: "block",
                md: "none"
              }
            }}
          >
            <IconButton
              color="inherit"
              onClick={() => setSideNavOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <SwipeableDrawer
            anchor="right"
            open={sideNavOpen}
            onClose={() => setSideNavOpen(false)}
            onOpen={() => setSideNavOpen(true)}
          >
            <Box>
              <Button onClick={() => setSideNavOpen(false)}>HIDE ME</Button>
              <Divider />
              <Stack
                direction="column"
                alignItems="flex-start"
              >
                {navigationLinks.map((item) => (
                  <Button
                    color="inherit"
                    href={item.href}
                    key={item.href}
                  >
                    {item.name}
                  </Button>
                ))}
              </Stack>
            </Box>
          </SwipeableDrawer>

        </Toolbar>
      </AppBar>
    </Box>
  );
}