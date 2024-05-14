// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconMiddlewaresvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconMiddlewaresvgIcon(props: PfIconMiddlewaresvgIconProps) {
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
          "M512 292.572c-161.371 0-292.571 131.2-292.571 292.571S350.629 877.714 512 877.714s292.571-131.2 292.571-292.571S673.371 292.572 512 292.572zm404.571 605.942c49.371-63.543 84.114-138.971 98.971-221.257 1.829-9.829-5.714-18.971-15.771-18.971h-79.314c-7.543 0-13.943 5.257-15.543 12.571C871.543 824.228 750.171 945.143 596.8 978.286c-7.314 1.6-12.8 8-12.8 15.543v79.543c0 10.057 9.143 17.6 18.971 15.771 82.286-14.629 157.714-49.371 221.257-98.286 6.4-5.029 15.314-4.343 21.029 1.371L945.6 1092.571c2.971 2.971 7.086 4.8 11.2 4.8h51.2c8.914 0 16-7.086 16-16v-48.914c0-4.343-1.6-8.229-4.8-11.2L917.943 920c-5.714-6.171-6.171-15.086-1.371-21.486zM418.743 81.829c-81.6 15.086-156.8 49.6-219.886 98.971-6.4 5.029-15.543 4.343-21.257-1.371L76.343 77.943c-3.2-3.2-7.086-4.8-11.429-4.8H16c-8.914 0-16 7.086-16 16v48.914c0 4.343 1.6 8.229 4.8 11.2l101.257 101.257c5.714 5.714 6.171 14.857 1.371 21.257-49.371 63.543-84.114 138.971-98.971 221.257-1.829 9.829 5.714 18.971 15.771 18.971h79.314c7.543 0 13.943-5.257 15.543-12.571 33.143-152.686 153.371-273.143 306.057-306.971 7.314-1.6 12.571-8 12.571-15.543V97.6c0-10.057-9.143-17.6-18.971-15.771zM920.457 512h79.314c10.057 0 17.6-9.143 15.771-18.971-14.857-81.6-49.371-156.571-98.057-220.114-5.029-6.4-4.343-15.314 1.371-21.029l100.343-100.114c2.971-2.971 4.8-7.086 4.8-11.429v-51.2c0-8.914-7.086-16-16-16h-48.914c-4.343 0-8.229 1.6-11.2 4.8L846.628 179.2c-5.714 5.714-14.857 6.171-21.257 1.371C761.828 131.2 686.4 96.457 604.114 81.6c-9.829-1.829-18.971 5.714-18.971 15.771v79.314c0 7.543 5.257 13.943 12.571 15.543 152.914 33.371 273.6 154.057 307.2 307.2 1.6 7.314 8 12.571 15.543 12.571zM103.543 658.286H24c-10.057 0-17.6 9.143-15.771 18.971 14.857 82.286 49.6 157.714 98.971 221.257 5.029 6.4 4.343 15.543-1.371 21.257L4.8 1020.8c-3.2 3.2-4.8 7.086-4.8 11.429v48.914c0 8.914 7.086 16 16 16h48.914c4.343 0 8.229-1.6 11.2-4.8l101.257-101.257c5.714-5.714 14.857-6.171 21.029-1.371 63.543 49.371 138.971 84.114 221.257 98.971 9.829 1.829 18.971-5.714 18.971-15.771v-79.314c0-7.543-5.257-13.943-12.571-15.543-152.914-33.371-273.6-154.057-307.2-307.2-1.371-7.314-7.771-12.571-15.314-12.571z"
        }
      ></path>
    </svg>
  );
}

export default PfIconMiddlewaresvgIcon;
/* prettier-ignore-end */
