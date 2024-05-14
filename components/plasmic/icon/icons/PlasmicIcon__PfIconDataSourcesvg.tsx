// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconDataSourcesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconDataSourcesvgIcon(props: PfIconDataSourcesvgIconProps) {
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
        <clipPath id={"WL7QAUic07gwa"}>
          <path d={"M896 0v1024H0V0h896z"}></path>
        </clipPath>

        <clipPath id={"WL7QAUic07gwb"}>
          <path
            d={
              "M750.625 0L896 160 750.625 320 704 276.594l76.807-84.534-601.8-.151h-.03c-31.96 0-61.977 13.33-84.522 37.537-22.51 24.169-34.84 56.258-34.718 90.356C59.991 390.334 113.482 448 178.978 448H717.02c47.811 0 92.72 19.399 126.455 55.14C877.346 539.026 896 586.93 896 638.029v.66c0 50.999-18.616 99.129-52.417 135.522-33.588 36.164-78.37 56.684-126.097 57.781l-.35.008-440.826.001C261.798 893.828 206.19 940 140 940 62.804 940 0 877.196 0 800s62.804-140 140-140c66.19 0 121.799 46.172 136.31 108h440.23c32.058-.827 62.116-14.552 84.667-38.834 22.606-24.34 35.055-56.472 35.055-90.477v-.66c0-33.91-12.366-65.688-34.822-89.479-22.475-23.811-52.456-36.55-84.42-36.55H178.978C80.67 512 .001 426 .001 320.047c0-51.047 18.332-99.413 52.138-135.71C85.974 148.008 131.022 128 178.977 128h.045l601.987.162L704 43.406 750.625 0zM140 724c-41.907 0-76 34.094-76 76s34.093 76 76 76 76-34.094 76-76-34.093-76-76-76z"
            }
          ></path>
        </clipPath>
      </defs>

      <g clipPath={"url(#WL7QAUic07gwa)"}>
        <g clipPath={"url(#WL7QAUic07gwb)"} transform={"translate(0 63)"}>
          <path fill={"currentColor"} d={"M0 0h896v940H0V0z"}></path>
        </g>
      </g>
    </svg>
  );
}

export default PfIconDataSourcesvgIcon;
/* prettier-ignore-end */
