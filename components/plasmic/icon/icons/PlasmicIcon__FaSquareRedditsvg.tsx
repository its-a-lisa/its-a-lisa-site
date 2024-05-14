// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSquareRedditsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSquareRedditsvgIcon(props: FaSquareRedditsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
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
          "M64 32h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm241.9 134.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8-30.2 3.2-53.8 28.8-53.8 59.9v.2c-32.8 1.4-62.8 10.7-86.6 25.5-8.8-6.8-19.9-10.9-32-10.9-28.9 0-52.3 23.4-52.3 52.3 0 21 12.3 39 30.1 47.4 1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3 0-28.9-23.4-52.3-52.3-52.3-12 0-23 4-31.9 10.8-24-14.9-54.3-24.2-87.5-25.4v-.1c0-22.2 16.5-40.7 37.9-43.7 3.9 16.5 18.7 28.7 36.3 28.7zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9-27.5-7.7-26.6-26.7 13.5-33.5 28.1-33.5zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9c-.9-19 10.3-34.4 25-34.4s27.3 14.6 28.1 33.5zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6.7-5.4 3.4-5.7 16.1-1.6 33.5-2.5 51.7-2.5s35.6.9 51.7 2.5c2.7.3 4.5 3.1 3.4 5.7z"
        }
      ></path>
    </svg>
  );
}

export default FaSquareRedditsvgIcon;
/* prettier-ignore-end */