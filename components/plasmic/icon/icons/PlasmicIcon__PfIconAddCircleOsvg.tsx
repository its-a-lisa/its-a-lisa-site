// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconAddCircleOsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconAddCircleOsvgIcon(props: PfIconAddCircleOsvgIconProps) {
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
          "M512.059 1097.143C229.721 1097.143 0 867.47 0 585.118 0 302.88 229.721 73.143 512.059 73.143 794.342 73.143 1024 302.878 1024 585.118c.005 282.352-229.659 512.025-511.941 512.025zm0-899.666c-213.826 0-387.728 173.856-387.728 387.643 0 213.888 173.904 387.691 387.728 387.691 213.717 0 387.671-173.803 387.671-387.691.005-213.785-173.957-387.643-387.671-387.643zm214.224 319.746c-3.429-3.477-7.803-5.223-13.138-5.223H585.14V383.993c0-5.333-1.739-9.71-5.218-13.138s-7.936-5.141-13.351-5.141H457.428c-5.417 0-9.863 1.714-13.351 5.141-3.481 3.429-5.221 7.808-5.221 13.141v128.005l-128.007.002c-5.333 0-9.71 1.737-13.138 5.218-3.426 3.477-5.141 7.934-5.141 13.351v109.143c0 5.417 1.714 9.856 5.141 13.351 3.429 3.481 7.808 5.221 13.141 5.221l128.005-.002v128.009c0 5.335 1.744 9.707 5.225 13.134 3.477 3.429 7.927 5.145 13.344 5.145h109.143c5.417 0 9.858-1.717 13.351-5.145 3.477-3.429 5.223-7.803 5.223-13.138V658.288H713.15c5.335 0 9.707-1.742 13.134-5.225 3.429-3.477 5.145-7.927 5.145-13.344V530.576c0-5.417-1.717-9.863-5.145-13.351z"
        }
      ></path>
    </svg>
  );
}

export default PfIconAddCircleOsvgIcon;
/* prettier-ignore-end */
