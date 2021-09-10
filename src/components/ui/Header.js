import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header =  (props) => (
  <ElevationScroll>
    <AppBar position="fixed">
      <Toolbar>
        <h1>Arc Development</h1>
        <h2>text</h2>
        <p>text ofiej fefoij woefijweoij sife</p>
      </Toolbar>
    </AppBar>
  </ElevationScroll>
);

export default Header;