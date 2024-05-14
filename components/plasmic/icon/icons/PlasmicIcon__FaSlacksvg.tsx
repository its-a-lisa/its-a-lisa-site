// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSlacksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSlacksvgIcon(props: FaSlacksvgIconProps) {
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
          "M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1C0 289.2 21.2 268 47.1 268h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1s21.2-47 47.1-47S212 53.2 212 79.1v47.1h-47.1zm0 23.7c25.9 0 47.1 21.2 47.1 47.1S190.8 244 164.9 244H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1h117.8zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1S426.9 244 401 244h-47.1v-47.1zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1v117.8zm-47.1 189c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z"
        }
      ></path>
    </svg>
  );
}

export default FaSlacksvgIcon;
/* prettier-ignore-end */
