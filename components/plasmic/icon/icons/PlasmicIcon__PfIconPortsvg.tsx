// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconPortsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconPortsvgIcon(props: PfIconPortsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 951 1024"}
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
          "M549.554 960L385.44 490.194l-137.189 243.52H0V619.428h181.463l228.526-405.623 169.6 485.623 120.434-189.714h250.834V624H762.834z"
        }
      ></path>
    </svg>
  );
}

export default PfIconPortsvgIcon;
/* prettier-ignore-end */
