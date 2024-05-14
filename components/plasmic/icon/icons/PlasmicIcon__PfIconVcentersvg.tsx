// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconVcentersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconVcentersvgIcon(props: PfIconVcentersvgIconProps) {
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
          "M889.143 75.817H427.429c-73.737 0-133.714 59.977-133.714 133.714v157.897H135.818c-73.737 0-133.714 59.977-133.714 133.714v461.714c0 73.737 59.977 133.714 133.714 133.714h461.714c73.714 0 133.714-59.977 133.714-133.714V802.673h157.897c73.737 0 133.714-59.977 133.714-133.714V209.53c0-73.737-59.977-133.714-133.714-133.714zm-10.286 582.835H586.354l.891 92.16v201.76H146.102V511.406h291.611V219.795h441.143v438.857zm-659.428-30.08v205.714c0 23.886 19.543 43.429 43.429 43.429h205.714c23.886 0 43.429-19.543 43.429-43.429V628.572s12.64-44.183 42.903-44.183h205.714c23.886 0 43.429-19.543 43.429-43.429V335.246c0-23.886-19.543-43.429-43.429-43.429H554.904c-23.886 0-43.429 19.543-43.429 43.429V540.96s1.303 44.183-42.903 44.183H262.858c-23.886 0-43.429 19.543-43.429 43.429z"
        }
      ></path>
    </svg>
  );
}

export default PfIconVcentersvgIcon;
/* prettier-ignore-end */
