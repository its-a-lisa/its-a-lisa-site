// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconTrendUpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconTrendUpsvgIcon(props: PfIconTrendUpsvgIconProps) {
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
          "M1014.775 245.342c-1.515-4.432-4.569-8.071-8.581-10.306-10.48-10-24.361-15.858-38.546-15.554l-405.353.002c-14.944 0-29.575 5.915-40.16 16.501s-16.19 24.907-16.19 39.851v46.697c-.311 14.633 5.605 29.266 16.19 39.854 10.585 10.585 25.216 16.501 39.854 16.19l182.75.311-231.847 230.51-133.55-133.55c-7.769-7.769-19.721-7.769-27.493 0L2.224 825.478l114.75 114.745 248.624-248.619 139.253 139.255c7.769 7.767 19.721 7.767 27.49 0l331.947-331.95.313 182.281c-.313 14.633 5.605 29.269 16.19 39.854 10.587 10.587 25.216 16.503 40.162 16.503l46.699-.002c14.631-.311 28.953-5.913 39.538-16.498 10.587-10.587 16.501-25.218 16.811-39.856V275.836c0-10.898-3.326-21.461-9.227-30.491z"
        }
      ></path>
    </svg>
  );
}

export default PfIconTrendUpsvgIcon;
/* prettier-ignore-end */
