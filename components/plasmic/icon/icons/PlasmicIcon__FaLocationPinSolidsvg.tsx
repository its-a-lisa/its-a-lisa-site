// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaLocationPinSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaLocationPinSolidsvgIcon(
  props: FaLocationPinSolidsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 384 512"}
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
          "M384 192c0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192z"
        }
      ></path>
    </svg>
  );
}

export default FaLocationPinSolidsvgIcon;
/* prettier-ignore-end */
