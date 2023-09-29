// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#idtTYgCNoDQCa)"}>
        <path
          d={
            "M11.26 3.598l.085.085c.057.057.085.162.085.317a.55.55 0 01-.17.402.55.55 0 01-.401.17.55.55 0 01-.402-.17.55.55 0 01-.17-.402.55.55 0 01.17-.402.55.55 0 01.402-.17.55.55 0 01.401.17zm2.286 0l.085.085c.056.057.085.162.085.317a.55.55 0 01-.17.402.55.55 0 01-.402.17.55.55 0 01-.402-.17.55.55 0 01-.17-.402.55.55 0 01.17-.402.55.55 0 01.402-.17.55.55 0 01.402.17zM14.86 6V3.143a.827.827 0 00-.25-.607.827.827 0 00-.608-.25H.86a.827.827 0 00-.608.25.827.827 0 00-.25.607V6c0 .238.084.44.25.607.167.167.37.25.608.25h4.15l1.206-1.214c.345-.333.75-.5 1.214-.5.464 0 .869.167 1.214.5L9.86 6.857H14c.239 0 .44-.083.608-.25a.827.827 0 00.25-.607zm-2.902 5.08c.101-.244.06-.452-.125-.625l-4-4a.53.53 0 00-.402-.17.53.53 0 00-.402.17l-4 4c-.184.173-.226.381-.125.625a.534.534 0 00.527.349h2.286v4a.55.55 0 00.17.401.55.55 0 00.401.17h2.286a.55.55 0 00.402-.17.55.55 0 00.17-.401v-4h2.285c.25 0 .426-.117.527-.349z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"idtTYgCNoDQCa"}>
          <path fill={"currentColor"} d={"M0 0h14.86v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
