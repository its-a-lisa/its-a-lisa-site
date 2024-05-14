// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconMulticlustersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconMulticlustersvgIcon(
  props: PfIconMulticlustersvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 896 1024"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M768 768c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zm0-192c-70.692 0-128 57.308-128 128 0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128zM128 384c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zm0-192C57.308 192 0 249.308 0 320c0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128zm530.229 577.862L448 896 128 704V448c23.315 0 45.172-6.237 64-17.128V665.7l256 153.5 192.001-115.126c.014 24.061 6.67 46.566 18.228 65.788zM704 358.7l-152.474-91.425c13.093-17.976 21.619-39.487 23.871-62.837L768 320v256c-23.315 0-45.172 6.237-64 17.128V358.7zM237.771 254.138l82.832-49.7c2.252 23.35 10.778 44.862 23.871 62.837l-88.478 53.053c0-.11.004-.219.004-.328 0-24.089-6.659-46.62-18.229-65.862zM448 256c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zm0-192c-70.692 0-128 57.308-128 128 0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PfIconMulticlustersvgIcon;
/* prettier-ignore-end */
