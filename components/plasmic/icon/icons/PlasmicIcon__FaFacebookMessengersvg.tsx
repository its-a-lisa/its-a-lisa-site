// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaFacebookMessengersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaFacebookMessengersvgIcon(
  props: FaFacebookMessengersvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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
          "M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2a19.9 19.9 0 0027.8 17.6c52.9-23.3 53.6-25.1 62.6-22.7 153.3 42.2 319.4-55.9 319.4-231C504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 01-53.9 9.9l-58.1-43.5a15 15 0 00-18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0153.9-9.9l58.1 43.5a15 15 0 0018 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
        }
      ></path>
    </svg>
  );
}

export default FaFacebookMessengersvgIcon;
/* prettier-ignore-end */
