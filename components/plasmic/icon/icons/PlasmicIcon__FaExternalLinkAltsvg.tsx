// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaExternalLinkAltsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaExternalLinkAltsvgIcon(props: FaExternalLinkAltsvgIconProps) {
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
          "M432 320h-32a16 16 0 00-16 16v112H64V128h144a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V336a16 16 0 00-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 00-24-24z"
        }
      ></path>
    </svg>
  );
}

export default FaExternalLinkAltsvgIcon;
/* prettier-ignore-end */
