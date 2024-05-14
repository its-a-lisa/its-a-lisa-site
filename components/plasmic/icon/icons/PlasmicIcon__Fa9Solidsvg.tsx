// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fa9SolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fa9SolidsvgIcon(props: Fa9SolidsvgIconProps) {
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
          "M64 192a96 96 0 10192 0 96 96 0 10-192 0zm87.5 159.8C67.1 347.4 0 277.5 0 192 0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z"
        }
      ></path>
    </svg>
  );
}

export default Fa9SolidsvgIcon;
/* prettier-ignore-end */
