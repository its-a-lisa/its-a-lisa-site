// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaListsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaListsvgIcon(props: FaListsvgIconProps) {
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
          "M80 368H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm0-320H16A16 16 0 000 64v64a16 16 0 0016 16h64a16 16 0 0016-16V64a16 16 0 00-16-16zm0 160H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm416 176H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z"
        }
      ></path>
    </svg>
  );
}

export default FaListsvgIcon;
/* prettier-ignore-end */
