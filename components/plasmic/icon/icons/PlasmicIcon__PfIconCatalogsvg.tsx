// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconCatalogsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconCatalogsvgIcon(props: PfIconCatalogsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1097 1024"}
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
          "M509.714 286.629v.686c.229-.229.229-.457 0-.686zM184.457 939.886c-67.2 6.171-111.314 83.657-111.314 83.657V146.286C0 148.572 0 214.857 0 214.857v813.714c2.971 86.857 109.714 66.286 109.714 66.286C219.428 940.114 512 1097.143 512 1097.143v-71.314C386.286 944 269.714 930.286 184.457 939.886zm182.172-49.6c53.486 9.371 110.857 52.571 143.086 60.343v-72.914h-4.572 4.571V286.629l.229-58.057s-.229 0-.229-.229v-8C390.4 143.543 235.657 91.2 146.285 74.514v811.2c65.6-18.057 120.229-13.257 220.343 4.571zm220.8-603.657c-.229.229-.229.229 0 0zM1024 146.286v877.257s-44.114-77.486-111.314-83.657c-85.257-9.6-201.829 4.114-327.543 85.943v71.314s292.571-157.029 402.286-2.286c0 0 106.743 20.571 109.714-66.286V214.857s0-66.286-73.143-68.571zM587.429 478.857v398.857l10.514-1.829c-2.057 1.143-4.343 1.829-6.629 1.829h-3.886v72.914c32.229-7.771 89.6-50.971 143.086-60.343 100.114-17.829 154.743-22.629 220.343-4.571v-811.2c-89.371 16.686-244.114 69.029-363.429 145.6v8.229c0 .229-.229.229-.229.229l.229 58.057v192.229z"
        }
      ></path>
    </svg>
  );
}

export default PfIconCatalogsvgIcon;
/* prettier-ignore-end */
