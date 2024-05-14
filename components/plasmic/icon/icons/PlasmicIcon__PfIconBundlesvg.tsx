// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconBundlesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconBundlesvgIcon(props: PfIconBundlesvgIconProps) {
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
          "M348.571 302.629l1.143 322.743 317.029 56.457L830.857 587.2l.229-304.229L511.543 233.6zm309.943-153.372l-228.343-27.2L272 165.714l240.686 33.371zm362.743 45.257v-.229l-.686.229-299.886-36.571-145.143 50.286 313.6 44.343-.457 299.2 125.486-80.229 7.086-276.343.457-.229zM885.486 901.029l121.371-116.343 6.629-245.257-124.8 84.343zm-535.772-195.2l-1.371 296.914 314.057 94.4 167.771-155.657.457-281.829-163.886 107.886zm101.257-484.343l-239.771-35.2L2.743 246.4 14.4 562.286l271.086 50.286-2.743-325.257zM25.6 906.286l259.886 80.229V692.572L15.315 637.715z"
        }
      ></path>
    </svg>
  );
}

export default PfIconBundlesvgIcon;
/* prettier-ignore-end */
