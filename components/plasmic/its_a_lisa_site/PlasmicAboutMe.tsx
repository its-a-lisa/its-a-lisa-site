// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: YZ0omOIxTFEt

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: HBjN2PI6FOY_/component
import Footer from "../../Footer"; // plasmic-import: Z-CrKblPINiy/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_its_a_lisa_site.module.css"; // plasmic-import: tt6TsnGtggzVZCRW2FQ8Vk/projectcss
import sty from "./PlasmicAboutMe.module.css"; // plasmic-import: YZ0omOIxTFEt/css

createPlasmicElementProxy;

export type PlasmicAboutMe__VariantMembers = {};
export type PlasmicAboutMe__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutMe__VariantsArgs;
export const PlasmicAboutMe__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutMe__ArgsType = {};
type ArgPropType = keyof PlasmicAboutMe__ArgsType;
export const PlasmicAboutMe__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutMe__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAboutMeProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAboutMe__RenderFunc(props: {
  variants: PlasmicAboutMe__VariantsArgs;
  args: PlasmicAboutMe__ArgsType;
  overrides: PlasmicAboutMe__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gsFlQ)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gk2Vt)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bkrnx
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ textDecoration: "underline" }}
                  >
                    {"about me"}
                  </span>
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ntm0
                )}
              >
                {"Under Construction"}
              </div>
            </p.Stack>
          </p.Stack>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "footer"],
  header: ["header"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutMe__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutMe__VariantsArgs;
    args?: PlasmicAboutMe__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutMe__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAboutMe__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAboutMe__ArgProps,
          internalVariantPropNames: PlasmicAboutMe__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutMe__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutMe";
  } else {
    func.displayName = `PlasmicAboutMe.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutMe = Object.assign(
  // Top-level PlasmicAboutMe renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAboutMe
    internalVariantProps: PlasmicAboutMe__VariantProps,
    internalArgProps: PlasmicAboutMe__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutMe;
/* prettier-ignore-end */
