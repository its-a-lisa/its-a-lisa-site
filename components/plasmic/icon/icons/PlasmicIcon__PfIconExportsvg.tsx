// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconExportsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconExportsvgIcon(props: PfIconExportsvgIconProps) {
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
          "M980.293 745.246l-95.387 95.387-393.84-393.856c-5.285-5.262-11.353-7.909-18.203-7.911-6.862 0-12.935 2.649-18.222 7.911l-81.019 81.019c-5.262 5.285-7.909 11.353-7.909 18.219 0 6.85 2.649 12.914 7.909 18.203l393.856 393.84-95.381 95.381c-24.039 24.037-15.89 43.705 18.105 43.705h271.982c53.227 0 61.813-9.273 61.813-61.813V763.349c.005-33.998-19.662-42.151-43.703-18.105zM146.286 230.857c0-3.312 1.077-6.048 3.232-8.203 2.151-2.151 4.889-3.227 8.199-3.225h708.661c3.287 0 5.998 1.067 8.137 3.202 2.135 2.137 3.202 4.848 3.202 8.135v331.701c0 6.571 2.135 11.995 6.409 16.272 4.27 4.267 9.696 6.407 16.267 6.405h100.933c6.571.002 11.998-2.137 16.267-6.405 4.277-4.277 6.409-9.701 6.409-16.272V95.82c.002-6.571-2.137-11.998-6.405-16.267-4.277-4.274-9.701-6.409-16.272-6.409H22.676c-6.571-.002-11.998 2.137-16.267 6.405C2.135 83.826 0 89.25 0 95.821v978.647c0 6.571 2.135 11.995 6.409 16.272 4.27 4.267 9.696 6.407 16.267 6.405h466.647c6.571 0 11.995-2.135 16.272-6.411 4.267-4.267 6.407-9.696 6.405-16.265V973.536c.002-6.569-2.137-11.998-6.405-16.265-4.277-4.277-9.701-6.411-16.272-6.411H157.714c-3.312 0-6.048-1.077-8.203-3.232-2.151-2.149-3.227-4.889-3.225-8.197V230.86z"
        }
      ></path>
    </svg>
  );
}

export default PfIconExportsvgIcon;
/* prettier-ignore-end */
