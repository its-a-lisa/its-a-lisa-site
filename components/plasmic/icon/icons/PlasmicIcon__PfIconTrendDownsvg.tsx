// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconTrendDownsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconTrendDownsvgIcon(props: PfIconTrendDownsvgIconProps) {
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
          "M1024 893.765V488.412c-.311-14.638-6.224-29.271-16.809-39.858-10.587-10.585-24.907-16.187-39.541-16.498l-46.699-.002c-14.946 0-29.573 5.915-40.162 16.503-10.585 10.585-16.503 25.221-16.187 39.856l-.315 182.281-331.95-331.952c-7.767-7.767-19.719-7.767-27.488 0L365.596 477.997 116.972 229.38 2.222 344.123l349.625 349.63c7.771 7.769 19.723 7.769 27.493 0l133.55-133.55 231.847 230.51-182.75.313c-14.638-.313-29.271 5.605-39.856 16.19-10.585 10.587-16.501 25.221-16.19 39.856v46.697c0 14.942 5.605 29.266 16.19 39.851 10.585 10.587 25.216 16.503 40.16 16.503h405.353c14.185.304 28.066-5.554 38.546-15.554a18.673 18.673 0 008.581-10.306c5.904-9.035 9.23-19.598 9.23-30.496z"
        }
      ></path>
    </svg>
  );
}

export default PfIconTrendDownsvgIcon;
/* prettier-ignore-end */
