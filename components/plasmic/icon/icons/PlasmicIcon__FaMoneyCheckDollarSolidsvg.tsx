// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaMoneyCheckDollarSolidsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FaMoneyCheckDollarSolidsvgIcon(
  props: FaMoneyCheckDollarSolidsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 576 512"}
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
          "M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm208 128h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 112c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zm-92-152v13.9c7.5 1.2 14.6 2.9 21.1 4.7 10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2-7.9-.1-16 1.8-21.5 5-4.8 2.8-6.2 5.6-6.2 9.3 0 1.8.1 3.5 5.3 6.7 6.3 3.8 15.5 6.7 28.3 10.5l.7.2c11.2 3.4 25.6 7.7 37.1 15 12.9 8.1 24.3 21.3 24.6 41.6.3 20.9-10.5 36.1-24.8 45-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20v-14.6c-10.3-2.2-20-5.5-28.2-8.4-2.1-.7-4.1-1.4-6.1-2.1-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5.8 4.9 1.7 7.2 2.4 13.6 4.6 24 8.1 35.1 8.5 8.6.3 16.5-1.6 21.4-4.7 4.1-2.5 6-5.5 5.9-10.5 0-2.9-.8-5-5.9-8.2-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14-12.7-7.7-24.6-20.5-24.7-40.7-.1-21.1 11.8-35.7 25.8-43.9 6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"
        }
      ></path>
    </svg>
  );
}

export default FaMoneyCheckDollarSolidsvgIcon;
/* prettier-ignore-end */
