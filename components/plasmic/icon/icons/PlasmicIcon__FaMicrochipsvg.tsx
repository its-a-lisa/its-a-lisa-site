// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaMicrochipsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaMicrochipsvgIcon(props: FaMicrochipsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 512 512"}
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
          "M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42V88h42a6 6 0 016 6v6h18a6 6 0 016 6zm0 96v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42v-48h42a6 6 0 016 6v6h18a6 6 0 016 6zm0 96v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42v-48h42a6 6 0 016 6v6h18a6 6 0 016 6zm0 96v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42v-48h42a6 6 0 016 6v6h18a6 6 0 016 6zM30 376h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6zm0-96h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6zm0-96h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6zm0-96h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6z"
        }
      ></path>
    </svg>
  );
}

export default FaMicrochipsvgIcon;
/* prettier-ignore-end */
