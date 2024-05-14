// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconResourcesFullsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconResourcesFullsvgIcon(
  props: PfIconResourcesFullsvgIconProps
) {
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
          "M512 914.286c-181.486 0-329.143-147.657-329.143-329.143S330.514 256 512 256c181.486 0 329.143 147.657 329.143 329.143S693.486 914.286 512 914.286zm442.743-584.457c45.714 78.4 68.571 164.114 68.571 256.914s-22.857 178.514-68.571 256.914c-45.714 78.4-107.886 140.571-186.286 186.286s-164.114 68.571-256.914 68.571c-92.8 0-178.514-22.857-256.914-68.571S114.058 922.057 68.343 843.657C22.857 765.257 0 679.543 0 586.743s22.857-178.514 68.571-256.914c45.714-78.4 107.886-140.343 186.286-186.057s164.114-68.571 256.914-68.571c92.8 0 178.514 22.857 256.914 68.571 78.171 45.714 140.343 107.657 186.057 186.057zM677.257 194.286c-52.571-22.629-107.886-34.057-165.486-34.057-57.829 0-112.914 11.429-165.486 34.057s-97.829 53.029-136 90.971c-37.943 37.943-68.343 83.2-90.971 136-22.629 52.571-34.057 107.886-34.057 165.486 0 57.829 11.429 112.914 34.057 165.486s53.029 97.829 90.971 136c37.943 37.943 83.2 68.343 136 90.971 52.571 22.629 107.886 34.057 165.486 34.057 57.829 0 112.914-11.429 165.486-34.057s97.829-53.029 136-90.971c37.943-37.943 68.343-83.2 90.971-136 22.629-52.571 34.057-107.886 34.057-165.486 0-57.829-11.429-112.914-34.057-165.486s-53.029-97.829-90.971-136c-37.943-37.943-83.429-68.343-136-90.971z"
        }
      ></path>
    </svg>
  );
}

export default PfIconResourcesFullsvgIcon;
/* prettier-ignore-end */
