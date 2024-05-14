// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4JFyEcvXaxQ6TZ3SJQYzp6
// Component: 3BnfwULcRUyf

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

import * as pp from "@plasmicapp/react-web";

import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4JFyEcvXaxQ6TZ3SJQYzp6/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 3BnfwULcRUyf/css

import FaChecksvgIcon from "./icons/PlasmicIcon__FaChecksvg"; // plasmic-import: 2TAj_FBTgcH-/icon
import FaArrowRightsvgIcon from "./icons/PlasmicIcon__FaArrowRightsvg"; // plasmic-import: o-asKjci-D-m/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "sm" | "md" | "lg" | "xl";
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  iconOnly: "iconOnly";
  background: "primary" | "secondary" | "tertiary" | "destructive" | "action";
  emphasis: "bold" | "subtle" | "minimal" | "clear";
  foreground: "primary" | "secondary" | "tertiary" | "destructive" | "action";
};
export type PlasmicButton__VariantsArgs = {
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"sm" | "md" | "lg" | "xl">;
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  background?: SingleChoiceArg<
    "primary" | "secondary" | "tertiary" | "destructive" | "action"
  >;
  emphasis?: MultiChoiceArg<"bold" | "subtle" | "minimal" | "clear">;
  foreground?: SingleChoiceArg<
    "primary" | "secondary" | "tertiary" | "destructive" | "action"
  >;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "isDisabled",
  "shape",
  "size",
  "showStartIcon",
  "showEndIcon",
  "iconOnly",
  "background",
  "emphasis",
  "foreground"
);

export type PlasmicButton__ArgsType = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "children",
  "startIcon",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

export type PlasmicButton__OverridesType = {
  root?: Flex__<"button">;
  startIconContainer?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"sm" | "md" | "lg" | "xl">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  background?: SingleChoiceArg<
    "primary" | "secondary" | "tertiary" | "destructive" | "action"
  >;
  emphasis?: MultiChoiceArg<"bold" | "subtle" | "minimal" | "clear">;
  foreground?: SingleChoiceArg<
    "primary" | "secondary" | "tertiary" | "destructive" | "action"
  >;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
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
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "background",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.background
      },
      {
        path: "emphasis",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.emphasis
      },
      {
        path: "foreground",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.foreground
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  const globalVariants = ensureGlobalVariants({
    mode: useMode()
  });

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
        plasmic_typography_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootbackground_action]: hasVariant(
            $state,
            "background",
            "action"
          ),
          [sty.rootbackground_destructive]: hasVariant(
            $state,
            "background",
            "destructive"
          ),
          [sty.rootbackground_primary]: hasVariant(
            $state,
            "background",
            "primary"
          ),
          [sty.rootbackground_secondary]: hasVariant(
            $state,
            "background",
            "secondary"
          ),
          [sty.rootbackground_tertiary]: hasVariant(
            $state,
            "background",
            "tertiary"
          ),
          [sty.rootemphasis_clear]: hasVariant($state, "emphasis", "clear"),
          [sty.rootemphasis_minimal]: hasVariant($state, "emphasis", "minimal"),
          [sty.rootemphasis_subtle]: hasVariant($state, "emphasis", "subtle"),
          [sty.rootforeground_primary]: hasVariant(
            $state,
            "foreground",
            "primary"
          ),
          [sty.rootforeground_secondary]: hasVariant(
            $state,
            "foreground",
            "secondary"
          ),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshape_round]: hasVariant($state, "shape", "round"),
          [sty.rootshape_rounded]: hasVariant($state, "shape", "rounded"),
          [sty.rootshape_rounded_size_sm]:
            hasVariant($state, "size", "sm") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant($state, "shape", "sharp"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsize_lg]: hasVariant($state, "size", "lg"),
          [sty.rootsize_md]: hasVariant($state, "size", "md"),
          [sty.rootsize_sm]: hasVariant($state, "size", "sm"),
          [sty.rootsize_xl]: hasVariant($state, "size", "xl")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"startIconContainer"}
        data-plasmic-override={overrides.startIconContainer}
        className={classNames(projectcss.all, sty.startIconContainer, {
          [sty.startIconContainerbackground_secondary]: hasVariant(
            $state,
            "background",
            "secondary"
          ),
          [sty.startIconContaineremphasis_subtle]: hasVariant(
            $state,
            "emphasis",
            "subtle"
          ),
          [sty.startIconContainericonOnly]: hasVariant(
            $state,
            "iconOnly",
            "iconOnly"
          ),
          [sty.startIconContainershowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <FaChecksvgIcon
              className={classNames(projectcss.all, sty.svg__hQmMj)}
              role={"img"}
            />
          ),

          value: args.startIcon,
          className: classNames(sty.slotTargetStartIcon, {
            [sty.slotTargetStartIconbackground_action]: hasVariant(
              $state,
              "background",
              "action"
            ),
            [sty.slotTargetStartIconbackground_destructive]: hasVariant(
              $state,
              "background",
              "destructive"
            ),
            [sty.slotTargetStartIconbackground_secondary]: hasVariant(
              $state,
              "background",
              "secondary"
            ),
            [sty.slotTargetStartIconbackground_tertiary]: hasVariant(
              $state,
              "background",
              "tertiary"
            ),
            [sty.slotTargetStartIconemphasis_clear]: hasVariant(
              $state,
              "emphasis",
              "clear"
            ),
            [sty.slotTargetStartIconemphasis_minimal]: hasVariant(
              $state,
              "emphasis",
              "minimal"
            ),
            [sty.slotTargetStartIconemphasis_subtle]: hasVariant(
              $state,
              "emphasis",
              "subtle"
            ),
            [sty.slotTargetStartIconforeground_action]: hasVariant(
              $state,
              "foreground",
              "action"
            ),
            [sty.slotTargetStartIconforeground_destructive]: hasVariant(
              $state,
              "foreground",
              "destructive"
            ),
            [sty.slotTargetStartIconforeground_primary]: hasVariant(
              $state,
              "foreground",
              "primary"
            ),
            [sty.slotTargetStartIconforeground_secondary]: hasVariant(
              $state,
              "foreground",
              "secondary"
            ),
            [sty.slotTargetStartIconforeground_tertiary]: hasVariant(
              $state,
              "foreground",
              "tertiary"
            )
          })
        })}
      </div>
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainericonOnly]: hasVariant(
            $state,
            "iconOnly",
            "iconOnly"
          ),
          [sty.contentContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenbackground_action]: hasVariant(
              $state,
              "background",
              "action"
            ),
            [sty.slotTargetChildrenbackground_destructive]: hasVariant(
              $state,
              "background",
              "destructive"
            ),
            [sty.slotTargetChildrenbackground_primary]: hasVariant(
              $state,
              "background",
              "primary"
            ),
            [sty.slotTargetChildrenbackground_secondary]: hasVariant(
              $state,
              "background",
              "secondary"
            ),
            [sty.slotTargetChildrenbackground_tertiary]: hasVariant(
              $state,
              "background",
              "tertiary"
            ),
            [sty.slotTargetChildrenemphasis_clear]: hasVariant(
              $state,
              "emphasis",
              "clear"
            ),
            [sty.slotTargetChildrenemphasis_minimal]: hasVariant(
              $state,
              "emphasis",
              "minimal"
            ),
            [sty.slotTargetChildrenemphasis_subtle]: hasVariant(
              $state,
              "emphasis",
              "subtle"
            ),
            [sty.slotTargetChildrenforeground_action]: hasVariant(
              $state,
              "foreground",
              "action"
            ),
            [sty.slotTargetChildrenforeground_destructive]: hasVariant(
              $state,
              "foreground",
              "destructive"
            ),
            [sty.slotTargetChildrenforeground_primary]: hasVariant(
              $state,
              "foreground",
              "primary"
            ),
            [sty.slotTargetChildrenforeground_secondary]: hasVariant(
              $state,
              "foreground",
              "secondary"
            ),
            [sty.slotTargetChildrenforeground_tertiary]: hasVariant(
              $state,
              "foreground",
              "tertiary"
            ),
            [sty.slotTargetChildrenisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetChildrenshape_round]: hasVariant(
              $state,
              "shape",
              "round"
            ),
            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              $state,
              "shape",
              "rounded"
            ),
            [sty.slotTargetChildrensize_md]: hasVariant($state, "size", "md")
          })
        })}
      </div>
      <div
        data-plasmic-name={"endIconContainer"}
        data-plasmic-override={overrides.endIconContainer}
        className={classNames(projectcss.all, sty.endIconContainer, {
          [sty.endIconContainerbackground_secondary]: hasVariant(
            $state,
            "background",
            "secondary"
          ),
          [sty.endIconContaineremphasis_subtle]: hasVariant(
            $state,
            "emphasis",
            "subtle"
          ),
          [sty.endIconContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <FaArrowRightsvgIcon
              className={classNames(projectcss.all, sty.svg__lYvJ2)}
              role={"img"}
            />
          ),

          value: args.endIcon,
          className: classNames(sty.slotTargetEndIcon, {
            [sty.slotTargetEndIconbackground_action]: hasVariant(
              $state,
              "background",
              "action"
            ),
            [sty.slotTargetEndIconbackground_destructive]: hasVariant(
              $state,
              "background",
              "destructive"
            ),
            [sty.slotTargetEndIconbackground_secondary]: hasVariant(
              $state,
              "background",
              "secondary"
            ),
            [sty.slotTargetEndIconbackground_tertiary]: hasVariant(
              $state,
              "background",
              "tertiary"
            ),
            [sty.slotTargetEndIconemphasis_clear]: hasVariant(
              $state,
              "emphasis",
              "clear"
            ),
            [sty.slotTargetEndIconemphasis_minimal]: hasVariant(
              $state,
              "emphasis",
              "minimal"
            ),
            [sty.slotTargetEndIconemphasis_subtle]: hasVariant(
              $state,
              "emphasis",
              "subtle"
            ),
            [sty.slotTargetEndIconforeground_action]: hasVariant(
              $state,
              "foreground",
              "action"
            ),
            [sty.slotTargetEndIconforeground_destructive]: hasVariant(
              $state,
              "foreground",
              "destructive"
            ),
            [sty.slotTargetEndIconforeground_primary]: hasVariant(
              $state,
              "foreground",
              "primary"
            ),
            [sty.slotTargetEndIconforeground_secondary]: hasVariant(
              $state,
              "foreground",
              "secondary"
            ),
            [sty.slotTargetEndIconforeground_tertiary]: hasVariant(
              $state,
              "foreground",
              "tertiary"
            )
          })
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
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
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
