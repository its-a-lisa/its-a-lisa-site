// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 77r5g6Swry3x5EDhnHGHyj
// Component: HXMutnkmSvNq

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

import Kicker from "../../Kicker"; // plasmic-import: qnV728Aa_F0x/component
import Headline from "../../Headline"; // plasmic-import: NdtUkXEo8LWs/component
import SubHeadline from "../../SubHeadline"; // plasmic-import: EH1rm_aNnjkh/component

import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
import plasmic_kicker_css from "../kicker/plasmic.module.css"; // plasmic-import: fBeERBQAnyanAaLZ4nhRvg/projectcss
import plasmic_headline_css from "../headline/plasmic.module.css"; // plasmic-import: gXd6w7L89NWPNeJmpaYS3W/projectcss
import plasmic_sub_headline_css from "../sub_headline/plasmic.module.css"; // plasmic-import: 55QiaDppxCP7g9b2J75qMu/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 77r5g6Swry3x5EDhnHGHyj/projectcss
import sty from "./PlasmicTitle.module.css"; // plasmic-import: HXMutnkmSvNq/css

createPlasmicElementProxy;

export type PlasmicTitle__VariantMembers = {
  size: "sm" | "md" | "lg";
  styles: "removeKicker" | "removeHeadline" | "removeSubheadline";
  paddingNone: "paddingNone";
};
export type PlasmicTitle__VariantsArgs = {
  size?: SingleChoiceArg<"sm" | "md" | "lg">;
  styles?: MultiChoiceArg<
    "removeKicker" | "removeHeadline" | "removeSubheadline"
  >;
  paddingNone?: SingleBooleanChoiceArg<"paddingNone">;
};
type VariantPropType = keyof PlasmicTitle__VariantsArgs;
export const PlasmicTitle__VariantProps = new Array<VariantPropType>(
  "size",
  "styles",
  "paddingNone"
);

export type PlasmicTitle__ArgsType = {
  subHeadlineSlot?: React.ReactNode;
  headlineSlot?: React.ReactNode;
  kickerSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTitle__ArgsType;
export const PlasmicTitle__ArgProps = new Array<ArgPropType>(
  "subHeadlineSlot",
  "headlineSlot",
  "kickerSlot"
);

export type PlasmicTitle__OverridesType = {
  titleBase?: Flex__<"div">;
  topStack?: Flex__<"div">;
  kickerStack?: Flex__<"div">;
  headlineStack?: Flex__<"div">;
  bottomStack?: Flex__<"div">;
  subHeadlineStack?: Flex__<"div">;
};

export interface DefaultTitleProps {
  subHeadlineSlot?: React.ReactNode;
  headlineSlot?: React.ReactNode;
  kickerSlot?: React.ReactNode;
  size?: SingleChoiceArg<"sm" | "md" | "lg">;
  styles?: MultiChoiceArg<
    "removeKicker" | "removeHeadline" | "removeSubheadline"
  >;
  paddingNone?: SingleBooleanChoiceArg<"paddingNone">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTitle__RenderFunc(props: {
  variants: PlasmicTitle__VariantsArgs;
  args: PlasmicTitle__ArgsType;
  overrides: PlasmicTitle__OverridesType;
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
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "styles",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.styles
      },
      {
        path: "paddingNone",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.paddingNone
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
    mode: useMode(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"titleBase"}
      data-plasmic-override={overrides.titleBase}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_typography_css.plasmic_tokens,
        plasmic_kicker_css.plasmic_tokens,
        plasmic_headline_css.plasmic_tokens,
        plasmic_sub_headline_css.plasmic_tokens,
        sty.titleBase,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.titleBasepaddingNone]: hasVariant(
            $state,
            "paddingNone",
            "paddingNone"
          ),
          [sty.titleBasesize_lg]: hasVariant($state, "size", "lg"),
          [sty.titleBasesize_md]: hasVariant($state, "size", "md"),
          [sty.titleBasesize_sm]: hasVariant($state, "size", "sm")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"topStack"}
        data-plasmic-override={overrides.topStack}
        hasGap={true}
        className={classNames(projectcss.all, sty.topStack, {
          [sty.topStacksize_lg]: hasVariant($state, "size", "lg"),
          [sty.topStacksize_sm]: hasVariant($state, "size", "sm")
        })}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"kickerStack"}
          data-plasmic-override={overrides.kickerStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.kickerStack, {
            [sty.kickerStackstyles_removeKicker]: hasVariant(
              $state,
              "styles",
              "removeKicker"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Kicker
                className={classNames("__wab_instance", sty.kicker__dMg5J)}
              />
            ),

            value: args.kickerSlot
          })}
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"headlineStack"}
          data-plasmic-override={overrides.headlineStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.headlineStack, {
            [sty.headlineStackstyles_removeHeadline]: hasVariant(
              $state,
              "styles",
              "removeHeadline"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Headline
                className={classNames("__wab_instance", sty.headline__xTQgZ)}
                contentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pTawr
                    )}
                  >
                    {"Act without expectation"}
                  </div>
                }
              />
            ),

            value: args.headlineSlot
          })}
        </Stack__>
      </Stack__>
      <div
        data-plasmic-name={"bottomStack"}
        data-plasmic-override={overrides.bottomStack}
        className={classNames(projectcss.all, sty.bottomStack, {
          [sty.bottomStackstyles_removeSubheadline]: hasVariant(
            $state,
            "styles",
            "removeSubheadline"
          )
        })}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"subHeadlineStack"}
          data-plasmic-override={overrides.subHeadlineStack}
          hasGap={true}
          className={classNames(projectcss.all, sty.subHeadlineStack)}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <SubHeadline
                className={classNames("__wab_instance", sty.subHeadline__uEsMw)}
                contentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ozzFq
                    )}
                  >
                    {
                      "The practice of Zen is forgetting the self in the act of uniting with something.\nIf you realize you have enough, you are truly rich."
                    }
                  </div>
                }
              />
            ),

            value: args.subHeadlineSlot
          })}
        </Stack__>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  titleBase: [
    "titleBase",
    "topStack",
    "kickerStack",
    "headlineStack",
    "bottomStack",
    "subHeadlineStack"
  ],
  topStack: ["topStack", "kickerStack", "headlineStack"],
  kickerStack: ["kickerStack"],
  headlineStack: ["headlineStack"],
  bottomStack: ["bottomStack", "subHeadlineStack"],
  subHeadlineStack: ["subHeadlineStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  titleBase: "div";
  topStack: "div";
  kickerStack: "div";
  headlineStack: "div";
  bottomStack: "div";
  subHeadlineStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTitle__VariantsArgs;
    args?: PlasmicTitle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTitle__ArgsType,
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
          internalArgPropNames: PlasmicTitle__ArgProps,
          internalVariantPropNames: PlasmicTitle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "titleBase") {
    func.displayName = "PlasmicTitle";
  } else {
    func.displayName = `PlasmicTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicTitle = Object.assign(
  // Top-level PlasmicTitle renders the root element
  makeNodeComponent("titleBase"),
  {
    // Helper components rendering sub-elements
    topStack: makeNodeComponent("topStack"),
    kickerStack: makeNodeComponent("kickerStack"),
    headlineStack: makeNodeComponent("headlineStack"),
    bottomStack: makeNodeComponent("bottomStack"),
    subHeadlineStack: makeNodeComponent("subHeadlineStack"),

    // Metadata about props expected for PlasmicTitle
    internalVariantProps: PlasmicTitle__VariantProps,
    internalArgProps: PlasmicTitle__ArgProps
  }
);

export default PlasmicTitle;
/* prettier-ignore-end */
