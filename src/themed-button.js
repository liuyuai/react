import React from "react";
import {ThemeContext} from "./theme";


class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    return (
        <button {...props} style={{backgroundColor:theme.background}}></button>
    )
  }
}

// ThemedButton.contextType = ThemeContext;

export default ThemedButton;
