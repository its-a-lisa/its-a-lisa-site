// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gXd6w7L89NWPNeJmpaYS3W
// Component: NdtUkXEo8LWs

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

import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: gXd6w7L89NWPNeJmpaYS3W/projectcss
import sty from "./PlasmicHeadline.module.css"; // plasmic-import: NdtUkXEo8LWs/css

createPlasmicElementProxy;

export type PlasmicHeadline__VariantMembers = {
  colors:
    | "secondary"
    | "standard"
    | "main"
    | "ancillary"
    | "success"
    | "information"
    | "error"
    | "disabled"
    | "helper"
    | "onColor";
  family: "_default" | "secondary";
  size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  weight:
    | "black"
    | "extraBold"
    | "bold"
    | "semiBold"
    | "medium"
    | "normal"
    | "light";
  justification: "left" | "center" | "right" | "justification";
};
export type PlasmicHeadline__VariantsArgs = {
  colors?: SingleChoiceArg<
    | "secondary"
    | "standard"
    | "main"
    | "ancillary"
    | "success"
    | "information"
    | "error"
    | "disabled"
    | "helper"
    | "onColor"
  >;
  family?: SingleChoiceArg<"_default" | "secondary">;
  size?: SingleChoiceArg<"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
  weight?: SingleChoiceArg<
    "black" | "extraBold" | "bold" | "semiBold" | "medium" | "normal" | "light"
  >;
  justification?: SingleChoiceArg<
    "left" | "center" | "right" | "justification"
  >;
};
type VariantPropType = keyof PlasmicHeadline__VariantsArgs;
export const PlasmicHeadline__VariantProps = new Array<VariantPropType>(
  "colors",
  "family",
  "size",
  "weight",
  "justification"
);

export type PlasmicHeadline__ArgsType = {
  contentSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHeadline__ArgsType;
export const PlasmicHeadline__ArgProps = new Array<ArgPropType>("contentSlot");

export type PlasmicHeadline__OverridesType = {
  contentBase?: Flex__<"div">;
  contentStack?: Flex__<"div">;
};

export interface DefaultHeadlineProps {
  contentSlot?: React.ReactNode;
  colors?: SingleChoiceArg<
    | "secondary"
    | "standard"
    | "main"
    | "ancillary"
    | "success"
    | "information"
    | "error"
    | "disabled"
    | "helper"
    | "onColor"
  >;
  family?: SingleChoiceArg<"_default" | "secondary">;
  size?: SingleChoiceArg<"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
  weight?: SingleChoiceArg<
    "black" | "extraBold" | "bold" | "semiBold" | "medium" | "normal" | "light"
  >;
  justification?: SingleChoiceArg<
    "left" | "center" | "right" | "justification"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeadline__RenderFunc(props: {
  variants: PlasmicHeadline__VariantsArgs;
  args: PlasmicHeadline__ArgsType;
  overrides: PlasmicHeadline__OverridesType;
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
        path: "colors",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.colors
      },
      {
        path: "family",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.family
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "weight",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.weight
      },
      {
        path: "justification",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.justification
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
    <div
      data-plasmic-name={"contentBase"}
      data-plasmic-override={overrides.contentBase}
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
        sty.contentBase,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"contentStack"}
        data-plasmic-override={overrides.contentStack}
        className={classNames(projectcss.all, sty.contentStack, {
          [sty.contentStackcolors_secondary]: hasVariant(
            $state,
            "colors",
            "secondary"
          ),
          [sty.contentStacksize_lg]: hasVariant($state, "size", "lg"),
          [sty.contentStacksize_md]: hasVariant($state, "size", "md"),
          [sty.contentStacksize_xl]: hasVariant($state, "size", "xl"),
          [sty.contentStacksize_xs]: hasVariant($state, "size", "xs"),
          [sty.contentStacksize_xxs]: hasVariant($state, "size", "xxs"),
          [sty.contentStackweight_light]: hasVariant($state, "weight", "light")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ls3Hi
              )}
            >
              {"Smile, breathe and go slowly"}
            </div>
          ),
          value: args.contentSlot,
          className: classNames(sty.slotTargetContentSlot, {
            [sty.slotTargetContentSlotcolors_ancillary]: hasVariant(
              $state,
              "colors",
              "ancillary"
            ),
            [sty.slotTargetContentSlotcolors_disabled]: hasVariant(
              $state,
              "colors",
              "disabled"
            ),
            [sty.slotTargetContentSlotcolors_error]: hasVariant(
              $state,
              "colors",
              "error"
            ),
            [sty.slotTargetContentSlotcolors_helper]: hasVariant(
              $state,
              "colors",
              "helper"
            ),
            [sty.slotTargetContentSlotcolors_information]: hasVariant(
              $state,
              "colors",
              "information"
            ),
            [sty.slotTargetContentSlotcolors_main]: hasVariant(
              $state,
              "colors",
              "main"
            ),
            [sty.slotTargetContentSlotcolors_onColor]: hasVariant(
              $state,
              "colors",
              "onColor"
            ),
            [sty.slotTargetContentSlotcolors_secondary]: hasVariant(
              $state,
              "colors",
              "secondary"
            ),
            [sty.slotTargetContentSlotcolors_standard]: hasVariant(
              $state,
              "colors",
              "standard"
            ),
            [sty.slotTargetContentSlotcolors_success]: hasVariant(
              $state,
              "colors",
              "success"
            ),
            [sty.slotTargetContentSlotfamily_secondary]: hasVariant(
              $state,
              "family",
              "secondary"
            ),
            [sty.slotTargetContentSlotjustification_center]: hasVariant(
              $state,
              "justification",
              "center"
            ),
            [sty.slotTargetContentSlotjustification_justification]: hasVariant(
              $state,
              "justification",
              "justification"
            ),
            [sty.slotTargetContentSlotjustification_left]: hasVariant(
              $state,
              "justification",
              "left"
            ),
            [sty.slotTargetContentSlotjustification_right]: hasVariant(
              $state,
              "justification",
              "right"
            ),
            [sty.slotTargetContentSlotsize_lg]: hasVariant(
              $state,
              "size",
              "lg"
            ),
            [sty.slotTargetContentSlotsize_md]: hasVariant(
              $state,
              "size",
              "md"
            ),
            [sty.slotTargetContentSlotsize_sm]: hasVariant(
              $state,
              "size",
              "sm"
            ),
            [sty.slotTargetContentSlotsize_xl]: hasVariant(
              $state,
              "size",
              "xl"
            ),
            [sty.slotTargetContentSlotsize_xs]: hasVariant(
              $state,
              "size",
              "xs"
            ),
            [sty.slotTargetContentSlotsize_xxl]: hasVariant(
              $state,
              "size",
              "xxl"
            ),
            [sty.slotTargetContentSlotsize_xxs]: hasVariant(
              $state,
              "size",
              "xxs"
            ),
            [sty.slotTargetContentSlotweight_black]: hasVariant(
              $state,
              "weight",
              "black"
            ),
            [sty.slotTargetContentSlotweight_bold]: hasVariant(
              $state,
              "weight",
              "bold"
            ),
            [sty.slotTargetContentSlotweight_extraBold]: hasVariant(
              $state,
              "weight",
              "extraBold"
            ),
            [sty.slotTargetContentSlotweight_light]: hasVariant(
              $state,
              "weight",
              "light"
            ),
            [sty.slotTargetContentSlotweight_medium]: hasVariant(
              $state,
              "weight",
              "medium"
            ),
            [sty.slotTargetContentSlotweight_normal]: hasVariant(
              $state,
              "weight",
              "normal"
            ),
            [sty.slotTargetContentSlotweight_semiBold]: hasVariant(
              $state,
              "weight",
              "semiBold"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  contentBase: ["contentBase", "contentStack"],
  contentStack: ["contentStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  contentBase: "div";
  contentStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeadline__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeadline__VariantsArgs;
    args?: PlasmicHeadline__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeadline__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeadline__ArgsType,
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
          internalArgPropNames: PlasmicHeadline__ArgProps,
          internalVariantPropNames: PlasmicHeadline__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeadline__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "contentBase") {
    func.displayName = "PlasmicHeadline";
  } else {
    func.displayName = `PlasmicHeadline.${nodeName}`;
  }
  return func;
}

export const PlasmicHeadline = Object.assign(
  // Top-level PlasmicHeadline renders the root element
  makeNodeComponent("contentBase"),
  {
    // Helper components rendering sub-elements
    contentStack: makeNodeComponent("contentStack"),

    // Metadata about props expected for PlasmicHeadline
    internalVariantProps: PlasmicHeadline__VariantProps,
    internalArgProps: PlasmicHeadline__ArgProps
  }
);

export default PlasmicHeadline;
/* prettier-ignore-end */
