// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaFigmasvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaFigmasvgIcon(props: FaFigmasvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 384 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 95.8C14 42.9 56.9 0 109.8 0h164.4C327.1 0 370 42.9 370 95.8c0 33.5-17.2 63-43.3 80.1C352.8 193 370 222.5 370 256c0 52.9-42.9 95.8-95.8 95.8h-2.1c-24.8 0-47.4-9.4-64.4-24.9v88.3c0 53.6-44 96.8-97.4 96.8-52.8 0-96.3-42.8-96.3-95.8 0-33.5 17.2-63 43.2-80.1C31.2 319 14 289.5 14 256c0-33.5 17.2-63 43.2-80.1-26-17.1-43.2-46.6-43.2-80.1zm162.3 95.8h-66.5c-35.6 0-64.4 28.8-64.4 64.4 0 35.4 28.6 64.2 64 64.4h66.9V191.6zm31.4 64.4c0 35.6 28.8 64.4 64.4 64.4h2.1c35.5 0 64.4-28.8 64.4-64.4 0-35.6-28.9-64.4-64.4-64.4h-2.1c-35.6 0-64.4 28.8-64.4 64.4zm-97.9 95.8h-.4c-35.4.2-64 29-64 64.4 0 35.5 29.2 64.4 64.9 64.4 36.3 0 66-29.4 66-65.4v-63.4h-66.5zm0-320.4c-35.6 0-64.4 28.8-64.4 64.4 0 35.6 28.8 64.4 64.4 64.4h66.5V31.4h-66.5zm97.9 128.8h66.5c35.5 0 64.4-28.8 64.4-64.4 0-35.6-28.9-64.4-64.4-64.4h-66.5v128.8z"
        }
      ></path>
    </svg>
  );
}

export default FaFigmasvgIcon;
/* prettier-ignore-end */
