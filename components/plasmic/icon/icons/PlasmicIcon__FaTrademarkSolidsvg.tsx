// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaTrademarkSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaTrademarkSolidsvgIcon(props: FaTrademarkSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 640 512"}
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
          "M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224l86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224v160c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-13.8-8.8-26-21.9-30.4s-27.5.1-35.7 11.2L464 266.7 345.6 108.8zM0 128c0 17.7 14.3 32 32 32h64v224c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"
        }
      ></path>
    </svg>
  );
}

export default FaTrademarkSolidsvgIcon;
/* prettier-ignore-end */
