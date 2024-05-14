// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaOSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaOSolidsvgIcon(props: FaOSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M224 96a160 160 0 100 320 160 160 0 100-320zm224 160a224 224 0 11-448 0 224 224 0 11448 0z"
        }
      ></path>
    </svg>
  );
}

export default FaOSolidsvgIcon;
/* prettier-ignore-end */
