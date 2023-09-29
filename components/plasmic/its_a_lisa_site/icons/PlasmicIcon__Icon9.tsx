// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
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
          "M12.775 19.085a.706.706 0 00.223-.514.706.706 0 00-.223-.513L2.373 7.656a.706.706 0 00-.513-.223.706.706 0 00-.514.223L.23 8.772a.706.706 0 00-.223.514c0 .193.075.364.223.513l8.773 8.772L.23 27.344a.706.706 0 00-.223.513.71.71 0 00.223.514l1.116 1.116c.15.148.32.223.514.223a.706.706 0 00.513-.223l10.402-10.402z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
