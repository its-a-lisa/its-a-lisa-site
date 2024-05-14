// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconBuilderImagesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconBuilderImagesvgIcon(
  props: PfIconBuilderImagesvgIconProps
) {
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
          "M1009.829 264.914c-9.371-13.486-21.943-23.086-37.486-28.8L539.2 78.4c-8.686-3.2-17.371-4.8-26.057-4.8h-1.829c-8.686.229-17.371 1.829-26.057 4.8L52.343 235.886C36.8 241.6 24.229 251.2 14.857 264.686S.686 293.257.686 309.486v472.686c0 14.4 3.657 27.657 10.971 40s17.371 21.943 30.171 29.029l433.143 236.114c11.2 6.4 23.314 9.6 36.343 9.829h1.829c13.029-.229 25.143-3.429 36.343-9.829l433.371-236.343c12.8-6.857 22.857-16.686 30.171-29.029s10.971-25.6 10.971-40V309.714c0-16.457-4.8-31.314-14.171-44.8zM512 166.4l386.057 142.171L512 448.685 132.114 308.799 512 166.399zm-73.143 520.457c-53.486-21.257-235.657-93.486-318.171-126.4l219.2-75.429 98.971 35.657v166.171zm146.286-165.943l99.657-35.886L904 560.457c-82.971 32.914-266.286 105.829-318.857 126.629V520.915zM73.143 392l156.8 53.257-156.8 53.029V392zm0 256.457l120.686 49.829-120.686 40.457v-90.286zm218.971 93.715l146.743 65.6v153.6L130.514 794.515l161.6-52.343zM585.143 961.6V807.771l147.429-65.829 161.6 52.114-309.029 167.543zm366.171-224l-120.457-39.314 120.457-50.971v90.286zm0-240.457l-156.571-51.657 156.571-54.4v106.057z"
        }
      ></path>
    </svg>
  );
}

export default PfIconBuilderImagesvgIcon;
/* prettier-ignore-end */
