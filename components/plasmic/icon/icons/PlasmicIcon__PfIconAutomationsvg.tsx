// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconAutomationsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconAutomationsvgIcon(props: PfIconAutomationsvgIconProps) {
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
          "M257.102 433.246zm490.959 90.978c-15.23-6.212-28.255-3.607-38.876 7.815l-72.742 72.141-16.031 16.031L368.32 364.712c-38.676-32.063-63.123-36.07-111.818-36.07C114.825 328.642.001 443.466.001 585.143s114.824 256.501 256.501 256.501c48.094 0 88.373-17.835 124.243-45.89l-.601-.401 5.411-3.607c23.446-16.632 28.856-49.296 12.224-72.742s-49.296-28.856-72.742-12.224c-23.245 16.632-50.298 26.251-78.754 28.456-82.762-1.002-142.077-66.73-142.077-150.093 0-82.561 61.921-149.893 143.881-152.297h4.609c.802.2 1.603 0 2.204.2h.401c14.629-.2 37.874 5.21 57.913 21.241l234.458 238.867-87.972 87.972c-11.422 11.222-14.027 23.847-7.815 38.475 6.212 14.829 17.234 22.243 32.864 22.243h249.287c9.619 0 18.035-3.607 25.049-10.621s10.621-15.43 10.621-25.049V557.088c0-15.631-7.214-26.652-21.642-32.864zm21.442-195.582v1.403c-2.805-.601-5.811-.802-8.817-.802-54.506-.802-106.809 15.029-151.696 45.89-23.646 16.432-29.658 48.695-13.226 72.542 10.02 14.629 26.452 22.444 42.884 22.444 10.22 0 20.44-3.006 29.458-9.218 26.852-18.436 58.314-28.055 90.978-27.454 3.607 0 7.014-.2 10.42-.802v.401c83.964 0 152.297 68.333 152.297 152.297 0 61.119-36.271 114.023-88.172 138.27v110.416c110.616-28.456 192.376-128.852 192.376-248.485 0-142.077-114.824-256.902-256.501-256.902z"
        }
      ></path>
    </svg>
  );
}

export default PfIconAutomationsvgIcon;
/* prettier-ignore-end */
