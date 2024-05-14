// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconDataSinksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconDataSinksvgIcon(props: PfIconDataSinksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 896 1024"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <clipPath id={"aEU7fXj_SNcka"}>
          <path d={"M896 0v1024H0V0h896z"}></path>
        </clipPath>

        <clipPath id={"aEU7fXj_SNckb"}>
          <path
            d={
              "M430.605 0L576 160 430.605 320 384 276.574 460.854 192H179.538c-32.123.821-62.193 14.54-84.698 38.692-22.543 24.192-34.958 56.224-34.958 90.196v.66c0 33.933 12.363 65.732 34.813 89.54C117.168 434.922 147.148 448 179.11 448h537.95c98.287 0 178.559 86.063 178.94 191.789.182 51.245-18.32 99.472-52.1 135.797C810.069 811.964 765.02 832 717.061 832H0v-64h717.024c.009 0 .019.023.029.023 31.98 0 62.003-13.351 84.549-37.595 22.49-24.184 34.808-56.286 34.686-90.393C836.035 569.45 782.549 512 717.06 512H179.11c-47.796 0-92.693-19.673-126.42-55.441C18.822 420.642.171 372.694.171 321.548v-.66c0-51.041 18.614-99.127 52.413-135.399 33.518-35.971 78.257-56.384 125.978-57.489h282.292L384 43.426 430.605 0zM756 16c77.196 0 140 62.804 140 140s-62.804 140-140 140-140-62.804-140-140S678.804 16 756 16zm0 64.013c-41.914 0-76.013 34.088-76.013 75.987 0 41.9 34.099 75.987 76.013 75.987 41.914 0 76.013-34.087 76.013-75.987 0-41.899-34.099-75.987-76.013-75.987z"
            }
          ></path>
        </clipPath>
      </defs>

      <g clipPath={"url(#aEU7fXj_SNcka)"}>
        <g clipPath={"url(#aEU7fXj_SNckb)"} transform={"translate(0 63)"}>
          <path fill={"currentColor"} d={"M0 0h896v832H0V0z"}></path>
        </g>
      </g>
    </svg>
  );
}

export default PfIconDataSinksvgIcon;
/* prettier-ignore-end */
