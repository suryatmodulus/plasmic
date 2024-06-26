// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uLddf5fC1aQbF7tmV1WQ1a
// Component: GzEy-XDJM8
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import Select__Option from "../../components/widgets/Select__Option"; // plasmic-import: rr-LWdMni2G/component
import Select__OptionGroup from "../../components/widgets/Select__OptionGroup"; // plasmic-import: _qMm1mtrqOi/component
import RichTextToolbarDivider from "../../components/canvas/RichText/RichTextToolbarDivider"; // plasmic-import: kVTvUj4Wyf/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import ActionMenuButton from "../../components/widgets/ActionMenuButton"; // plasmic-import: VNi6NC2QOI/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_rich_text_toolbar.module.css"; // plasmic-import: uLddf5fC1aQbF7tmV1WQ1a/projectcss
import sty from "./PlasmicRichTextToolbar.module.css"; // plasmic-import: GzEy-XDJM8/css

import TextsvgIcon from "../q_4_icons/icons/PlasmicIcon__Textsvg"; // plasmic-import: e3P4cMPJR/icon
import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import BoldsvgIcon from "../q_4_icons/icons/PlasmicIcon__Boldsvg"; // plasmic-import: OiX2-qUyR/icon
import ItalicsvgIcon from "../q_4_icons/icons/PlasmicIcon__Italicsvg"; // plasmic-import: taSQD6Nog/icon
import UnderlinesvgIcon from "../q_4_icons/icons/PlasmicIcon__Underlinesvg"; // plasmic-import: LSpOu6_w3/icon
import LinksvgIcon from "../q_4_icons/icons/PlasmicIcon__Linksvg"; // plasmic-import: cu6SQ9NY6/icon

export type PlasmicRichTextToolbar__VariantMembers = {};

export type PlasmicRichTextToolbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicRichTextToolbar__VariantsArgs;
export const PlasmicRichTextToolbar__VariantProps =
  new Array<VariantPropType>();

export type PlasmicRichTextToolbar__ArgsType = {};
type ArgPropType = keyof PlasmicRichTextToolbar__ArgsType;
export const PlasmicRichTextToolbar__ArgProps = new Array<ArgPropType>();

export type PlasmicRichTextToolbar__OverridesType = {
  root?: p.Flex<"div">;
  blockControls?: p.Flex<"div">;
  block?: p.Flex<typeof Select>;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  styleControls?: p.Flex<"div">;
  color?: p.Flex<typeof IconButton>;
  currentColor?: p.Flex<"div">;
  fontWeight?: p.Flex<typeof ActionMenuButton>;
  fontStyle?: p.Flex<typeof IconButton>;
  textDecoration?: p.Flex<typeof ActionMenuButton>;
  inlineControls?: p.Flex<"div">;
  inline?: p.Flex<typeof ActionMenuButton>;
};

export interface DefaultRichTextToolbarProps {
  className?: string;
}

function PlasmicRichTextToolbar__RenderFunc(props: {
  variants: PlasmicRichTextToolbar__VariantsArgs;
  args: PlasmicRichTextToolbar__ArgsType;
  overrides: PlasmicRichTextToolbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),

    [props.args]
  );

  const $props = args;

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
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"blockControls"}
          data-plasmic-override={overrides.blockControls}
          className={classNames(projectcss.all, sty.blockControls)}
        >
          <Select
            data-plasmic-name={"block"}
            data-plasmic-override={overrides.block}
            className={classNames("__wab_instance", sty.block)}
            icon={
              <PlussvgIcon
                className={classNames(projectcss.all, sty.svg__pVkd)}
                role={"img"}
              />
            }
            placeholder={
              true ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <TextsvgIcon
                    className={classNames(projectcss.all, sty.svg__sk6N)}
                    role={"img"}
                  />

                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Default"}
                  </div>
                </p.Stack>
              ) : null
            }
          />
        </div>
      ) : null}

      <RichTextToolbarDivider
        className={classNames(
          "__wab_instance",
          sty.richTextToolbarDivider__zf1U9
        )}
      />

      {true ? (
        <div
          data-plasmic-name={"styleControls"}
          data-plasmic-override={overrides.styleControls}
          className={classNames(projectcss.all, sty.styleControls)}
        >
          <IconButton
            data-plasmic-name={"color"}
            data-plasmic-override={overrides.color}
            children2={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__vD2V)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.color)}
            withBackgroundHover={true}
          >
            <div
              data-plasmic-name={"currentColor"}
              data-plasmic-override={overrides.currentColor}
              className={classNames(projectcss.all, sty.currentColor)}
            />

            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__yx6RJ)}
              role={"img"}
            />
          </IconButton>

          <ActionMenuButton
            data-plasmic-name={"fontWeight"}
            data-plasmic-override={overrides.fontWeight}
            hasIcon={true}
            icon={
              <BoldsvgIcon
                className={classNames(projectcss.all, sty.svg__myNmc)}
                role={"img"}
              />
            }
            size={"small" as const}
            type={["noDivider"]}
          >
            {null}
          </ActionMenuButton>

          <IconButton
            data-plasmic-name={"fontStyle"}
            data-plasmic-override={overrides.fontStyle}
            children2={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__wlHtu)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.fontStyle)}
            withBackgroundHover={true}
          >
            <ItalicsvgIcon
              className={classNames(projectcss.all, sty.svg__ium02)}
              role={"img"}
            />
          </IconButton>

          <ActionMenuButton
            data-plasmic-name={"textDecoration"}
            data-plasmic-override={overrides.textDecoration}
            className={classNames("__wab_instance", sty.textDecoration)}
            hasIcon={true}
            icon={
              <UnderlinesvgIcon
                className={classNames(projectcss.all, sty.svg__kB86G)}
                role={"img"}
              />
            }
            size={"small" as const}
            type={["noDivider"]}
          >
            {null}
          </ActionMenuButton>
        </div>
      ) : null}

      <RichTextToolbarDivider
        className={classNames(
          "__wab_instance",
          sty.richTextToolbarDivider__n0A9V
        )}
      />

      {true ? (
        <div
          data-plasmic-name={"inlineControls"}
          data-plasmic-override={overrides.inlineControls}
          className={classNames(projectcss.all, sty.inlineControls)}
        >
          <ActionMenuButton
            data-plasmic-name={"inline"}
            data-plasmic-override={overrides.inline}
            className={classNames("__wab_instance", sty.inline)}
            hasIcon={true}
            icon={
              <LinksvgIcon
                className={classNames(projectcss.all, sty.svg__zu5On)}
                role={"img"}
              />
            }
            size={"small" as const}
            type={["noDivider"]}
          >
            {null}
          </ActionMenuButton>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "blockControls",
    "block",
    "freeBox",
    "text",
    "styleControls",
    "color",
    "currentColor",
    "fontWeight",
    "fontStyle",
    "textDecoration",
    "inlineControls",
    "inline",
  ],

  blockControls: ["blockControls", "block", "freeBox", "text"],
  block: ["block", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
  styleControls: [
    "styleControls",
    "color",
    "currentColor",
    "fontWeight",
    "fontStyle",
    "textDecoration",
  ],

  color: ["color", "currentColor"],
  currentColor: ["currentColor"],
  fontWeight: ["fontWeight"],
  fontStyle: ["fontStyle"],
  textDecoration: ["textDecoration"],
  inlineControls: ["inlineControls", "inline"],
  inline: ["inline"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  blockControls: "div";
  block: typeof Select;
  freeBox: "div";
  text: "div";
  styleControls: "div";
  color: typeof IconButton;
  currentColor: "div";
  fontWeight: typeof ActionMenuButton;
  fontStyle: typeof IconButton;
  textDecoration: typeof ActionMenuButton;
  inlineControls: "div";
  inline: typeof ActionMenuButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRichTextToolbar__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRichTextToolbar__VariantsArgs;
  args?: PlasmicRichTextToolbar__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicRichTextToolbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRichTextToolbar__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRichTextToolbar__ArgProps,
          internalVariantPropNames: PlasmicRichTextToolbar__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicRichTextToolbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRichTextToolbar";
  } else {
    func.displayName = `PlasmicRichTextToolbar.${nodeName}`;
  }
  return func;
}

export const PlasmicRichTextToolbar = Object.assign(
  // Top-level PlasmicRichTextToolbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    blockControls: makeNodeComponent("blockControls"),
    block: makeNodeComponent("block"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    styleControls: makeNodeComponent("styleControls"),
    color: makeNodeComponent("color"),
    currentColor: makeNodeComponent("currentColor"),
    fontWeight: makeNodeComponent("fontWeight"),
    fontStyle: makeNodeComponent("fontStyle"),
    textDecoration: makeNodeComponent("textDecoration"),
    inlineControls: makeNodeComponent("inlineControls"),
    inline: makeNodeComponent("inline"),

    // Metadata about props expected for PlasmicRichTextToolbar
    internalVariantProps: PlasmicRichTextToolbar__VariantProps,
    internalArgProps: PlasmicRichTextToolbar__ArgProps,
  }
);

export default PlasmicRichTextToolbar;
/* prettier-ignore-end */
