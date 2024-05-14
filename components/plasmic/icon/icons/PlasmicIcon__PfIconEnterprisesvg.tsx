// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconEnterprisesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconEnterprisesvgIcon(props: PfIconEnterprisesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1024 1024"}
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
          "M511.543 73.143H438.4L0 182.857v772.571l584.457 141.714H657.6l365.257-146.286v-768L511.543 73.142zm73.143 946.286l-73.143-17.371V892.572l-365.486-88v111.086l-72.914-17.371V274.058l511.543 113.6v631.771zm365.028-118.172l-73.143 29.257v-86.171l-146.057 57.6v87.086l-73.143 29.257v-616L949.714 289.6v611.657zM146.057 0l365.486 82.286V-65.143l-365.486-81.143zm0 731.429l365.486 86.857V670.857l-365.486-85.714zM876.8 405.486l-146.286 57.6v146.286l146.286-57.6zm0 219.428l-146.286 57.6V828.8L876.8 771.2z"
        }
      ></path>
    </svg>
  );
}

export default PfIconEnterprisesvgIcon;
/* prettier-ignore-end */
