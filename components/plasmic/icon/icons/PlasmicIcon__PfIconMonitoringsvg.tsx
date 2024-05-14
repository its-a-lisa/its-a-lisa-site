// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconMonitoringsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconMonitoringsvgIcon(props: PfIconMonitoringsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1097 1024"}
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
          "M1097.143 948.572V144.001H0v804.571h475.429v73.143h-256v73.143h658.286v-73.143h-256v-73.143h475.429zM146.286 802.286V292.572h802.286v509.714H146.286zm655.817-433.394L621.714 555.041l-145.76-150.309-249.326 249.326c-18.743 18.743-18.743 49.143 0 67.886 9.371 9.371 21.646 14.057 33.943 14.057s24.571-4.686 33.943-14.057l180.389-180.389 146.811 151.406 249.326-257.28c18.446-19.04 17.966-49.417-1.074-67.863-19.017-18.446-49.417-17.966-67.863 1.074z"
        }
      ></path>
    </svg>
  );
}

export default PfIconMonitoringsvgIcon;
/* prettier-ignore-end */
