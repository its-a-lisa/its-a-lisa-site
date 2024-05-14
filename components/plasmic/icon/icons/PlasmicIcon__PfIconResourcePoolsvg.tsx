// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconResourcePoolsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconResourcePoolsvgIcon(
  props: PfIconResourcePoolsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1096 1024"}
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
          "M1020.571 219.429V128c0-30.171-24.686-54.857-54.629-54.857H127.771c-29.943 0-54.629 24.686-54.629 54.857v693.486c0 30.171 24.686 54.857 54.629 54.857h18.514l.914 1.143v219.429h803.886V877.486l.686-1.143h14.171c30.171 0 54.629-24.686 54.629-54.857v-64.229l1.143-2.057V219.429h-1.143zM293.029 1024h-72.914V877.714h72.914V1024zm145.6 0h-72.914V877.714h72.914V1024zm145.828 0h-72.914V877.714h72.914V1024zm145.829 0h-72.914V877.714h72.914V1024zm70.628-660.571h-73.143v73.143h72.914v73.143h-72.914v73.143h72.914v73.143h-72.914v73.143h-72.914v-73.143h-72.914v73.143h-72.914v-73.143h-72.914v73.143h-72.686v-73.143h-72.914v-73.143h72.914v-73.143h-72.914v-73.143h72.914v-73.143h-72.914v-73.143h72.914v-73.143h72.914v73.143h72.914v-73.143h72.914v73.143h72.914v-73.143h72.914v73.143h72.914v73.143zM875.886 1024h-72.914V877.714h72.914V1024z"
        }
      ></path>
    </svg>
  );
}

export default PfIconResourcePoolsvgIcon;
/* prettier-ignore-end */
