// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.414 7.586l.293.293C5.902 8.074 6 8.448 6 9s-.195 1.023-.586 1.414c-.39.39-.862.586-1.414.586a1.927 1.927 0 01-1.414-.586A1.927 1.927 0 012 9c0-.552.195-1.023.586-1.414C2.976 7.196 3.448 7 4 7c.552 0 1.023.195 1.414.586zM8 9c0-.568-.086-1.034-.258-1.398L4.898 1.555a1.004 1.004 0 00-1.426-.406.9.9 0 00-.363.406L.258 7.602C.086 7.966 0 8.432 0 9a3.85 3.85 0 001.172 2.828A3.854 3.854 0 004 13a3.85 3.85 0 002.828-1.172A3.854 3.854 0 008 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
