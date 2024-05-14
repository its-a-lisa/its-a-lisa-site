// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaPSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaPSolidsvgIcon(props: FaPSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 320 512"}
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
          "M0 96c0-35.3 28.7-64 64-64h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32S0 465.7 0 448V96zm64 192h96c53 0 96-43 96-96s-43-96-96-96H64v192z"
        }
      ></path>
    </svg>
  );
}

export default FaPSolidsvgIcon;
/* prettier-ignore-end */
