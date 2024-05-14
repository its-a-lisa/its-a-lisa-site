// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaCircleDotRegularsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaCircleDotRegularsvgIcon(
  props: FaCircleDotRegularsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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
          "M464 256a208 208 0 10-416 0 208 208 0 10416 0zM0 256a256 256 0 11512 0 256 256 0 11-512 0zm256-96a96 96 0 110 192 96 96 0 110-192z"
        }
      ></path>
    </svg>
  );
}

export default FaCircleDotRegularsvgIcon;
/* prettier-ignore-end */
