import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps,
} from "./plasmic/its_a_lisa_site/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSelector } from "@plasmicapp/react-web/lib/host";

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {
  const { darkMode, toggleDarkMode } = useSelector("darkModeData");

  return (
    <PlasmicHeader
      header={{ ref }}
      themeSwitch={{
        onChange: () => {
          toggleDarkMode();
        },
        // Pass the value of 'darkMode' to the switch component
        checked: darkMode,
      }}
    />
  );
}

const Header = React.forwardRef(Header_);
export default Header;