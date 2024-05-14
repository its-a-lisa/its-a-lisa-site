// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconRepositorysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconRepositorysvgIcon(props: PfIconRepositorysvgIconProps) {
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
          "M758.857 585.143c25.143 0 45.714 38.629 45.714 38.629l22.857 34.514h50.286V475.429s-.229-36.571-36.8-36.571H548.343l-25.829-40.686s-15.086-32.457-47.086-32.457H329.142c-36.571 0-36.571 36.571-36.571 36.571v402.286h146.286V658.286c0-57.143 16-73.143 75.429-73.143h244.571zM539.2 292.572c25.143 0 45.714 38.629 45.714 38.629l22.857 34.514h50.286V182.858s-.229-36.571-36.8-36.571H328.686l-25.829-40.686s-15.086-32.457-47.086-32.457H109.714c-36.571 0-36.571 36.571-36.571 36.571v402.286H219.2V365.715c0-57.143 16-73.143 75.429-73.143H539.2zm521.143 438.857H767.772l-25.829-40.686s-15.086-32.457-47.086-32.457H548.571C512 658.286 512 694.857 512 694.857v402.286h585.143V768s-.229-36.571-36.8-36.571z"
        }
      ></path>
    </svg>
  );
}

export default PfIconRepositorysvgIcon;
/* prettier-ignore-end */
