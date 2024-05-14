// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaKeysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaKeysvgIcon(props: FaKeysvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1024 1024"}
      aria-hidden={"true"}
      role={"img"}
      style={{
        verticalAlign: '-.125em"',

        ...(style || {}),
      }}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M965.486 219.429s-58.514-80.457-109.714-102.4c-160.914-87.771-358.4-29.257-446.171 124.343-51.2 87.771-58.514 190.171-21.943 277.943L.001 899.658v197.486h182.857V987.43h109.714V877.716h146.286l138.971-168.229c168.229 65.829 358.4-21.943 424.229-190.171 36.571-102.4 21.943-212.114-36.571-299.886zm-80.457 73.143c0 58.514-43.886 102.4-102.4 102.4s-102.4-43.886-102.4-102.4 43.886-102.4 102.4-102.4c58.514-7.314 102.4 43.886 102.4 102.4z"
        }
      ></path>
    </svg>
  );
}

export default FaKeysvgIcon;
/* prettier-ignore-end */
