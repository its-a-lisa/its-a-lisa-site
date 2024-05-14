// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaBSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaBSolidsvgIcon(props: FaBSolidsvgIconProps) {
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
          "M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h128c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128H64zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zm-96 64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z"
        }
      ></path>
    </svg>
  );
}

export default FaBSolidsvgIcon;
/* prettier-ignore-end */
