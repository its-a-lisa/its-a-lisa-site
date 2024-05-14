// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaISolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaISolidsvgIcon(props: FaISolidsvgIconProps) {
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
          "M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h96v320H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"
        }
      ></path>
    </svg>
  );
}

export default FaISolidsvgIcon;
/* prettier-ignore-end */
