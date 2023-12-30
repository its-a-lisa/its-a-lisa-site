import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/its_a_lisa_site/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSelector } from "@plasmicapp/react-web/lib/host";

export interface HeaderProps extends DefaultHeaderProps {
  darkMode: boolean; // Add the 'darkMode' prop
  toggleDarkMode: () => void; // Add the 'toggleDarkMode' prop
}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {
  const changeMode = useSelector("changeMode");
  const { darkMode, toggleDarkMode, ...restProps } = props;


  return <PlasmicHeader 
  header={{ ref }} _switch={{
    onChange: (isChecked) => {
      toggleDarkMode(); // Toggle dark mode when the switch changes
      changeMode(isChecked ? "dark" : undefined);
    },
    // Pass the value of 'darkMode' to the switch component
    checked: darkMode,
  }}
  {...restProps} 
  />;
}

const Header = React.forwardRef(Header_);
export default Header;
