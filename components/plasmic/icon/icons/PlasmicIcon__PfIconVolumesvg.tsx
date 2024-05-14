// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconVolumesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconVolumesvgIcon(props: PfIconVolumesvgIconProps) {
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
          "M890.743 219.2c-39.086-22.4-92.571-40.229-159.771-53.257s-140.571-19.657-219.657-19.657c-79.314 0-152.457 6.629-219.886 19.657-67.2 13.257-120.686 30.857-159.543 53.257-39.086 22.629-58.743 46.857-58.743 73.143v148.571c0 26.286 19.657 50.743 58.743 73.143s92.571 40.229 159.771 53.257c67.2 13.029 140.571 19.657 219.657 19.657s152.457-6.629 219.657-19.657c67.2-13.029 120.686-30.857 159.771-53.257 39.086-22.629 58.743-46.857 58.743-73.143V292.343c0-26.286-19.657-50.743-58.743-73.143zM511.086 659.886c-90.057 0-174.4-8-252.8-24.457-78.4-16.229-140.114-40.457-185.143-72.457v243.429c0 26.286 19.657 50.743 58.743 73.143s92.343 40.229 159.771 53.257c67.2 13.029 140.571 19.657 219.657 19.657s152.229-6.629 219.657-19.657c67.2-13.029 120.686-30.857 159.771-53.257 39.086-22.629 58.743-46.857 58.743-73.143V562.972c-45.486 32-107.2 56-185.6 72.457-78.4 16.229-162.743 24.457-252.8 24.457z"
        }
      ></path>
    </svg>
  );
}

export default PfIconVolumesvgIcon;
/* prettier-ignore-end */
