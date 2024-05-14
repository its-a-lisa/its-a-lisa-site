// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaLSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaLSolidsvgIcon(props: FaLSolidsvgIconProps) {
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
          "M64 32c17.7 0 32 14.3 32 32v352h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"
        }
      ></path>
    </svg>
  );
}

export default FaLSolidsvgIcon;
/* prettier-ignore-end */
