// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 40"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.775 28.37a.706.706 0 00.223-.513.706.706 0 00-.223-.513L4.003 18.57l8.772-8.77a.706.706 0 00.223-.513.706.706 0 00-.223-.514l-1.116-1.116a.706.706 0 00-.514-.223.706.706 0 00-.513.223L.23 18.058a.706.706 0 00-.223.513.71.71 0 00.223.514l10.402 10.402a.71.71 0 00.514.223.706.706 0 00.513-.223l1.116-1.116z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
