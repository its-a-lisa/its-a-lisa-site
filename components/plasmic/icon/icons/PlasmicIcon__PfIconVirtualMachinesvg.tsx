// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconVirtualMachinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconVirtualMachinesvgIcon(
  props: PfIconVirtualMachinesvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1170 1024"}
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
          "M73.143 73.143H0v80.686h73.143V73.143zM0 222.4h73.143v137.143H0V222.4zm0 411.429v24.914h112.229V585.6H0v48.229zm0-205.715h73.143v137.143H0V428.114zM536.457 73.143H673.6v73.143H536.457V73.143zm-205.714 0h137.143v73.143H330.743V73.143zm411.428 0h137.143v73.143H742.171V73.143zm-617.142 0h137.143v73.143H125.029V73.143zM797.943 585.6h81.371v73.143h-81.371V585.6zm8.228-188.343h73.143V534.4h-73.143V397.257zM386.514 585.6h137.143v73.143H386.514V585.6zm205.715 0h137.143v73.143H592.229V585.6zm421.942-366.171H879.314v-27.886h-73.143v27.886H146.514v181.943h-.229v477.714h.229v72h438.857V1024H365.485v73.143h585.829v-72.914H731.428v-72.914l438.857-.229V219.429h-156.114zm10.058 584.685H293.258V658.743h24.686V585.6h-24.686V401.371h-.686v-35.2h731.657v437.943z"
        }
      ></path>
    </svg>
  );
}

export default PfIconVirtualMachinesvgIcon;
/* prettier-ignore-end */
