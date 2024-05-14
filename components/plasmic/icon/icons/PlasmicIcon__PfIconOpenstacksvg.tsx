// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconOpenstacksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconOpenstacksvgIcon(props: PfIconOpenstacksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 180 180"}
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
          "M17.15 0A17.17 17.17 0 00.03 17.12v40.35h41.61v-6.59a9.26 9.26 0 019.26-9.26h82.53a9.26 9.26 0 019.26 9.26v6.59h41.64V17.12A17.18 17.18 0 00167.15 0h-150zM0 69.37v41.62h41.62V69.37H0zm142.66 0v41.62h41.62V69.37h-41.62zM0 122.89v40.34a17.17 17.17 0 0017.12 17.13h150a17.18 17.18 0 0017.21-17.13v-40.34h-41.67v6.59a9.27 9.27 0 01-9.26 9.26H50.87a9.27 9.27 0 01-9.26-9.26v-6.59H0z"
        }
      ></path>
    </svg>
  );
}

export default PfIconOpenstacksvgIcon;
/* prettier-ignore-end */
