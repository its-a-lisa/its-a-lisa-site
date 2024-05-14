// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fa2SolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fa2SolidsvgIcon(props: Fa2SolidsvgIconProps) {
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
          "M142.9 96c-21.5 0-42.2 8.5-57.4 23.8l-30.9 30.8c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l30.9-30.8C67.5 47.3 104.4 32 142.9 32 223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l190.9-190.8c15.2-15.2 23.8-35.9 23.8-57.4 0-44.8-36.3-81.1-81.1-81.1z"
        }
      ></path>
    </svg>
  );
}

export default Fa2SolidsvgIcon;
/* prettier-ignore-end */
