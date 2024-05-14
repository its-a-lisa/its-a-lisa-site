// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fa8SolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fa8SolidsvgIcon(props: Fa8SolidsvgIconProps) {
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
          "M304 160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 34.6 13.7 66 36 89-31.5 23.3-52 60.8-52 103 0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128 0-42.2-20.5-79.7-52-103 22.3-23 36-54.4 36-89zM176.1 288H192c35.3 0 64 28.7 64 64s-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64s28.7-64 64-64h48.1zm0-64H144c-35.3 0-64-28.7-64-64s28.7-64 64-64h32c35.3 0 64 28.7 64 64s-28.6 64-64 64z"
        }
      ></path>
    </svg>
  );
}

export default Fa8SolidsvgIcon;
/* prettier-ignore-end */
