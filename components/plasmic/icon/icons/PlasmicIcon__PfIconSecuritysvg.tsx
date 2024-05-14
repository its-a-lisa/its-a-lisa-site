// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconSecuritysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconSecuritysvgIcon(props: PfIconSecuritysvgIconProps) {
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
          "M925.714 85.806a41.02 41.02 0 00-30.034-12.663H128a41.02 41.02 0 00-30.034 12.663 41.006 41.006 0 00-12.663 29.989v511.817a305.93 305.93 0 0022.331 113.623 423.85 423.85 0 0055.314 99.909c23.497 30.72 49.806 59.177 78.629 84.96a914.903 914.903 0 0084.297 68.571c25.76 18.286 52.64 35.497 80.64 51.657s47.863 27.154 59.634 32.983c11.771 5.783 21.211 10.217 28.32 13.326a39.57 39.57 0 0034.651 0c7.109-3.04 16.549-7.497 28.32-13.326s31.68-16.777 59.703-32.846c28-16.206 54.88-33.44 80.64-51.657a915.232 915.232 0 0084.297-68.571 615.987 615.987 0 0078.606-85.097 424.576 424.576 0 0055.314-99.954 305.91 305.91 0 0022.331-113.623V115.796a40.966 40.966 0 00-12.617-29.989zM595.337 840.48c-.206 15.291-12.549 27.634-27.84 27.84h-111.36c-15.291-.206-27.634-12.549-27.84-27.84v-97.44c.206-15.291 12.549-27.634 27.84-27.84h111.36c15.291.206 27.634 12.549 27.84 27.84v97.44zm.869-245.577a27.976 27.976 0 01-8.914 19.566 27.45 27.45 0 01-19.794 8.274h-111.36a27.455 27.455 0 01-19.794-8.274 27.972 27.972 0 01-8.914-19.566l-12.183-334.057a25.671 25.671 0 017.611-19.566 26.072 26.072 0 0119.36-8.274h139.2a26.08 26.08 0 0119.36 8.274 25.67 25.67 0 017.611 19.566l-12.183 334.057z"
        }
      ></path>
    </svg>
  );
}

export default PfIconSecuritysvgIcon;
/* prettier-ignore-end */
