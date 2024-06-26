// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: 08tV0C4XRgYQ

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

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 0mo4e2K7LvGd/globalVariant
import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant
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
import sty from "./PlasmicCompSwitch.module.css"; // plasmic-import: 08tV0C4XRgYQ/css

createPlasmicElementProxy;

export type PlasmicCompSwitch__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
};
export type PlasmicCompSwitch__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
};
type VariantPropType = keyof PlasmicCompSwitch__VariantsArgs;
export const PlasmicCompSwitch__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked"
);

export type PlasmicCompSwitch__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
};
type ArgPropType = keyof PlasmicCompSwitch__ArgsType;
export const PlasmicCompSwitch__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange"
);

export type PlasmicCompSwitch__OverridesType = {
  root?: Flex__<"div">;
  toggle?: Flex__<"div">;
  track?: Flex__<"div">;
  thumb?: Flex__<"div">;
  labelContainer?: Flex__<"div">;
};

export interface DefaultCompSwitchProps extends pp.SwitchProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCompSwitch__RenderFunc(props: {
  variants: PlasmicCompSwitch__VariantsArgs;
  args: PlasmicCompSwitch__ArgsType;
  overrides: PlasmicCompSwitch__OverridesType;
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
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",

        valueProp: "isChecked",
        onChangeProp: "onChange"
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
    theme: useTheme(),
    mode: useMode(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
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
        sty.root,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(projectcss.all, sty.toggle, {
          [sty.toggle___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.toggleisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.toggleisDisabled]: hasVariant($state, "isDisabled", "isDisabled")
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(projectcss.all, sty.track, {
            [sty.track___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.trackisChecked]: hasVariant($state, "isChecked", "isChecked"),
            [sty.trackisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            )
          })}
        />

        <div
          data-plasmic-name={"thumb"}
          data-plasmic-override={overrides.thumb}
          className={classNames(projectcss.all, sty.thumb, {
            [sty.thumb___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.thumbglobal_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            ),
            [sty.thumbisChecked]: hasVariant($state, "isChecked", "isChecked")
          })}
        />
      </div>
      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Switch me",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrenisChecked]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
              [sty.slotTargetChildrennoLabel]: hasVariant(
                $state,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.SwitchProps>(props: P, ref: pp.SwitchRef) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Switch me"
    };
  }

  return pp.useSwitch<P, typeof PlasmicCompSwitch>(
    PlasmicCompSwitch,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "thumb", "labelContainer"],
  toggle: ["toggle", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggle: "div";
  track: "div";
  thumb: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompSwitch__VariantsArgs;
    args?: PlasmicCompSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompSwitch__ArgsType,
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
          internalArgPropNames: PlasmicCompSwitch__ArgProps,
          internalVariantPropNames: PlasmicCompSwitch__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompSwitch";
  } else {
    func.displayName = `PlasmicCompSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicCompSwitch = Object.assign(
  // Top-level PlasmicCompSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicCompSwitch
    internalVariantProps: PlasmicCompSwitch__VariantProps,
    internalArgProps: PlasmicCompSwitch__ArgProps,

    useBehavior
  }
);

export default PlasmicCompSwitch;
/* prettier-ignore-end */
