// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaRedosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaRedosvgIcon(props: FaRedosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 512 512"}
      aria-hidden={"true"}
      role={"img"}
      style={{
        verticalAlign: '-.125em"',

        ...(style || {}),
      }}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M500.33 0h-47.41a12 12 0 00-12 12.57l4 82.76A247.42 247.42 0 00256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 00166.18-63.91 12 12 0 00.48-17.43l-34-34a12 12 0 00-16.38-.55A176 176 0 11402.1 157.8l-101.53-4.87a12 12 0 00-12.57 12v47.41a12 12 0 0012 12h200.33a12 12 0 0012-12V12a12 12 0 00-12-12z"
        }
      ></path>
    </svg>
  );
}

export default FaRedosvgIcon;
/* prettier-ignore-end */
