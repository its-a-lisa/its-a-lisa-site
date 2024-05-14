// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaNSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaNSolidsvgIcon(props: FaNSolidsvgIconProps) {
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
          "M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 13.5-8.4 25.5-21.1 30.1s-26.9.7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-13.5 8.4-25.5 21.1-30.1z"
        }
      ></path>
    </svg>
  );
}

export default FaNSolidsvgIcon;
/* prettier-ignore-end */
