import * as React from "react";
import {
  PlasmicCompSwitch,
  DefaultCompSwitchProps
} from "./plasmic/its_a_lisa_site/PlasmicCompSwitch";

import { SwitchRef } from "@plasmicapp/react-web";

export interface CompSwitchProps extends DefaultCompSwitchProps {
  // Feel free to add any additional props that this component should receive
}
function CompSwitch_(props: CompSwitchProps, ref: SwitchRef) {
  const { plasmicProps, state } =
    PlasmicCompSwitch.useBehavior<CompSwitchProps>(props, ref);
  return <PlasmicCompSwitch {...plasmicProps} />;
}

const CompSwitch = React.forwardRef(CompSwitch_);

export default Object.assign(
  CompSwitch,

  {
    __plumeType: "switch",
    __plasmicFormFieldMeta: { valueProp: "isChecked" }
  }
);
