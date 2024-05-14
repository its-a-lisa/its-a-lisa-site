// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaESolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaESolidsvgIcon(props: FaESolidsvgIconProps) {
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
          "M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"
        }
      ></path>
    </svg>
  );
}

export default FaESolidsvgIcon;
/* prettier-ignore-end */
