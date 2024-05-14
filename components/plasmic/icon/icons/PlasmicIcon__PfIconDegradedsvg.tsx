// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconDegradedsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconDegradedsvgIcon(props: PfIconDegradedsvgIconProps) {
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
          "M957.257 455.543c-25.6 10.057-54.857 18.514-87.543 25.143-21.714 4.8-43.886 8.686-66.514 11.886l.457 302.857c13.029-1.829 26.057-4.114 38.629-6.4 27.657-5.714 52.8-12.343 74.971-19.657s42.057-15.771 58.514-24.457c16-9.371 28.343-19.429 36.343-29.714 8-10.514 11.886-21.029 11.886-32.229v-262.4c-18.743 13.257-41.143 24.914-66.743 34.971zM364.343 294.172h.686c35.429 0 69.943 1.6 102.629 4.571 34.971 3.2 66.286 7.771 95.314 13.714 31.543 6.629 58.514 13.486 82.514 21.029l.914.457c27.429 9.143 50.743 19.2 71.314 30.857l.914.457c24 14.171 43.2 30.171 56.914 47.771 5.029 6.4 9.371 13.029 13.029 19.886 18.286-2.286 35.886-5.257 53.029-8.686 27.657-5.029 52.8-11.429 74.971-18.743s42.057-16 58.514-25.371c16-9.371 28.343-19.2 36.343-29.029s11.886-20.571 11.886-31.543V195.199c0-10.514-3.886-21.029-11.886-31.314s-20.343-20.343-36.343-29.714c-16.457-9.371-35.886-17.6-58.286-25.143-22.171-7.086-47.314-13.486-74.971-19.2-27.886-5.714-57.143-9.6-87.543-12.571s-62.629-4.114-96-4.114c-32.914 0-64.457 1.371-95.086 4.343s-60.114 7.086-88.457 12.571c-27.657 5.486-52.8 11.886-74.971 19.2s-41.6 15.771-57.6 25.143c-16.229 9.371-28.571 19.429-36.8 29.714s-12.571 20.8-12.571 31.314v101.257c23.086-1.829 47.314-2.514 71.543-2.514zm300.343 463.085c-23.543 9.143-50.057 17.143-79.543 23.314v-62.4c13.943-3.429 26.971-7.086 39.086-11.2 22.171-7.314 42.057-16 58.514-25.371 16-9.371 28.343-19.2 36.343-29.029s11.886-20.571 11.886-31.543V487.771c0-10.514-3.886-21.029-11.886-31.314s-20.343-20.343-36.343-29.714c-16.457-9.371-35.886-17.6-58.286-25.143-22.171-7.086-47.314-13.486-74.971-19.2-27.886-5.714-57.143-9.6-87.543-12.571s-62.629-4.343-96-4.343c-32.914 0-64.457 1.371-95.086 4.343s-60.343 7.086-88.457 12.571c-27.657 5.486-52.8 11.886-74.971 19.2s-41.6 15.771-57.6 25.143c-16.229 9.371-28.571 19.429-36.8 29.714S.458 477.257.458 487.771v133.257c0 11.2 4.343 21.714 12.571 31.543 8.457 10.057 20.571 19.657 36.8 29.029s35.429 18.057 57.6 25.371c11.886 4.114 24.914 7.771 38.857 11.2v62.4c-29.486-6.4-55.771-14.171-79.086-23.314-25.6-10.057-48-21.714-66.743-34.971v253.257c0 11.2 4.343 21.943 12.571 32.229 8.457 10.286 20.571 20.343 36.8 29.714 16.229 8.914 35.429 17.143 57.6 24.457 22.171 7.771 47.771 14.171 75.886 19.657 27.657 5.486 57.143 9.6 88 11.657 30.629 2.514 62.171 3.657 95.086 3.657 33.371 0 65.371-1.143 95.543-3.657 30.171-2.286 59.657-6.629 88-11.886 27.657-5.714 52.8-12.343 74.971-19.657s42.057-15.771 58.514-24.457c16-9.371 28.343-19.429 36.343-29.714 8-10.514 11.886-21.029 11.886-32.229V722.285c-18.971 13.257-41.371 24.914-66.971 34.971zM558.857 897.6c-.686 1.6-1.829 3.2-3.2 4.571l-53.943 53.714c-1.6 1.6-2.971 2.514-4.571 3.2s-3.429.914-5.257.914c-1.6 0-2.971-.229-4.571-.914s-2.971-1.829-3.886-3.2L365.715 839.314 248.229 956.343c-.914 1.6-2.286 2.514-3.886 3.2s-3.2.914-4.571.914c-1.829 0-3.657-.229-5.257-.914s-3.2-1.829-4.571-3.2l-53.943-54.171c-1.6-1.6-2.514-2.971-3.2-4.571s-.914-3.2-.914-4.571c0-1.829.229-3.657.914-5.257s1.829-2.971 3.2-3.886l117.486-117.486-115.2-114.743c-1.6-1.6-2.514-2.971-3.2-4.571s-.914-3.2-.914-4.571c0-1.829.229-3.657.914-5.257s1.829-2.971 3.2-3.886l53.943-54.4c1.6-.914 2.971-1.829 4.571-2.514s3.2-.914 4.571-.914c1.829 0 3.657.229 5.257.686s2.971 1.6 3.886 2.743l115.657 115.657 115.2-115.2c.914-1.6 2.286-2.286 3.886-2.743s3.2-.686 4.571-.686c1.829 0 3.657.229 5.257.914s3.2 1.6 4.571 2.514l53.257 54.629c1.6.914 2.514 2.286 3.2 3.886s.914 3.429.914 5.257c0 1.6-.229 2.971-.914 4.571s-1.829 3.2-3.2 4.571L438.171 766.63l117.486 117.486c1.6.914 2.514 2.286 3.2 3.886s.914 3.429.914 5.257c0 1.371-.229 2.743-.914 4.343z"
        }
      ></path>
    </svg>
  );
}

export default PfIconDegradedsvgIcon;
/* prettier-ignore-end */
