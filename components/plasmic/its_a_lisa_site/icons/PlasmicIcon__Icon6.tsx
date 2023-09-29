// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.584 6.58l-.837-.838a.53.53 0 00-.77 0L.176 13.543a.53.53 0 000 .77l7.801 7.802a.53.53 0 00.77 0l.837-.837a.53.53 0 000-.77l-6.579-6.58 6.58-6.579a.53.53 0 000-.77zm9.894 17.862L13.234 2.829a.544.544 0 00-.26-.326.467.467 0 00-.393-.042l-1.038.285a.545.545 0 00-.326.259.501.501 0 00-.042.41l6.244 21.613a.544.544 0 00.26.326c.128.073.26.087.393.042l1.038-.284a.544.544 0 00.327-.26.501.501 0 00.041-.41zm11-10.899l-7.802-7.8a.53.53 0 00-.77 0l-.837.836a.53.53 0 000 .77l6.58 6.58-6.58 6.579a.53.53 0 000 .77l.837.837a.53.53 0 00.77 0l7.801-7.801a.53.53 0 000-.77z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
