// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconCloudSecuritysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconCloudSecuritysvgIcon(
  props: PfIconCloudSecuritysvgIconProps
) {
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
          "M548.343 426.743c-22.4 0-41.6 8-57.371 23.771s-23.771 34.971-23.771 57.371v60.8h162.057v-60.8c0-22.4-8-41.6-23.771-57.371-15.543-16-34.743-23.771-57.143-23.771zm500.8 169.6c-32-39.771-72.686-65.371-121.829-76.8 15.543-24 23.314-50.286 23.314-78.857 0-40.457-14.171-74.971-42.971-103.543-28.114-28.571-62.629-42.971-103.086-42.971-36.571 0-68.114 11.886-94.857 35.429-22.4-54.171-58.286-97.829-107.2-131.429s-103.543-50.286-163.657-50.286c-80.686 0-149.714 28.571-206.857 85.714s-85.714 126.171-85.714 206.857c0 5.714.457 13.943 1.143 24.686-44.114 20.571-79.771 51.657-106.971 93.486C13.487 600.229.001 646.172.001 696.458c0 70.4 25.143 130.743 75.2 180.8s110.4 75.2 180.8 75.2h621.714c60.571 0 112.229-21.486 155.2-64.229 42.971-42.971 64.229-94.629 64.229-155.2 0-51.429-16-96.914-48-136.686zm-318.4 177.6c0 8.457-2.971 15.543-8.914 21.486s-13.029 8.914-21.486 8.914h-304c-8.457 0-15.543-2.971-21.486-8.914s-8.914-13.029-8.914-21.486V598.629c0-8.457 2.971-15.543 8.914-21.486s13.029-8.914 21.486-8.914H406.4v-60.8c0-38.857 13.943-72 41.829-99.886s61.257-41.829 100.114-41.829 72.229 13.943 100.114 41.829c27.886 27.886 41.829 61.029 41.829 99.886v60.8h10.057c8.457 0 15.543 2.971 21.486 8.914s8.914 13.029 8.914 21.486v175.314z"
        }
      ></path>
    </svg>
  );
}

export default PfIconCloudSecuritysvgIcon;
/* prettier-ignore-end */
