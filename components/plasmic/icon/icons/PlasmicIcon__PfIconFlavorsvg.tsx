// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconFlavorsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconFlavorsvgIcon(props: PfIconFlavorsvgIconProps) {
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
          "M56.229 219.2H20.115c-10.057 0-19.2 9.6-19.2 19.886v110.629L.686 933.944c0 10.057 9.371 16.914 19.2 16.914H56c10.057 0 17.143-6.857 17.143-16.914V239.087c0-10.057-7.086-19.886-16.914-19.886zm950.628 0h-36.114c-10.057 0-19.2 9.6-19.2 19.886v110.629l-.229 584.229c0 10.057 9.371 16.914 19.2 16.914h36.114c10.057 0 17.143-6.857 17.143-16.914V239.087c0-10.057-7.086-19.886-16.914-19.886zM389.029 438.857h48.914v74.057h-48.914v-74.057zM841.6 146.743H182.4c-20.571 0-35.886 17.829-35.886 38.4v802.514c0 20.571 15.314 36.114 35.886 36.114h659.429c20.571 0 35.886-17.829 35.886-38.4V182.857c-.229-20.571-15.543-36.114-36.114-36.114zM659.2 774.629h-58.743v58.743H659.2v58.971h-58.743v58.743h-58.971v-58.743h-58.743v58.743H424v-58.743h-58.743v-58.971H424v-58.743h-58.743v-58.743H424v-58.743h58.743v58.743h58.743v-58.743h58.971v58.743H659.2v58.743zm72.686-336h-54.4v146.514H345.372V438.629h-54.629V218.286h441.143v220.343zm-245.029.228h48.914v74.057h-48.914v-74.057zm98.057 0h48.914v74.057h-48.914v-74.057z"
        }
      ></path>
    </svg>
  );
}

export default PfIconFlavorsvgIcon;
/* prettier-ignore-end */
