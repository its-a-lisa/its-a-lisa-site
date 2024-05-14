// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: HBjN2PI6FOY_

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import CompButton from "../../CompButton"; // plasmic-import: hOjYiBDjTmoS/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 0mo4e2K7LvGd/globalVariant
import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsniKtHGeB1Opg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NIKtHGeB1opg/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
import plasmic_theme_css from "../theme/plasmic.module.css"; // plasmic-import: 6eqm1KNiFrAWEs21Xh4t1D/projectcss
import plasmic_button_css from "../button/plasmic.module.css"; // plasmic-import: 4JFyEcvXaxQ6TZ3SJQYzp6/projectcss
import plasmic_switch_css from "../switch/plasmic.module.css"; // plasmic-import: i4n9AbVD4xq7VvHzvrVDh9/projectcss
import plasmic_badge_css from "../badge/plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
import plasmic_avatar_css from "../avatar/plasmic.module.css"; // plasmic-import: wjwfXMtbnYisAPU4bK5cC5/projectcss
import plasmic_input_css from "../input/plasmic.module.css"; // plasmic-import: teUZ7d8BEHskoXuvEf1pBj/projectcss
import plasmic_icon_css from "../icon/plasmic.module.css"; // plasmic-import: nVTL6BvP7Knk1RSNkBbJCm/projectcss
import plasmic_menu_item_css from "../menu_item/plasmic.module.css"; // plasmic-import: 2ejMdvJDoJWjwd6DCNSCHJ/projectcss
import plasmic_image_css from "../image/plasmic.module.css"; // plasmic-import: d4FLWyib3U2TEbmJ38D5i3/projectcss
import plasmic_content_css from "../content/plasmic.module.css"; // plasmic-import: xpyP1X2yhd8ZY24SVBFr1E/projectcss
import plasmic_headline_css from "../headline/plasmic.module.css"; // plasmic-import: gXd6w7L89NWPNeJmpaYS3W/projectcss
import plasmic_sub_headline_css from "../sub_headline/plasmic.module.css"; // plasmic-import: 55QiaDppxCP7g9b2J75qMu/projectcss
import plasmic_kicker_css from "../kicker/plasmic.module.css"; // plasmic-import: fBeERBQAnyanAaLZ4nhRvg/projectcss
import plasmic_label_css from "../label/plasmic.module.css"; // plasmic-import: hNcAxYG8R1eSmuzeUeAQYf/projectcss
import plasmic_link_css from "../link/plasmic.module.css"; // plasmic-import: 9cLG8PgSvqkoRbLtirXmUr/projectcss
import plasmic_list_item_css from "../list_item/plasmic.module.css"; // plasmic-import: fKizj5juSSuZK31zh3BBJE/projectcss
import plasmic_list_group_css from "../list_group/plasmic.module.css"; // plasmic-import: vdyuckzTfD3wQ2e6DnsVHo/projectcss
import plasmic_card_css from "../card/plasmic.module.css"; // plasmic-import: sZLRCyi9YYe7t6BG9GcNjp/projectcss
import plasmic_title_css from "../title/plasmic.module.css"; // plasmic-import: 77r5g6Swry3x5EDhnHGHyj/projectcss
import projectcss from "./plasmic_its_a_lisa_site.module.css"; // plasmic-import: tt6TsnGtggzVZCRW2FQ8Vk/projectcss
import sty from "./PlasmicLayoutHeader.module.css"; // plasmic-import: HBjN2PI6FOY_/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: huLMvL5wIXy1/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: FYLMO-tZsz_5/icon

createPlasmicElementProxy;

export type PlasmicLayoutHeader__VariantMembers = {
  scroll: "scroll";
};
export type PlasmicLayoutHeader__VariantsArgs = {
  scroll?: SingleBooleanChoiceArg<"scroll">;
};
type VariantPropType = keyof PlasmicLayoutHeader__VariantsArgs;
export const PlasmicLayoutHeader__VariantProps = new Array<VariantPropType>(
  "scroll"
);

export type PlasmicLayoutHeader__ArgsType = {};
type ArgPropType = keyof PlasmicLayoutHeader__ArgsType;
export const PlasmicLayoutHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicLayoutHeader__OverridesType = {
  header?: Flex__<"div">;
  h1?: Flex__<"h1">;
  home?: Flex__<typeof CompButton>;
  about?: Flex__<typeof CompButton>;
  blog?: Flex__<typeof CompButton>;
  projects?: Flex__<typeof CompButton>;
  resources?: Flex__<typeof CompButton>;
};

export interface DefaultLayoutHeaderProps {
  scroll?: SingleBooleanChoiceArg<"scroll">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayoutHeader__RenderFunc(props: {
  variants: PlasmicLayoutHeader__VariantsArgs;
  args: PlasmicLayoutHeader__ArgsType;
  overrides: PlasmicLayoutHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "scroll",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.scroll
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    mode: useMode(),
    screen: useScreenVariantsniKtHGeB1Opg(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <div
      data-plasmic-name={"header"}
      data-plasmic-override={overrides.header}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_typography_css.plasmic_tokens,
        plasmic_theme_css.plasmic_tokens,
        plasmic_button_css.plasmic_tokens,
        plasmic_switch_css.plasmic_tokens,
        plasmic_badge_css.plasmic_tokens,
        plasmic_avatar_css.plasmic_tokens,
        plasmic_input_css.plasmic_tokens,
        plasmic_icon_css.plasmic_tokens,
        plasmic_menu_item_css.plasmic_tokens,
        plasmic_image_css.plasmic_tokens,
        plasmic_content_css.plasmic_tokens,
        plasmic_headline_css.plasmic_tokens,
        plasmic_sub_headline_css.plasmic_tokens,
        plasmic_kicker_css.plasmic_tokens,
        plasmic_label_css.plasmic_tokens,
        plasmic_link_css.plasmic_tokens,
        plasmic_list_item_css.plasmic_tokens,
        plasmic_list_group_css.plasmic_tokens,
        plasmic_card_css.plasmic_tokens,
        plasmic_title_css.plasmic_tokens,
        sty.header,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.headerglobal_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.headerglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.headerscroll]: hasVariant($state, "scroll", "scroll")
        }
      )}
      onScroll={async event => {
        const $steps = {};

        $steps["updateScroll"] = true
          ? (() => {
              const actionArgs = {
                variable: {
                  objRoot: $state,
                  variablePath: ["scroll"]
                },
                operation: 0,
                value: true
              };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;

                $stateSet(objRoot, variablePath, value);
                return value;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateScroll"] != null &&
          typeof $steps["updateScroll"] === "object" &&
          typeof $steps["updateScroll"].then === "function"
        ) {
          $steps["updateScroll"] = await $steps["updateScroll"];
        }

        $steps["updateScroll"] = true
          ? (() => {
              const actionArgs = {
                vgroup: "scroll",
                operation: 4,
                value: "scroll"
              };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                $stateSet($state, vgroup, true);
                return true;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateScroll"] != null &&
          typeof $steps["updateScroll"] === "object" &&
          typeof $steps["updateScroll"].then === "function"
        ) {
          $steps["updateScroll"] = await $steps["updateScroll"];
        }
      }}
    >
      <div className={classNames(projectcss.all, sty.freeBox__j4WnN)}>
        <div className={classNames(projectcss.all, sty.freeBox__ohrQq)}>
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
            {"Its-a-lisa"}
          </h1>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__l8Slj)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__g5Coh)}
          >
            <CompButton
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames("__wab_instance", sty.home, {
                [sty.homeglobal_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                ),
                [sty.homeglobal_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
              emphasis={["clear"]}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__tO4Da)}
                  role={"img"}
                />
              }
              link={`/`}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__maTCf)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lnLeW
                )}
              >
                {"Home"}
              </div>
            </CompButton>
            <CompButton
              data-plasmic-name={"about"}
              data-plasmic-override={overrides.about}
              className={classNames("__wab_instance", sty.about)}
              emphasis={["clear"]}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg___6Gbg)}
                  role={"img"}
                />
              }
              link={`/about`}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg___07Br)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bCd0C
                )}
              >
                {"About"}
              </div>
            </CompButton>
            <CompButton
              data-plasmic-name={"blog"}
              data-plasmic-override={overrides.blog}
              className={classNames("__wab_instance", sty.blog)}
              emphasis={["clear"]}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg___2DGq)}
                  role={"img"}
                />
              }
              link={`/blog`}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ybCnu)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zrZWq
                )}
              >
                {"Blog"}
              </div>
            </CompButton>
            <CompButton
              data-plasmic-name={"projects"}
              data-plasmic-override={overrides.projects}
              className={classNames("__wab_instance", sty.projects)}
              emphasis={["clear"]}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__sxONg)}
                  role={"img"}
                />
              }
              link={`/projects`}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__fVOq1)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jumV
                )}
              >
                {"Projects/Research"}
              </div>
            </CompButton>
            <CompButton
              data-plasmic-name={"resources"}
              data-plasmic-override={overrides.resources}
              className={classNames("__wab_instance", sty.resources)}
              emphasis={["clear"]}
              endIcon={
                <Icon38Icon
                  className={classNames(projectcss.all, sty.svg__utEaX)}
                  role={"img"}
                />
              }
              link={`/resources`}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__hF2R)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ve629
                )}
              >
                {"Resources"}
              </div>
            </CompButton>
          </Stack__>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  header: ["header", "h1", "home", "about", "blog", "projects", "resources"],
  h1: ["h1"],
  home: ["home"],
  about: ["about"],
  blog: ["blog"],
  projects: ["projects"],
  resources: ["resources"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  header: "div";
  h1: "h1";
  home: typeof CompButton;
  about: typeof CompButton;
  blog: typeof CompButton;
  projects: typeof CompButton;
  resources: typeof CompButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayoutHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayoutHeader__VariantsArgs;
    args?: PlasmicLayoutHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayoutHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayoutHeader__ArgsType,
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
          internalArgPropNames: PlasmicLayoutHeader__ArgProps,
          internalVariantPropNames: PlasmicLayoutHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayoutHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header") {
    func.displayName = "PlasmicLayoutHeader";
  } else {
    func.displayName = `PlasmicLayoutHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicLayoutHeader = Object.assign(
  // Top-level PlasmicLayoutHeader renders the root element
  makeNodeComponent("header"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    home: makeNodeComponent("home"),
    about: makeNodeComponent("about"),
    blog: makeNodeComponent("blog"),
    projects: makeNodeComponent("projects"),
    resources: makeNodeComponent("resources"),

    // Metadata about props expected for PlasmicLayoutHeader
    internalVariantProps: PlasmicLayoutHeader__VariantProps,
    internalArgProps: PlasmicLayoutHeader__ArgProps
  }
);

export default PlasmicLayoutHeader;
/* prettier-ignore-end */
