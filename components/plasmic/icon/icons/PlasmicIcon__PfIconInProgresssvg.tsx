// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconInProgresssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconInProgresssvgIcon(props: PfIconInProgresssvgIconProps) {
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
          "M193.536 985.82l67.438-116.736c-5.705-5.047-11.337-10.24-16.75-15.579-34.231-33.938-61.221-73.801-80.896-119.662-6.729-15.653-12.215-31.598-16.677-47.909l-134.875 9.289c6.729 30.574 16.311 60.27 28.818 89.015 26.99 62.025 63.634 116.37 110.007 162.962 13.678 13.751 28.014 26.624 43.081 38.619zm-17.847-570.368l-120.32-60.709c-5.266 10.24-10.167 20.699-14.848 31.378C18.139 437.54 5.047 491.886 1.243 549.23l135.387-9.362c4.242-34.231 13.093-66.999 26.697-98.304 3.877-8.923 7.973-17.627 12.434-26.112zm807.79-29.331c-26.99-62.025-63.707-116.151-110.007-162.523s-100.498-83.017-162.523-110.007S582.583 73.07 511.927 73.07v138.313c50.834.293 98.67 10.094 143.579 29.55 45.568 19.675 85.431 46.665 119.662 80.896s61.221 74.094 80.896 119.662 29.55 94.135 29.55 145.847-9.874 100.425-29.55 146.359c-19.675 45.861-46.665 85.723-80.896 119.662s-74.094 60.709-119.662 80.457-94.135 29.55-145.847 29.55c-42.935 0-83.822-6.802-122.514-20.407l-67.511 116.955c60.123 24.795 124.197 37.23 192.293 37.23 70.656 0 136.997-13.385 199.022-40.009S827.1 993.793 873.472 947.128s83.017-101.01 110.007-162.962S1024 655.8 1024 585.144c0-70.656-13.531-136.997-40.521-199.022z"
        }
      ></path>
    </svg>
  );
}

export default PfIconInProgresssvgIcon;
/* prettier-ignore-end */
