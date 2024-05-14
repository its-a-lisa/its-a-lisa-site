// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconNetworksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconNetworksvgIcon(props: PfIconNetworksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1170 1024"}
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
          "M1024 146.743H146.286v219.429H1024V146.743zm-74.743 145.829H730.286v-73.143h218.971v73.143zm131.2 455.314c-10.743-10.743-23.543-16-38.857-16h-54.857V585.829c0-19.886-7.314-36.8-21.714-51.429-14.4-14.4-31.543-21.714-51.429-21.714H621.714v-110.4h-73.143v110.629H256.228c-19.886 0-36.8 7.314-51.429 21.714-14.4 14.4-21.714 31.543-21.714 51.429v146.057h-54.857c-15.314 0-28.114 5.257-38.857 16s-16 23.543-16 38.857v182.629c0 15.314 5.257 28.114 16 38.857s23.543 16 38.857 16h182.629c15.314 0 28.114-5.257 38.857-16s16-23.543 16-38.857V786.972c0-15.314-5.257-28.114-16-38.857s-23.543-16-38.857-16H256V586.058h292.571v146.057h-54.857c-15.314 0-28.114 5.257-38.857 16s-16 23.543-16 38.857v182.629c0 15.314 5.257 28.114 16 38.857s23.543 16 38.857 16h182.629c15.314 0 28.114-5.257 38.857-16s16-23.543 16-38.857V786.972c0-15.314-5.257-28.114-16-38.857s-23.543-16-38.857-16h-54.857V586.058h292.343v146.057h-54.857c-15.314 0-28.114 5.257-38.857 16s-16 23.543-16 38.857v182.629c0 15.314 5.257 28.114 16 38.857s23.543 16 38.857 16h182.629c15.314 0 28.114-5.257 38.857-16s16-23.543 16-38.857V786.972c0-15.314-5.257-28.343-16-39.086z"
        }
      ></path>
    </svg>
  );
}

export default PfIconNetworksvgIcon;
/* prettier-ignore-end */
