// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIpsumIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIpsumIconsvgIcon(props: LogoIpsumIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        clipPath={"url(#X72_7IgvQ_G7a)"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"#007DFC"}
      >
        <path
          d={
            "M26.225 12.323a10 10 0 00-5.556-1.685v-10a20 20 0 11-20 20h10a10 10 0 1015.556-8.315z"
          }
        ></path>

        <path d={"M10.67.638a10 10 0 01-10 10v10a20 20 0 0020-20h-10z"}></path>
      </g>

      <defs>
        <clipPath id={"X72_7IgvQ_G7a"}>
          <path
            fill={"#fff"}
            transform={"translate(.67 .638)"}
            d={"M0 0h40v40H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LogoIpsumIconsvgIcon;
/* prettier-ignore-end */
