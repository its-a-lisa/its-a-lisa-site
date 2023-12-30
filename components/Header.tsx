import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/its_a_lisa_site/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSelector } from "@plasmicapp/react-web/lib/host";

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {
  const changeMode = useSelector('changeMode');

  return <PlasmicHeader 
  header={{ ref }} _switch={{
    onChange: (isChecked) => {
      changeMode(isChecked ? "dark" : undefined);
    }
  }}
  {...props} 
  />;
}

const Header = React.forwardRef(Header_);
export default Header;
