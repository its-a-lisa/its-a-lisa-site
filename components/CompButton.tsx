import * as React from "react";
import {
  PlasmicCompButton,
  DefaultCompButtonProps
} from "./plasmic/its_a_lisa_site/PlasmicCompButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface CompButtonProps extends DefaultCompButtonProps {
  // Feel free to add any additional props that this component should receive
}
function CompButton_(props: CompButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicCompButton.useBehavior<CompButtonProps>(
    props,
    ref
  );
  return <PlasmicCompButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<CompButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<CompButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const CompButton = React.forwardRef(CompButton_) as any as ButtonComponentType;

export default Object.assign(CompButton, { __plumeType: "button" });
