// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 8.453V2.25c0-.344-.122-.638-.367-.883A1.204 1.204 0 0012.75 1H1.25c-.344 0-.638.122-.883.367S0 1.907 0 2.25v6.203c.23-.255.492-.482.79-.68 1.884-1.28 3.179-2.18 3.882-2.695.297-.219.538-.39.723-.512.184-.122.43-.247.738-.375.307-.127.594-.191.86-.191h.015c.265 0 .552.064.86.191.306.128.553.253.737.375.185.123.426.293.723.512.886.64 2.182 1.54 3.89 2.695.298.204.558.43.782.68zm0 2.297c0-.412-.128-.805-.383-1.18a3.714 3.714 0 00-.953-.96L9.008 6.07a34.612 34.612 0 01-.332-.238c-.17-.122-.31-.221-.422-.297a8.107 8.107 0 00-.406-.254 2.367 2.367 0 00-.45-.21A1.205 1.205 0 007.008 5h-.016c-.12 0-.25.023-.39.07-.141.047-.29.117-.45.211a8.107 8.107 0 00-.406.254 18.24 18.24 0 00-.422.297c-.169.122-.28.202-.332.238-.474.334-1.156.809-2.047 1.426-.89.617-1.424.988-1.601 1.113-.323.22-.628.52-.914.903-.287.383-.43.738-.43 1.066 0 .406.108.745.324 1.016.216.27.525.406.926.406h11.5c.338 0 .632-.122.879-.367s.371-.54.371-.883z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
