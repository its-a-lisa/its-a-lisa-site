// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaJSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaJSolidsvgIcon(props: FaJSolidsvgIconProps) {
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
          "M288 32c17.7 0 32 14.3 32 32v256c0 88.4-71.6 160-160 160S0 408.4 0 320v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 53 43 96 96 96s96-43 96-96V64c0-17.7 14.3-32 32-32z"
        }
      ></path>
    </svg>
  );
}

export default FaJSolidsvgIcon;
/* prettier-ignore-end */
