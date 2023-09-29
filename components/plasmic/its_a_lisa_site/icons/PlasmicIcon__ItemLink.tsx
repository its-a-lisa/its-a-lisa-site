// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ItemLinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ItemLinkIcon(props: ItemLinkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.686 17.88v-2.652H7.109c-.576 0-.965-.12-1.165-.362-.201-.241-.302-.603-.302-1.085v-1.898h2.943L8.194 8.91H5.642V1.286H2.57V8.91H.007v2.973H2.57v2.19c0 1.245.348 2.211 1.044 2.897.697.687 1.624 1.03 2.783 1.03.984 0 1.747-.04 2.29-.12z"
        }
        fill={"currentColor"}
        opacity={".9"}
      ></path>
    </svg>
  );
}

export default ItemLinkIcon;
/* prettier-ignore-end */
