import { useContext, useEffect } from "react";
import { Box, Grid, colors } from "@mui/material";
import { Link } from "react-router-dom";

import { Context } from "../usecontext/dataprovider";

import "./header.css";

const Header = () => {
  const { Theme, Themechanger } = useContext(Context);
  console.log(Theme);

  useEffect(() => {}, [Theme]);
  return (
    <Box id="box" className={Theme ? "darktheme" : "lighttheme"}>
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item xs={1}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span theme={Theme}>Home</span>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <span theme={Theme}>About</span>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <span theme={Theme}>Contact</span>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
