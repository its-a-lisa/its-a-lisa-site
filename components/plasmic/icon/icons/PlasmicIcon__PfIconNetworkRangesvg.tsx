// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconNetworkRangesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconNetworkRangesvgIcon(
  props: PfIconNetworkRangesvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 958 1024"}
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
          "M510.766 365.714h-73.417v145.714h73.417c40.183 0 72.869-32.686 72.869-72.869s-32.709-72.846-72.869-72.846zm224.183 316.343c44.091-62.811 69.989-139.337 69.989-221.897.023-213.577-189.097-386.674-402.651-386.674S-.387 246.583-.387 460.137c0 82.583 25.897 159.086 69.989 221.897l.389.549a259.82 259.82 0 002.171 3.04l283.634 375.474c23.566 40.503 47.154 35.52 47.154 35.52 26.24 0 47.04-35.726 47.04-35.726l282.4-375.223c.869-1.189 1.714-2.4 2.56-3.611zM291.04 732.572h-72v-440h72v440zm228.869-148h-82.56v145.714h-72V292.572h154.56c80.503 0 141.44 65.486 141.44 146.011s-60.937 145.989-141.44 145.989zm436.068-100.389c.617-110.469-37.28-198.331-92.754-264.366-10.629-12.663-21.44-24.754-32.526-36.96C820.846 172 812.526 164.731 805.554 160c-4.869-5.92-12.229-9.691-20.48-9.691-14.629 0-26.491 11.863-26.491 26.491 0 6.811 2.583 12.983 6.811 17.691 1.646 2.606 3.589 5.097 5.623 7.429 3.154 3.634 6.56 6.88 9.669 9.577 0 0 24.96 27.931 41.371 50.446 36.48 57.966 56.023 125.211 56.023 198.194 0 82.583-13.92 141.623-58.011 204.434-.846 1.211-1.691 2.4-2.56 3.611l-294.377 392.686s-2.743 4.686-7.451 10.651c21.12 29.143 56.389 25.097 56.389 25.097 40.48.183 60.754-35.726 60.754-35.726l278.377-378.217c.869-1.189 1.714-2.4 2.56-3.611 50.057-76.549 41.897-136.983 42.217-194.88z"
        }
      ></path>
    </svg>
  );
}

export default PfIconNetworkRangesvgIcon;
/* prettier-ignore-end */
