// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconDataProcessorsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconDataProcessorsvgIcon(
  props: PfIconDataProcessorsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 1024 1024"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M879.047 64.5l145.344 160-145.344 160-46.615-43.406 76.844-84.594H180.134c-32.053.827-62.104 14.552-84.65 38.834-22.602 24.34-35.048 56.472-35.048 90.477v.66c0 33.91 12.363 65.688 34.814 89.479 22.471 23.811 52.446 36.55 84.403 36.55h143.72L512.5 367.323 701.624 512.5H845.56c47.322 0 91.801 19.013 125.412 54.073l1.016 1.067c33.864 35.886 52.513 83.79 52.513 134.889v.66c0 50.999-18.611 99.129-52.405 135.522-33.581 36.164-78.354 56.684-126.071 57.781l-.35.008H31.249C14.756 896.466.468 881.3.5 863.652.532 846.026 14.784 832.5 31.248 832.5h813.83c32.052-.827 62.104-14.552 84.65-38.834 22.6-24.34 35.048-56.472 35.048-90.477v-.66c0-33.91-12.364-65.688-34.815-89.479-22.471-23.811-52.445-36.55-84.402-36.55H703.333L512.5 720.965 321.665 576.5H179.653c-47.323 0-91.802-19.013-125.413-54.073l-1.015-1.067C19.361 485.474.711 437.57.711 386.471v-.66c0-50.999 18.611-99.129 52.405-135.522 33.581-36.164 78.354-56.684 126.071-57.781l.35-.008h729.74l-76.845-84.594L879.047 64.5zM512.5 450.327l-123.066 94.47L512.5 637.96l123.067-93.164-123.067-94.47z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PfIconDataProcessorsvgIcon;
/* prettier-ignore-end */
