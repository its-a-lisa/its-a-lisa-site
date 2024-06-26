// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: 4pJ51SAsGEFM

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
import sty from "./PlasmicPatternCard.module.css"; // plasmic-import: 4pJ51SAsGEFM/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: huLMvL5wIXy1/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: FYLMO-tZsz_5/icon

createPlasmicElementProxy;

export type PlasmicPatternCard__VariantMembers = {
  hideButtons: "hideButtons";
};
export type PlasmicPatternCard__VariantsArgs = {
  hideButtons?: SingleBooleanChoiceArg<"hideButtons">;
};
type VariantPropType = keyof PlasmicPatternCard__VariantsArgs;
export const PlasmicPatternCard__VariantProps = new Array<VariantPropType>(
  "hideButtons"
);

export type PlasmicPatternCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPatternCard__ArgsType;
export const PlasmicPatternCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3"
);

export type PlasmicPatternCard__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
  h4?: Flex__<"h4">;
  freeBox?: Flex__<"div">;
};

export interface DefaultPatternCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  hideButtons?: SingleBooleanChoiceArg<"hideButtons">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPatternCard__RenderFunc(props: {
  variants: PlasmicPatternCard__VariantsArgs;
  args: PlasmicPatternCard__ArgsType;
  overrides: PlasmicPatternCard__OverridesType;
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
        path: "hideButtons",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideButtons
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
          )
        }
      )}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(projectcss.all, projectcss.h1, sty.h1)}
      >
        {renderPlasmicSlot({
          defaultContents: "Hello",
          value: args.slot
        })}
      </h1>
      <h4
        data-plasmic-name={"h4"}
        data-plasmic-override={overrides.h4}
        className={classNames(projectcss.all, projectcss.h4, sty.h4)}
      >
        {renderPlasmicSlot({
          defaultContents: "I am Alyssa, commonly known as its-a-lisa",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </h4>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxhideButtons]: hasVariant(
            $state,
            "hideButtons",
            "hideButtons"
          )
        })}
      >
        <CompButton
          className={classNames("__wab_instance", sty.compButton__yI22H)}
        >
          {renderPlasmicSlot({
            defaultContents: "Button",
            value: args.slot2
          })}
        </CompButton>
        <CompButton
          className={classNames("__wab_instance", sty.compButton__oatZm)}
        >
          {renderPlasmicSlot({
            defaultContents: "Button",
            value: args.slot3
          })}
        </CompButton>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "h4", "freeBox"],
  h1: ["h1"],
  h4: ["h4"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  h4: "h4";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPatternCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPatternCard__VariantsArgs;
    args?: PlasmicPatternCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPatternCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPatternCard__ArgsType,
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
          internalArgPropNames: PlasmicPatternCard__ArgProps,
          internalVariantPropNames: PlasmicPatternCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPatternCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPatternCard";
  } else {
    func.displayName = `PlasmicPatternCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPatternCard = Object.assign(
  // Top-level PlasmicPatternCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    h4: makeNodeComponent("h4"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicPatternCard
    internalVariantProps: PlasmicPatternCard__VariantProps,
    internalArgProps: PlasmicPatternCard__ArgProps
  }
);

export default PlasmicPatternCard;
/* prettier-ignore-end */
