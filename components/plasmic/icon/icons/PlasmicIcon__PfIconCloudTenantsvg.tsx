// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconCloudTenantsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconCloudTenantsvgIcon(props: PfIconCloudTenantsvgIconProps) {
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
          "M1041.6 552.229c-29.486-33.371-68.571-63.543-141.714-89.143 41.143-96 .457-151.314-28.343-179.886-28.114-28.571-62.629-42.971-103.086-42.971-36.571 0-68.114 11.886-94.857 35.429-.457-.686-.914-1.371-1.371-1.829l-73.371 544.457-453.029-353.6c-43.657 20.571-79.086 51.429-106.057 93.029S-.685 645.258-.685 695.544c0 70.4 25.143 130.743 75.2 180.8s110.4 75.2 180.8 75.2h621.714c60.571 0 112.229-21.486 155.2-64.229 42.971-42.971 64.229-105.6 64.229-155.2 0-24.686 10.971-105.829-54.857-179.886zM132.114 368.686L553.6 697.829l68.343-506.743C547.657 88.457 459.657 73.143 404.114 73.143c-74.971 0-139.429 26.514-192.457 79.771S131.886 270.4 131.886 345.371c0 5.257.457 13.029 1.143 22.857-.229.229-.686.229-.914.457z"
        }
      ></path>
    </svg>
  );
}

export default PfIconCloudTenantsvgIcon;
/* prettier-ignore-end */
