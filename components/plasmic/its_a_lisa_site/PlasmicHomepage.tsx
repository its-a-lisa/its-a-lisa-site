// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: qAL5iQ50tsT6

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
import ContactButton from "../../ContactButton"; // plasmic-import: cAOyLxN62SOb/component
import Footer from "../../Footer"; // plasmic-import: Z-CrKblPINiy/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 0mo4e2K7LvGd/globalVariant
import { useScreenVariants as useScreenVariantsniKtHGeB1Opg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NIKtHGeB1opg/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_its_a_lisa_site.module.css"; // plasmic-import: tt6TsnGtggzVZCRW2FQ8Vk/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: qAL5iQ50tsT6/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: huLMvL5wIXy1/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: FYLMO-tZsz_5/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h1?: p.Flex<"h1">;
  h3?: p.Flex<"h3">;
  ul?: p.Flex<"ul">;
  li?: p.Flex<"li">;
  contactButton?: p.Flex<typeof ContactButton>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantsniKtHGeB1Opg()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
      </Head>

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
            sty.root,
            {
              [projectcss.global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
              [sty.rootglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            }
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__nmlBj)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__yZa0B, {
                [sty.freeBoxglobal_theme_dark__yZa0B6Jr2E]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header, {
                  [sty.headerglobal_theme_dark]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                })}
              />
            </p.Stack>
            <div className={classNames(projectcss.all, sty.freeBox__qT13E)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__en1Ah)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qaSdC)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jJktB)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Its A-Lisa"}
                    </h1>
                    <h3
                      data-plasmic-name={"h3"}
                      data-plasmic-override={overrides.h3}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3
                      )}
                    >
                      {'"Vivid Facade\nDiverse Layers\nSparkling Aura"'}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__i86Tk
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        {
                          <ul
                            data-plasmic-name={"ul"}
                            data-plasmic-override={overrides.ul}
                            className={classNames(
                              projectcss.all,
                              projectcss.ul,
                              sty.ul
                            )}
                          >
                            <li
                              data-plasmic-name={"li"}
                              data-plasmic-override={overrides.li}
                              className={classNames(
                                projectcss.all,
                                projectcss.li,
                                projectcss.__wab_text,
                                sty.li
                              )}
                            >
                              {"expert testimonial from an AI Chatbot"}
                            </li>
                          </ul>
                        }
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>
                  </p.Stack>
                </p.Stack>
                <div className={classNames(projectcss.all, sty.freeBox__u9Od3)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__oaV9N)}
                  />
                </div>
              </p.Stack>
            </div>
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___92BGj, {
              [sty.freeBoxglobal_theme_dark___92BGj6Jr2E]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vfam0)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ya4T2,
                  {
                    [sty.textglobal_theme_dark__ya4T26Jr2E]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
                )}
              >
                {"Sassy, classy, and a tad bad-assy"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9G6Ev,
                  {
                    [sty.textglobal_theme_dark___9G6Ev6Jr2E]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
                )}
              >
                {"Living my life the best I can"}
              </div>
              <ContactButton
                data-plasmic-name={"contactButton"}
                data-plasmic-override={overrides.contactButton}
                className={classNames("__wab_instance", sty.contactButton)}
                endIcon={
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__uXnbu)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__kKb21)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xjUoR
                  )}
                >
                  {"Get to know me"}
                </div>
              </ContactButton>
            </p.Stack>
            <div
              className={classNames(projectcss.all, sty.freeBox__uCaoi, {
                [sty.freeBoxglobal_theme_dark__uCaoi6Jr2E]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            >
              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "h1", "h3", "ul", "li", "contactButton", "footer"],
  header: ["header"],
  h1: ["h1"],
  h3: ["h3"],
  ul: ["ul", "li"],
  li: ["li"],
  contactButton: ["contactButton"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h1: "h1";
  h3: "h3";
  ul: "ul";
  li: "li";
  contactButton: typeof ContactButton;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    h3: makeNodeComponent("h3"),
    ul: makeNodeComponent("ul"),
    li: makeNodeComponent("li"),
    contactButton: makeNodeComponent("contactButton"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Its A-Lisa's Personal website",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/6515f78d4732c777232fbb0190c87f9f.svg",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
