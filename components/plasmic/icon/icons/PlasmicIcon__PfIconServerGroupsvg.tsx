// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconServerGroupsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconServerGroupsvgIcon(props: PfIconServerGroupsvgIconProps) {
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
          "M841.143 292.572H1024v731.429H841.143V292.572zm-146.057 0H36.572c-9.829 0-18.514 3.657-25.6 10.743-7.314 7.543-10.971 16-10.971 25.829v731.657c0 9.829 3.657 18.514 10.743 25.6 7.314 7.314 15.771 10.743 25.6 10.743h658.743c9.829 0 18.514-3.657 25.6-10.743 7.314-7.314 10.743-15.771 10.743-25.6V329.144c0-9.829-3.657-18.514-10.743-25.6-7.314-7.314-15.771-10.971-25.6-10.971zm-36.8 658.285H219.429V841.143h438.857v109.714zm0-219.428H73.143V621.715h585.143v109.714zm0-219.429H438.857V402.286h219.429V512zM22.4 256h686.629c11.429 0 18.743-2.971 21.257-8.686 2.743-5.714-.229-12.8-8.686-21.257 0 0-142.4-130.514-152.914-142.857s-24-9.829-24-9.829H183.543S171.657 72 160.914 83.657C150.4 95.543 9.6 226.057 9.6 226.057c-8.457 8.457-11.429 15.314-8.686 21.257S10.743 256 22.4 256zM767.314 72.686H646.171l194.743 182.171 183.086 1.6z"
        }
      ></path>
    </svg>
  );
}

export default PfIconServerGroupsvgIcon;
/* prettier-ignore-end */
