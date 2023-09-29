// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ItemLink2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ItemLink2Icon(props: ItemLink2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.833 13.902a6.798 6.798 0 00-1.627-1.678 9.216 9.216 0 00-.372-3.028 9.42 9.42 0 00-1.16-2.496 9.81 9.81 0 00-1.853-2.115c-.717-.612-1.58-1.101-2.592-1.466a9.485 9.485 0 00-3.244-.548A9.01 9.01 0 00.003 4.028c.234-.027.495-.04.783-.04 1.507 0 2.85.462 4.028 1.386a3.163 3.163 0 00-1.888.648A3.173 3.173 0 001.78 7.624a4.11 4.11 0 01.612-.05c.288 0 .573.036.854.11a3.192 3.192 0 00-1.863 1.12 3.134 3.134 0 00-.738 2.064v.04a3.217 3.217 0 011.466-.411 3.24 3.24 0 00-1.054 1.155 3.161 3.161 0 00-.392 1.547c0 .589.147 1.135.442 1.637a9.197 9.197 0 012.958-2.396 9.041 9.041 0 013.732-1c-.054.255-.08.503-.08.744 0 .898.316 1.663.948 2.295.633.633 1.398.95 2.296.95.937 0 1.727-.342 2.37-1.025a6.36 6.36 0 012.06.784 3.15 3.15 0 00-1.427-1.788 6.461 6.461 0 011.868.502z"
        }
        fill={"currentColor"}
        opacity={".9"}
      ></path>
    </svg>
  );
}

export default ItemLink2Icon;
/* prettier-ignore-end */
