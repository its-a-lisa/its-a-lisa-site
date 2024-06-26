// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6eqm1KNiFrAWEs21Xh4t1D
// Component: VSN3Z5Qj3Ryg

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

import ListItem from "../../ListItem"; // plasmic-import: HmsKVTz2YTwg/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_switch_css from "../switch/plasmic.module.css"; // plasmic-import: i4n9AbVD4xq7VvHzvrVDh9/projectcss
import plasmic_badge_css from "../badge/plasmic.module.css"; // plasmic-import: 6PoNur73nfoJqbzNtkNpAX/projectcss
import plasmic_avatar_css from "../avatar/plasmic.module.css"; // plasmic-import: wjwfXMtbnYisAPU4bK5cC5/projectcss
import plasmic_button_css from "../button/plasmic.module.css"; // plasmic-import: 4JFyEcvXaxQ6TZ3SJQYzp6/projectcss
import plasmic_input_css from "../input/plasmic.module.css"; // plasmic-import: teUZ7d8BEHskoXuvEf1pBj/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_icon_css from "../icon/plasmic.module.css"; // plasmic-import: nVTL6BvP7Knk1RSNkBbJCm/projectcss
import plasmic_menu_item_css from "../menu_item/plasmic.module.css"; // plasmic-import: 2ejMdvJDoJWjwd6DCNSCHJ/projectcss
import plasmic_image_css from "../image/plasmic.module.css"; // plasmic-import: d4FLWyib3U2TEbmJ38D5i3/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
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
import projectcss from "./plasmic.module.css"; // plasmic-import: 6eqm1KNiFrAWEs21Xh4t1D/projectcss
import sty from "./PlasmicListGroup.module.css"; // plasmic-import: VSN3Z5Qj3Ryg/css

import FaBarssvgIcon from "../list_item/icons/PlasmicIcon__FaBarssvg"; // plasmic-import: nkTA0SEj1EAz/icon

createPlasmicElementProxy;

export type PlasmicListGroup__VariantMembers = {
  size: "sm" | "md" | "lg";
  removalOfItems:
    | "_1"
    | "_2"
    | "_3"
    | "_4"
    | "_5"
    | "_6"
    | "_7"
    | "_8"
    | "_9"
    | "_10"
    | "_11"
    | "_12";
  columns: "_1" | "_2" | "_3" | "_4" | "_6";
  layout: "unnamedVariant";
};
export type PlasmicListGroup__VariantsArgs = {
  size?: SingleChoiceArg<"sm" | "md" | "lg">;
  removalOfItems?: MultiChoiceArg<
    | "_1"
    | "_2"
    | "_3"
    | "_4"
    | "_5"
    | "_6"
    | "_7"
    | "_8"
    | "_9"
    | "_10"
    | "_11"
    | "_12"
  >;
  columns?: SingleChoiceArg<"_1" | "_2" | "_3" | "_4" | "_6">;
  layout?: SingleChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicListGroup__VariantsArgs;
export const PlasmicListGroup__VariantProps = new Array<VariantPropType>(
  "size",
  "removalOfItems",
  "columns",
  "layout"
);

export type PlasmicListGroup__ArgsType = {
  listItemSlot1?: React.ReactNode;
  listItemSlot2?: React.ReactNode;
  listItemSlot3?: React.ReactNode;
  listItemSlot4?: React.ReactNode;
  listItemSlot5?: React.ReactNode;
  listItemSlot6?: React.ReactNode;
  listItemSlot7?: React.ReactNode;
  listItemSlot8?: React.ReactNode;
  listItemSlot9?: React.ReactNode;
  listItemSlot10?: React.ReactNode;
  listItemSlot11?: React.ReactNode;
  listItemSlot12?: React.ReactNode;
};
type ArgPropType = keyof PlasmicListGroup__ArgsType;
export const PlasmicListGroup__ArgProps = new Array<ArgPropType>(
  "listItemSlot1",
  "listItemSlot2",
  "listItemSlot3",
  "listItemSlot4",
  "listItemSlot5",
  "listItemSlot6",
  "listItemSlot7",
  "listItemSlot8",
  "listItemSlot9",
  "listItemSlot10",
  "listItemSlot11",
  "listItemSlot12"
);

export type PlasmicListGroup__OverridesType = {
  listGroupBase?: Flex__<"div">;
  listGroupGrid?: Flex__<"div">;
  listItemStack1?: Flex__<"div">;
  listItemStack2?: Flex__<"div">;
  listItemStack3?: Flex__<"div">;
  listItemStack4?: Flex__<"div">;
  listItemStack5?: Flex__<"div">;
  listItemStack6?: Flex__<"div">;
  listItemStack7?: Flex__<"div">;
  listItemStack8?: Flex__<"div">;
  listItemStack9?: Flex__<"div">;
  listItemStack10?: Flex__<"div">;
  listItemStack11?: Flex__<"div">;
  listItemStack12?: Flex__<"div">;
};

export interface DefaultListGroupProps {
  listItemSlot1?: React.ReactNode;
  listItemSlot2?: React.ReactNode;
  listItemSlot3?: React.ReactNode;
  listItemSlot4?: React.ReactNode;
  listItemSlot5?: React.ReactNode;
  listItemSlot6?: React.ReactNode;
  listItemSlot7?: React.ReactNode;
  listItemSlot8?: React.ReactNode;
  listItemSlot9?: React.ReactNode;
  listItemSlot10?: React.ReactNode;
  listItemSlot11?: React.ReactNode;
  listItemSlot12?: React.ReactNode;
  size?: SingleChoiceArg<"sm" | "md" | "lg">;
  removalOfItems?: MultiChoiceArg<
    | "_1"
    | "_2"
    | "_3"
    | "_4"
    | "_5"
    | "_6"
    | "_7"
    | "_8"
    | "_9"
    | "_10"
    | "_11"
    | "_12"
  >;
  columns?: SingleChoiceArg<"_1" | "_2" | "_3" | "_4" | "_6">;
  layout?: SingleChoiceArg<"unnamedVariant">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicListGroup__RenderFunc(props: {
  variants: PlasmicListGroup__VariantsArgs;
  args: PlasmicListGroup__ArgsType;
  overrides: PlasmicListGroup__OverridesType;
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
        path: "removalOfItems",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.removalOfItems
      },
      {
        path: "columns",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.columns
      },
      {
        path: "layout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.layout
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"listGroupBase"}
      data-plasmic-override={overrides.listGroupBase}
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
        plasmic_switch_css.plasmic_tokens,
        plasmic_badge_css.plasmic_tokens,
        plasmic_avatar_css.plasmic_tokens,
        plasmic_button_css.plasmic_tokens,
        plasmic_input_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_icon_css.plasmic_tokens,
        plasmic_menu_item_css.plasmic_tokens,
        plasmic_image_css.plasmic_tokens,
        plasmic_typography_css.plasmic_tokens,
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
        sty.listGroupBase,
        {
          [sty.listGroupBasecolumns__2]: hasVariant($state, "columns", "_2"),
          [sty.listGroupBaselayout_unnamedVariant]: hasVariant(
            $state,
            "layout",
            "unnamedVariant"
          ),
          [sty.listGroupBasesize_lg]: hasVariant($state, "size", "lg"),
          [sty.listGroupBasesize_sm]: hasVariant($state, "size", "sm")
        }
      )}
    >
      <div
        data-plasmic-name={"listGroupGrid"}
        data-plasmic-override={overrides.listGroupGrid}
        className={classNames(projectcss.all, sty.listGroupGrid, {
          [sty.listGroupGridcolumns__2]: hasVariant($state, "columns", "_2"),
          [sty.listGroupGridcolumns__3]: hasVariant($state, "columns", "_3"),
          [sty.listGroupGridcolumns__4]: hasVariant($state, "columns", "_4"),
          [sty.listGroupGridcolumns__6]: hasVariant($state, "columns", "_6"),
          [sty.listGroupGridlayout_unnamedVariant]: hasVariant(
            $state,
            "layout",
            "unnamedVariant"
          ),
          [sty.listGroupGridsize_lg]: hasVariant($state, "size", "lg"),
          [sty.listGroupGridsize_sm]: hasVariant($state, "size", "sm")
        })}
      >
        <div
          data-plasmic-name={"listItemStack1"}
          data-plasmic-override={overrides.listItemStack1}
          className={classNames(projectcss.all, sty.listItemStack1, {
            [sty.listItemStack1columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack1columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack1columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack1columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack1layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack1removalOfItems__1]: hasVariant(
              $state,
              "removalOfItems",
              "_1"
            ),
            [sty.listItemStack1size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack1size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__siiqr)}
                listContentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zhvZ
                    )}
                  >
                    {"This dew like life fades away"}
                  </div>
                }
              />
            ),

            value: args.listItemSlot1
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack2"}
          data-plasmic-override={overrides.listItemStack2}
          className={classNames(projectcss.all, sty.listItemStack2, {
            [sty.listItemStack2columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack2columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack2columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack2columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack2layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack2removalOfItems__2]: hasVariant(
              $state,
              "removalOfItems",
              "_2"
            ),
            [sty.listItemStack2size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack2size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__ew3YK)}
                listContentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uuRPe
                    )}
                  >
                    {"Time speeds swiftly"}
                  </div>
                }
              />
            ),

            value: args.listItemSlot2
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack3"}
          data-plasmic-override={overrides.listItemStack3}
          className={classNames(projectcss.all, sty.listItemStack3, {
            [sty.listItemStack3columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack3columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack3columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack3columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack3layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack3removalOfItems__3]: hasVariant(
              $state,
              "removalOfItems",
              "_3"
            ),
            [sty.listItemStack3size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack3size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__mSuMl)}
                listContentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v4UZ
                    )}
                  >
                    {"In this short life of ours"}
                  </div>
                }
              />
            ),

            value: args.listItemSlot3
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack4"}
          data-plasmic-override={overrides.listItemStack4}
          className={classNames(projectcss.all, sty.listItemStack4, {
            [sty.listItemStack4columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack4columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack4columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack4columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack4layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack4removalOfItems__4]: hasVariant(
              $state,
              "removalOfItems",
              "_4"
            ),
            [sty.listItemStack4size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack4size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__mA46Q)}
                listContentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dkJtt
                    )}
                  >
                    {"Avoid involvement in superfluous things"}
                  </div>
                }
              />
            ),

            value: args.listItemSlot4
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack5"}
          data-plasmic-override={overrides.listItemStack5}
          className={classNames(projectcss.all, sty.listItemStack5, {
            [sty.listItemStack5columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack5columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack5columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack5columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack5layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack5removalOfItems__5]: hasVariant(
              $state,
              "removalOfItems",
              "_5"
            ),
            [sty.listItemStack5size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack5size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem___76RHm)}
                listContentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ervDe
                    )}
                  >
                    {"Product Feature"}
                  </div>
                }
              />
            ),

            value: args.listItemSlot5
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack6"}
          data-plasmic-override={overrides.listItemStack6}
          className={classNames(projectcss.all, sty.listItemStack6, {
            [sty.listItemStack6columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack6columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack6columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack6columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack6layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack6removalOfItems__6]: hasVariant(
              $state,
              "removalOfItems",
              "_6"
            ),
            [sty.listItemStack6size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack6size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__uB1D)}
                listContentSlot={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t3ZlQ
                    )}
                  >
                    {"And just study the Way"}
                  </div>
                }
              />
            ),

            value: args.listItemSlot6
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack7"}
          data-plasmic-override={overrides.listItemStack7}
          className={classNames(projectcss.all, sty.listItemStack7, {
            [sty.listItemStack7columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack7columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack7columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack7columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack7layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack7removalOfItems__7]: hasVariant(
              $state,
              "removalOfItems",
              "_7"
            ),
            [sty.listItemStack7size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack7size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__eVeWh)}
              />
            ),

            value: args.listItemSlot7
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack8"}
          data-plasmic-override={overrides.listItemStack8}
          className={classNames(projectcss.all, sty.listItemStack8, {
            [sty.listItemStack8columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack8columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack8columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack8columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack8layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack8removalOfItems__8]: hasVariant(
              $state,
              "removalOfItems",
              "_8"
            ),
            [sty.listItemStack8size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack8size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem___1ZNtz)}
              />
            ),

            value: args.listItemSlot8
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack9"}
          data-plasmic-override={overrides.listItemStack9}
          className={classNames(projectcss.all, sty.listItemStack9, {
            [sty.listItemStack9columns__2]: hasVariant($state, "columns", "_2"),
            [sty.listItemStack9columns__3]: hasVariant($state, "columns", "_3"),
            [sty.listItemStack9columns__4]: hasVariant($state, "columns", "_4"),
            [sty.listItemStack9columns__6]: hasVariant($state, "columns", "_6"),
            [sty.listItemStack9layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack9removalOfItems__9]: hasVariant(
              $state,
              "removalOfItems",
              "_9"
            ),
            [sty.listItemStack9size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack9size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__dDuys)}
              />
            ),

            value: args.listItemSlot9
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack10"}
          data-plasmic-override={overrides.listItemStack10}
          className={classNames(projectcss.all, sty.listItemStack10, {
            [sty.listItemStack10columns__2]: hasVariant(
              $state,
              "columns",
              "_2"
            ),
            [sty.listItemStack10columns__3]: hasVariant(
              $state,
              "columns",
              "_3"
            ),
            [sty.listItemStack10columns__4]: hasVariant(
              $state,
              "columns",
              "_4"
            ),
            [sty.listItemStack10columns__6]: hasVariant(
              $state,
              "columns",
              "_6"
            ),
            [sty.listItemStack10layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack10removalOfItems__10]: hasVariant(
              $state,
              "removalOfItems",
              "_10"
            ),
            [sty.listItemStack10size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack10size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__jrQLz)}
              />
            ),

            value: args.listItemSlot10
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack11"}
          data-plasmic-override={overrides.listItemStack11}
          className={classNames(projectcss.all, sty.listItemStack11, {
            [sty.listItemStack11columns__2]: hasVariant(
              $state,
              "columns",
              "_2"
            ),
            [sty.listItemStack11columns__3]: hasVariant(
              $state,
              "columns",
              "_3"
            ),
            [sty.listItemStack11columns__4]: hasVariant(
              $state,
              "columns",
              "_4"
            ),
            [sty.listItemStack11columns__6]: hasVariant(
              $state,
              "columns",
              "_6"
            ),
            [sty.listItemStack11layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack11removalOfItems__11]: hasVariant(
              $state,
              "removalOfItems",
              "_11"
            ),
            [sty.listItemStack11size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack11size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__uIcgr)}
              />
            ),

            value: args.listItemSlot11
          })}
        </div>
        <div
          data-plasmic-name={"listItemStack12"}
          data-plasmic-override={overrides.listItemStack12}
          className={classNames(projectcss.all, sty.listItemStack12, {
            [sty.listItemStack12columns__2]: hasVariant(
              $state,
              "columns",
              "_2"
            ),
            [sty.listItemStack12columns__3]: hasVariant(
              $state,
              "columns",
              "_3"
            ),
            [sty.listItemStack12columns__4]: hasVariant(
              $state,
              "columns",
              "_4"
            ),
            [sty.listItemStack12columns__6]: hasVariant(
              $state,
              "columns",
              "_6"
            ),
            [sty.listItemStack12layout_unnamedVariant]: hasVariant(
              $state,
              "layout",
              "unnamedVariant"
            ),
            [sty.listItemStack12removalOfItems__12]: hasVariant(
              $state,
              "removalOfItems",
              "_12"
            ),
            [sty.listItemStack12size_lg]: hasVariant($state, "size", "lg"),
            [sty.listItemStack12size_sm]: hasVariant($state, "size", "sm")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ListItem
                className={classNames("__wab_instance", sty.listItem__tWoli)}
              />
            ),

            value: args.listItemSlot12
          })}
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  listGroupBase: [
    "listGroupBase",
    "listGroupGrid",
    "listItemStack1",
    "listItemStack2",
    "listItemStack3",
    "listItemStack4",
    "listItemStack5",
    "listItemStack6",
    "listItemStack7",
    "listItemStack8",
    "listItemStack9",
    "listItemStack10",
    "listItemStack11",
    "listItemStack12"
  ],
  listGroupGrid: [
    "listGroupGrid",
    "listItemStack1",
    "listItemStack2",
    "listItemStack3",
    "listItemStack4",
    "listItemStack5",
    "listItemStack6",
    "listItemStack7",
    "listItemStack8",
    "listItemStack9",
    "listItemStack10",
    "listItemStack11",
    "listItemStack12"
  ],
  listItemStack1: ["listItemStack1"],
  listItemStack2: ["listItemStack2"],
  listItemStack3: ["listItemStack3"],
  listItemStack4: ["listItemStack4"],
  listItemStack5: ["listItemStack5"],
  listItemStack6: ["listItemStack6"],
  listItemStack7: ["listItemStack7"],
  listItemStack8: ["listItemStack8"],
  listItemStack9: ["listItemStack9"],
  listItemStack10: ["listItemStack10"],
  listItemStack11: ["listItemStack11"],
  listItemStack12: ["listItemStack12"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  listGroupBase: "div";
  listGroupGrid: "div";
  listItemStack1: "div";
  listItemStack2: "div";
  listItemStack3: "div";
  listItemStack4: "div";
  listItemStack5: "div";
  listItemStack6: "div";
  listItemStack7: "div";
  listItemStack8: "div";
  listItemStack9: "div";
  listItemStack10: "div";
  listItemStack11: "div";
  listItemStack12: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListGroup__VariantsArgs;
    args?: PlasmicListGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicListGroup__ArgsType,
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
          internalArgPropNames: PlasmicListGroup__ArgProps,
          internalVariantPropNames: PlasmicListGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicListGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "listGroupBase") {
    func.displayName = "PlasmicListGroup";
  } else {
    func.displayName = `PlasmicListGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicListGroup = Object.assign(
  // Top-level PlasmicListGroup renders the root element
  makeNodeComponent("listGroupBase"),
  {
    // Helper components rendering sub-elements
    listGroupGrid: makeNodeComponent("listGroupGrid"),
    listItemStack1: makeNodeComponent("listItemStack1"),
    listItemStack2: makeNodeComponent("listItemStack2"),
    listItemStack3: makeNodeComponent("listItemStack3"),
    listItemStack4: makeNodeComponent("listItemStack4"),
    listItemStack5: makeNodeComponent("listItemStack5"),
    listItemStack6: makeNodeComponent("listItemStack6"),
    listItemStack7: makeNodeComponent("listItemStack7"),
    listItemStack8: makeNodeComponent("listItemStack8"),
    listItemStack9: makeNodeComponent("listItemStack9"),
    listItemStack10: makeNodeComponent("listItemStack10"),
    listItemStack11: makeNodeComponent("listItemStack11"),
    listItemStack12: makeNodeComponent("listItemStack12"),

    // Metadata about props expected for PlasmicListGroup
    internalVariantProps: PlasmicListGroup__VariantProps,
    internalArgProps: PlasmicListGroup__ArgProps
  }
);

export default PlasmicListGroup;
/* prettier-ignore-end */
