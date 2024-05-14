// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfAnsiblesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfAnsiblesvgIcon(props: PfAnsiblesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"20 20 390 390"}
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
          "M402.6 214.7c0 103.9-84.2 188.1-188.1 188.1-103.9 0-188.1-84.2-188.1-188.1 0-103.9 84.2-188.1 188.1-188.1 103.9 0 188.1 84.2 188.1 188.1zm-98.5 74.6l-74.9-180.2c-2.1-5.2-6.4-7.9-11.6-7.9-5.2 0-9.8 2.8-11.9 7.9l-82.2 197.7h28.1l32.5-81.5 97.1 78.4c3.9 3.2 6.7 4.6 10.4 4.6 7.3 0 13.7-5.5 13.7-13.4.1-1.3-.3-3.4-1.2-5.6zm-86.4-147.8l48.7 120.2-73.5-57.9 24.8-62.3z"
        }
      ></path>
    </svg>
  );
}

export default PfAnsiblesvgIcon;
/* prettier-ignore-end */
