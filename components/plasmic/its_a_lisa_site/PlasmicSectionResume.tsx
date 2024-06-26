// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tt6TsnGtggzVZCRW2FQ8Vk
// Component: sEa7wbl9tcjK

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
import sty from "./PlasmicSectionResume.module.css"; // plasmic-import: sEa7wbl9tcjK/css

import FaCircleDotRegularsvgIcon from "../theme/icons/PlasmicIcon__FaCircleDotRegularsvg"; // plasmic-import: qc8FtSKWnS6y/icon

createPlasmicElementProxy;

export type PlasmicSectionResume__VariantMembers = {};
export type PlasmicSectionResume__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionResume__VariantsArgs;
export const PlasmicSectionResume__VariantProps = new Array<VariantPropType>();

export type PlasmicSectionResume__ArgsType = {};
type ArgPropType = keyof PlasmicSectionResume__ArgsType;
export const PlasmicSectionResume__ArgProps = new Array<ArgPropType>();

export type PlasmicSectionResume__OverridesType = {
  resume?: Flex__<"div">;
  header?: Flex__<"div">;
  name?: Flex__<"h1">;
  contactInfo?: Flex__<"div">;
  website?: Flex__<"div">;
  email?: Flex__<"div">;
  phone?: Flex__<"div">;
  featureExperience?: Flex__<"div">;
  featureItem?: Flex__<"div">;
  svg?: Flex__<"svg">;
  experience?: Flex__<"div">;
  featurePosition?: Flex__<"div">;
  position?: Flex__<"div">;
  heading?: Flex__<"div">;
  title?: Flex__<"div">;
  separator?: Flex__<"div">;
  timeline?: Flex__<"div">;
  body?: Flex__<"div">;
  organization?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  education?: Flex__<"div">;
  degree?: Flex__<"div">;
  university?: Flex__<"div">;
  universityName?: Flex__<"div">;
  universityCityState?: Flex__<"div">;
  degreeInfo?: Flex__<"div">;
  degreeType?: Flex__<"div">;
  dateDegreeRecieved?: Flex__<"div">;
  studyInfo?: Flex__<"div">;
  majorLabel?: Flex__<"div">;
  majorValue?: Flex__<"div">;
  minorLabel?: Flex__<"div">;
  minorValue?: Flex__<"div">;
};

export interface DefaultSectionResumeProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionResume__RenderFunc(props: {
  variants: PlasmicSectionResume__VariantsArgs;
  args: PlasmicSectionResume__ArgsType;
  overrides: PlasmicSectionResume__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    mode: useMode(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <div
      data-plasmic-name={"resume"}
      data-plasmic-override={overrides.resume}
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
        sty.resume,
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
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames(projectcss.all, sty.header)}
      >
        <h1
          data-plasmic-name={"name"}
          data-plasmic-override={overrides.name}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.name
          )}
        >
          {"Alyssa Feola"}
        </h1>
        <Stack__
          as={"div"}
          data-plasmic-name={"contactInfo"}
          data-plasmic-override={overrides.contactInfo}
          hasGap={true}
          className={classNames(projectcss.all, sty.contactInfo)}
        >
          <div
            data-plasmic-name={"website"}
            data-plasmic-override={overrides.website}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.website
            )}
          >
            {"its-a-lisa.com"}
          </div>
          <div
            data-plasmic-name={"email"}
            data-plasmic-override={overrides.email}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.email
            )}
          >
            {"ms.alyssafeola@gmail.com"}
          </div>
          <div
            data-plasmic-name={"phone"}
            data-plasmic-override={overrides.phone}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.phone
            )}
          >
            {"617-777-7739"}
          </div>
        </Stack__>
      </div>
      <div
        data-plasmic-name={"featureExperience"}
        data-plasmic-override={overrides.featureExperience}
        className={classNames(projectcss.all, sty.featureExperience)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
          2, 3, 4
        ]).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <Stack__
              as={"div"}
              data-plasmic-name={"featureItem"}
              data-plasmic-override={overrides.featureItem}
              hasGap={true}
              className={classNames(projectcss.all, sty.featureItem)}
              key={currentIndex}
            >
              <FaCircleDotRegularsvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nEtdh
                )}
              >
                {
                  "15 years' experience in information seucrity, program management and enterprise information technology in highly regulated environments in multiple levels and roles."
                }
              </div>
            </Stack__>
          );
        })}
      </div>
      <div
        data-plasmic-name={"experience"}
        data-plasmic-override={overrides.experience}
        className={classNames(projectcss.all, sty.experience)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
          2, 3, 4
        ]).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <Stack__
              as={"div"}
              data-plasmic-name={"featurePosition"}
              data-plasmic-override={overrides.featurePosition}
              hasGap={true}
              className={classNames(projectcss.all, sty.featurePosition)}
              key={currentIndex}
            >
              <div
                data-plasmic-name={"position"}
                data-plasmic-override={overrides.position}
                className={classNames(projectcss.all, sty.position)}
              >
                <div
                  data-plasmic-name={"heading"}
                  data-plasmic-override={overrides.heading}
                  className={classNames(projectcss.all, sty.heading)}
                >
                  <div
                    data-plasmic-name={"title"}
                    data-plasmic-override={overrides.title}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.title
                    )}
                  >
                    {"Enter some text"}
                  </div>
                  <div
                    data-plasmic-name={"separator"}
                    data-plasmic-override={overrides.separator}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.separator
                    )}
                  >
                    {" - "}
                  </div>
                  <div
                    data-plasmic-name={"timeline"}
                    data-plasmic-override={overrides.timeline}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.timeline
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"body"}
                  data-plasmic-override={overrides.body}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.body
                  )}
                >
                  {"Enter some text"}
                </div>
              </div>
              <Stack__
                as={"div"}
                data-plasmic-name={"organization"}
                data-plasmic-override={overrides.organization}
                hasGap={true}
                className={classNames(projectcss.all, sty.organization)}
              >
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kJ4El
                  )}
                >
                  {"Enter some text"}
                </div>
              </Stack__>
            </Stack__>
          );
        })}
      </div>
      <div
        data-plasmic-name={"education"}
        data-plasmic-override={overrides.education}
        className={classNames(projectcss.all, sty.education)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
          2, 3, 4
        ]).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <div
              data-plasmic-name={"degree"}
              data-plasmic-override={overrides.degree}
              className={classNames(projectcss.all, sty.degree)}
              key={currentIndex}
            >
              <div
                data-plasmic-name={"university"}
                data-plasmic-override={overrides.university}
                className={classNames(projectcss.all, sty.university)}
              >
                <div
                  data-plasmic-name={"universityName"}
                  data-plasmic-override={overrides.universityName}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.universityName
                  )}
                >
                  {"Enter some text"}
                </div>
                <div
                  data-plasmic-name={"universityCityState"}
                  data-plasmic-override={overrides.universityCityState}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.universityCityState
                  )}
                >
                  {"Enter some text"}
                </div>
              </div>
              <div
                data-plasmic-name={"degreeInfo"}
                data-plasmic-override={overrides.degreeInfo}
                className={classNames(projectcss.all, sty.degreeInfo)}
              >
                <div
                  data-plasmic-name={"degreeType"}
                  data-plasmic-override={overrides.degreeType}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.degreeType
                  )}
                >
                  {"Enter some text"}
                </div>
                <div
                  data-plasmic-name={"dateDegreeRecieved"}
                  data-plasmic-override={overrides.dateDegreeRecieved}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.dateDegreeRecieved
                  )}
                >
                  {"Enter some text"}
                </div>
              </div>
              <div
                data-plasmic-name={"studyInfo"}
                data-plasmic-override={overrides.studyInfo}
                className={classNames(projectcss.all, sty.studyInfo)}
              >
                <div
                  data-plasmic-name={"majorLabel"}
                  data-plasmic-override={overrides.majorLabel}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.majorLabel
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Major:"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  data-plasmic-name={"majorValue"}
                  data-plasmic-override={overrides.majorValue}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.majorValue
                  )}
                >
                  {"Enter some text"}
                </div>
                <div
                  data-plasmic-name={"minorLabel"}
                  data-plasmic-override={overrides.minorLabel}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.minorLabel
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Minor:"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  data-plasmic-name={"minorValue"}
                  data-plasmic-override={overrides.minorValue}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.minorValue
                  )}
                >
                  {"Enter some text"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  resume: [
    "resume",
    "header",
    "name",
    "contactInfo",
    "website",
    "email",
    "phone",
    "featureExperience",
    "featureItem",
    "svg",
    "experience",
    "featurePosition",
    "position",
    "heading",
    "title",
    "separator",
    "timeline",
    "body",
    "organization",
    "img",
    "education",
    "degree",
    "university",
    "universityName",
    "universityCityState",
    "degreeInfo",
    "degreeType",
    "dateDegreeRecieved",
    "studyInfo",
    "majorLabel",
    "majorValue",
    "minorLabel",
    "minorValue"
  ],
  header: ["header", "name", "contactInfo", "website", "email", "phone"],
  name: ["name"],
  contactInfo: ["contactInfo", "website", "email", "phone"],
  website: ["website"],
  email: ["email"],
  phone: ["phone"],
  featureExperience: ["featureExperience", "featureItem", "svg"],
  featureItem: ["featureItem", "svg"],
  svg: ["svg"],
  experience: [
    "experience",
    "featurePosition",
    "position",
    "heading",
    "title",
    "separator",
    "timeline",
    "body",
    "organization",
    "img"
  ],
  featurePosition: [
    "featurePosition",
    "position",
    "heading",
    "title",
    "separator",
    "timeline",
    "body",
    "organization",
    "img"
  ],
  position: ["position", "heading", "title", "separator", "timeline", "body"],
  heading: ["heading", "title", "separator", "timeline"],
  title: ["title"],
  separator: ["separator"],
  timeline: ["timeline"],
  body: ["body"],
  organization: ["organization", "img"],
  img: ["img"],
  education: [
    "education",
    "degree",
    "university",
    "universityName",
    "universityCityState",
    "degreeInfo",
    "degreeType",
    "dateDegreeRecieved",
    "studyInfo",
    "majorLabel",
    "majorValue",
    "minorLabel",
    "minorValue"
  ],
  degree: [
    "degree",
    "university",
    "universityName",
    "universityCityState",
    "degreeInfo",
    "degreeType",
    "dateDegreeRecieved",
    "studyInfo",
    "majorLabel",
    "majorValue",
    "minorLabel",
    "minorValue"
  ],
  university: ["university", "universityName", "universityCityState"],
  universityName: ["universityName"],
  universityCityState: ["universityCityState"],
  degreeInfo: ["degreeInfo", "degreeType", "dateDegreeRecieved"],
  degreeType: ["degreeType"],
  dateDegreeRecieved: ["dateDegreeRecieved"],
  studyInfo: [
    "studyInfo",
    "majorLabel",
    "majorValue",
    "minorLabel",
    "minorValue"
  ],
  majorLabel: ["majorLabel"],
  majorValue: ["majorValue"],
  minorLabel: ["minorLabel"],
  minorValue: ["minorValue"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  resume: "div";
  header: "div";
  name: "h1";
  contactInfo: "div";
  website: "div";
  email: "div";
  phone: "div";
  featureExperience: "div";
  featureItem: "div";
  svg: "svg";
  experience: "div";
  featurePosition: "div";
  position: "div";
  heading: "div";
  title: "div";
  separator: "div";
  timeline: "div";
  body: "div";
  organization: "div";
  img: typeof PlasmicImg__;
  education: "div";
  degree: "div";
  university: "div";
  universityName: "div";
  universityCityState: "div";
  degreeInfo: "div";
  degreeType: "div";
  dateDegreeRecieved: "div";
  studyInfo: "div";
  majorLabel: "div";
  majorValue: "div";
  minorLabel: "div";
  minorValue: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionResume__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionResume__VariantsArgs;
    args?: PlasmicSectionResume__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionResume__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSectionResume__ArgsType,
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
          internalArgPropNames: PlasmicSectionResume__ArgProps,
          internalVariantPropNames: PlasmicSectionResume__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionResume__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "resume") {
    func.displayName = "PlasmicSectionResume";
  } else {
    func.displayName = `PlasmicSectionResume.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionResume = Object.assign(
  // Top-level PlasmicSectionResume renders the root element
  makeNodeComponent("resume"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    _name: makeNodeComponent("name"),
    contactInfo: makeNodeComponent("contactInfo"),
    website: makeNodeComponent("website"),
    email: makeNodeComponent("email"),
    phone: makeNodeComponent("phone"),
    featureExperience: makeNodeComponent("featureExperience"),
    featureItem: makeNodeComponent("featureItem"),
    svg: makeNodeComponent("svg"),
    experience: makeNodeComponent("experience"),
    featurePosition: makeNodeComponent("featurePosition"),
    position: makeNodeComponent("position"),
    heading: makeNodeComponent("heading"),
    title: makeNodeComponent("title"),
    separator: makeNodeComponent("separator"),
    timeline: makeNodeComponent("timeline"),
    body: makeNodeComponent("body"),
    organization: makeNodeComponent("organization"),
    img: makeNodeComponent("img"),
    education: makeNodeComponent("education"),
    degree: makeNodeComponent("degree"),
    university: makeNodeComponent("university"),
    universityName: makeNodeComponent("universityName"),
    universityCityState: makeNodeComponent("universityCityState"),
    degreeInfo: makeNodeComponent("degreeInfo"),
    degreeType: makeNodeComponent("degreeType"),
    dateDegreeRecieved: makeNodeComponent("dateDegreeRecieved"),
    studyInfo: makeNodeComponent("studyInfo"),
    majorLabel: makeNodeComponent("majorLabel"),
    majorValue: makeNodeComponent("majorValue"),
    minorLabel: makeNodeComponent("minorLabel"),
    minorValue: makeNodeComponent("minorValue"),

    // Metadata about props expected for PlasmicSectionResume
    internalVariantProps: PlasmicSectionResume__VariantProps,
    internalArgProps: PlasmicSectionResume__ArgProps
  }
);

export default PlasmicSectionResume;
/* prettier-ignore-end */
