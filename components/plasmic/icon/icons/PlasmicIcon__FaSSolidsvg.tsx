// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSSolidsvgIcon(props: FaSSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 320 512"}
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
          "M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4 2.8 6.3 7.9 12.4 16.7 18.6 19.2 13.4 48.3 22.1 84.9 32.5 1 .3 1.9.6 2.9.8 32.7 9.3 72 20.6 100.9 40.7 15.7 10.9 29.9 25.5 38.6 45.1 8.8 19.8 10.8 42 6.6 66.3-7.3 42.5-35.3 71.7-71.8 87.3-35.4 15.2-79.1 17.9-123.7 10.9h-.2c-24-3.9-62.7-17.1-87.6-25.6-4.8-1.7-9.2-3.1-12.8-4.3-16.6-5.7-25.6-23.8-20.1-40.6s23.7-25.8 40.5-20.3C47 387.2 52.3 389 58 391c25.4 8.6 56.4 19.2 74.4 22.1 36.8 5.7 67.5 2.5 88.5-6.5 20.1-8.6 30.8-21.8 33.9-39.4 2.4-14.1.7-23.2-2-29.4-2.8-6.3-7.9-12.4-16.7-18.6-19.2-13.4-48.3-22.1-84.9-32.5-1-.3-1.9-.6-2.9-.8-32.7-9.3-72-20.6-100.9-40.7-15.7-10.9-29.9-25.5-38.6-45.1-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5-31.6-5.4c7.3-42.5 35.3-71.7 71.8-87.3 35.4-15.2 79.1-17.9 123.7-10.9 13 2 52.4 9.6 66.6 13.4 17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z"
        }
      ></path>
    </svg>
  );
}

export default FaSSolidsvgIcon;
/* prettier-ignore-end */
