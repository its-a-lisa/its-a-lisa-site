// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: Z-CrKblPINiy

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

import CompSwitch from "../../CompSwitch"; // plasmic-import: 08tV0C4XRgYQ/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 0mo4e2K7LvGd/globalVariant
import { useScreenVariants as useScreenVariantsniKtHGeB1Opg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NIKtHGeB1opg/globalVariant
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
import sty from "./PlasmicLayoutFooter.module.css"; // plasmic-import: Z-CrKblPINiy/css

import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: 7HuHl2O-klQp/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: 0R2qJtpePk1T/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: 6FuUhrFEU7RO/icon

createPlasmicElementProxy;

export type PlasmicLayoutFooter__VariantMembers = {};
export type PlasmicLayoutFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayoutFooter__VariantsArgs;
export const PlasmicLayoutFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicLayoutFooter__ArgsType = {};
type ArgPropType = keyof PlasmicLayoutFooter__ArgsType;
export const PlasmicLayoutFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicLayoutFooter__OverridesType = {
  footer?: Flex__<"div">;
  creditStack?: Flex__<"div">;
  themeSwitch?: Flex__<typeof CompSwitch>;
  contactStack?: Flex__<"div">;
  followStack?: Flex__<"div">;
  callStack?: Flex__<"div">;
  writeStack?: Flex__<"div">;
};

export interface DefaultLayoutFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayoutFooter__RenderFunc(props: {
  variants: PlasmicLayoutFooter__VariantsArgs;
  args: PlasmicLayoutFooter__ArgsType;
  overrides: PlasmicLayoutFooter__OverridesType;
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
        path: "themeSwitch.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.setDark;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
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
    screen: useScreenVariantsniKtHGeB1Opg(),
    mode: useMode(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
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
        sty.footer,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [sty.footerglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__wYpH)}>
        <div
          data-plasmic-name={"creditStack"}
          data-plasmic-override={overrides.creditStack}
          className={classNames(projectcss.all, sty.creditStack)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__evMLe)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2THDr
              )}
            >
              {"@2024 by Alyssa Feola"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fQxVz
              )}
            >
              {"Powered by Plasmic design by Wix"}
            </div>
          </div>
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.themeSwitch, {
                [sty.themeSwitchglobal_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              }),
              isChecked:
                generateStateValueProp($state, ["themeSwitch", "isChecked"]) ??
                false,
              onChange: (...eventArgs) => {
                generateStateOnChangeProp($state, ["themeSwitch", "isChecked"])(
                  eventArgs[0]
                );
              }
            };

            initializePlasmicStates(
              $state,
              [
                {
                  name: "themeSwitch.isChecked",
                  initFunc: ({ $props, $state, $queries }) =>
                    (() => {
                      try {
                        return $ctx.setDark;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                }
              ],
              []
            );
            return (
              <CompSwitch
                data-plasmic-name={"themeSwitch"}
                data-plasmic-override={overrides.themeSwitch}
                {...child$Props}
              >
                {"Theme"}
              </CompSwitch>
            );
          })()}
        </div>
        <div
          data-plasmic-name={"contactStack"}
          data-plasmic-override={overrides.contactStack}
          className={classNames(projectcss.all, sty.contactStack)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"followStack"}
            data-plasmic-override={overrides.followStack}
            hasGap={true}
            className={classNames(projectcss.all, sty.followStack)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3KkLx
              )}
            >
              {"Meet"}
            </div>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xnNk9
                )}
              >
                {"Calendar link coming soon!"}
              </div>
            ) : null}
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"callStack"}
            data-plasmic-override={overrides.callStack}
            hasGap={true}
            className={classNames(projectcss.all, sty.callStack)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xzof
              )}
            >
              {"Write"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fvMqk)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uJ0Ik
                )}
              >
                {"alyssa@its-a-lisa.com"}
              </div>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"writeStack"}
            data-plasmic-override={overrides.writeStack}
            hasGap={true}
            className={classNames(projectcss.all, sty.writeStack)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eMlZc
              )}
            >
              {"Follow"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cdsbW)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___8Xj8W
                )}
                component={Link}
                href={"https://twitter.com/its_a_lisa"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <Icon21Icon
                  className={classNames(projectcss.all, sty.svg__xVv2)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___5QrJx
                )}
                component={Link}
                href={"https://github.com/its-a-lisa"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <Icon22Icon
                  className={classNames(projectcss.all, sty.svg__yxOfo)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__e0MGn
                )}
                component={Link}
                href={"https://www.linkedin.com/in/alyssa-feola/"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <Icon23Icon
                  className={classNames(projectcss.all, sty.svg__nzVqm)}
                  role={"img"}
                />
              </PlasmicLink__>
            </Stack__>
          </Stack__>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer: [
    "footer",
    "creditStack",
    "themeSwitch",
    "contactStack",
    "followStack",
    "callStack",
    "writeStack"
  ],
  creditStack: ["creditStack", "themeSwitch"],
  themeSwitch: ["themeSwitch"],
  contactStack: ["contactStack", "followStack", "callStack", "writeStack"],
  followStack: ["followStack"],
  callStack: ["callStack"],
  writeStack: ["writeStack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footer: "div";
  creditStack: "div";
  themeSwitch: typeof CompSwitch;
  contactStack: "div";
  followStack: "div";
  callStack: "div";
  writeStack: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayoutFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayoutFooter__VariantsArgs;
    args?: PlasmicLayoutFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayoutFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayoutFooter__ArgsType,
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
          internalArgPropNames: PlasmicLayoutFooter__ArgProps,
          internalVariantPropNames: PlasmicLayoutFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayoutFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicLayoutFooter";
  } else {
    func.displayName = `PlasmicLayoutFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicLayoutFooter = Object.assign(
  // Top-level PlasmicLayoutFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    creditStack: makeNodeComponent("creditStack"),
    themeSwitch: makeNodeComponent("themeSwitch"),
    contactStack: makeNodeComponent("contactStack"),
    followStack: makeNodeComponent("followStack"),
    callStack: makeNodeComponent("callStack"),
    writeStack: makeNodeComponent("writeStack"),

    // Metadata about props expected for PlasmicLayoutFooter
    internalVariantProps: PlasmicLayoutFooter__VariantProps,
    internalArgProps: PlasmicLayoutFooter__ArgProps
  }
);

export default PlasmicLayoutFooter;
/* prettier-ignore-end */