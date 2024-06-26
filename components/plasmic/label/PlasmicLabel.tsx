// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hNcAxYG8R1eSmuzeUeAQYf
// Component: 7G5W3275Losu

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: hNcAxYG8R1eSmuzeUeAQYf/projectcss
import sty from "./PlasmicLabel.module.css"; // plasmic-import: 7G5W3275Losu/css

createPlasmicElementProxy;

export type PlasmicLabel__VariantMembers = {
  size: "sm" | "md" | "lg";
  disabled: "disabled";
  emphasis: "subtle" | "bold";
};
export type PlasmicLabel__VariantsArgs = {
  size?: SingleChoiceArg<"sm" | "md" | "lg">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  emphasis?: SingleChoiceArg<"subtle" | "bold">;
};
type VariantPropType = keyof PlasmicLabel__VariantsArgs;
export const PlasmicLabel__VariantProps = new Array<VariantPropType>(
  "size",
  "disabled",
  "emphasis"
);

export type PlasmicLabel__ArgsType = {
  labelSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLabel__ArgsType;
export const PlasmicLabel__ArgProps = new Array<ArgPropType>("labelSlot");

export type PlasmicLabel__OverridesType = {
  labelBase?: Flex__<"div">;
  labelStack?: Flex__<"h6">;
};

export interface DefaultLabelProps {
  labelSlot?: React.ReactNode;
  size?: SingleChoiceArg<"sm" | "md" | "lg">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  emphasis?: SingleChoiceArg<"subtle" | "bold">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLabel__RenderFunc(props: {
  variants: PlasmicLabel__VariantsArgs;
  args: PlasmicLabel__ArgsType;
  overrides: PlasmicLabel__OverridesType;
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
        path: "disabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabled
      },
      {
        path: "emphasis",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.emphasis
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
    mode: useMode()
  });

  return (
    <div
      data-plasmic-name={"labelBase"}
      data-plasmic-override={overrides.labelBase}
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
        sty.labelBase,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          )
        }
      )}
    >
      <h6
        data-plasmic-name={"labelStack"}
        data-plasmic-override={overrides.labelStack}
        className={classNames(projectcss.all, projectcss.h6, sty.labelStack)}
      >
        {renderPlasmicSlot({
          defaultContents: "Label",
          value: args.labelSlot,
          className: classNames(sty.slotTargetLabelSlot, {
            [sty.slotTargetLabelSlotdisabled]: hasVariant(
              $state,
              "disabled",
              "disabled"
            ),
            [sty.slotTargetLabelSlotemphasis_bold]: hasVariant(
              $state,
              "emphasis",
              "bold"
            ),
            [sty.slotTargetLabelSlotemphasis_subtle]: hasVariant(
              $state,
              "emphasis",
              "subtle"
            ),
            [sty.slotTargetLabelSlotsize_lg]: hasVariant($state, "size", "lg"),
            [sty.slotTargetLabelSlotsize_md]: hasVariant($state, "size", "md"),
            [sty.slotTargetLabelSlotsize_sm]: hasVariant($state, "size", "sm")
          })
        })}
      </h6>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  labelBase: ["labelBase", "labelStack"],
  labelStack: ["labelStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  labelBase: "div";
  labelStack: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLabel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLabel__VariantsArgs;
    args?: PlasmicLabel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLabel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLabel__ArgsType,
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
          internalArgPropNames: PlasmicLabel__ArgProps,
          internalVariantPropNames: PlasmicLabel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLabel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "labelBase") {
    func.displayName = "PlasmicLabel";
  } else {
    func.displayName = `PlasmicLabel.${nodeName}`;
  }
  return func;
}

export const PlasmicLabel = Object.assign(
  // Top-level PlasmicLabel renders the root element
  makeNodeComponent("labelBase"),
  {
    // Helper components rendering sub-elements
    labelStack: makeNodeComponent("labelStack"),

    // Metadata about props expected for PlasmicLabel
    internalVariantProps: PlasmicLabel__VariantProps,
    internalArgProps: PlasmicLabel__ArgProps
  }
);

export default PlasmicLabel;
/* prettier-ignore-end */
