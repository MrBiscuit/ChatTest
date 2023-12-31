// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6hRmCuBtBWinhUZwzAzpn4
// Component: DZxGYdaUeOO7

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_website_mobile_first.module.css"; // plasmic-import: 6hRmCuBtBWinhUZwzAzpn4/projectcss
import sty from "./PlasmicBubble.module.css"; // plasmic-import: DZxGYdaUeOO7/css

createPlasmicElementProxy;

export type PlasmicBubble__VariantMembers = {
  notMe: "notMe";
};
export type PlasmicBubble__VariantsArgs = {
  notMe?: SingleBooleanChoiceArg<"notMe">;
};
type VariantPropType = keyof PlasmicBubble__VariantsArgs;
export const PlasmicBubble__VariantProps = new Array<VariantPropType>("notMe");

export type PlasmicBubble__ArgsType = {
  msg?: string;
  name?: string;
  time?: string;
};
type ArgPropType = keyof PlasmicBubble__ArgsType;
export const PlasmicBubble__ArgProps = new Array<ArgPropType>(
  "msg",
  "name",
  "time"
);

export type PlasmicBubble__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBubbleProps {
  msg?: string;
  name?: string;
  time?: string;
  notMe?: SingleBooleanChoiceArg<"notMe">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBubble__RenderFunc(props: {
  variants: PlasmicBubble__VariantsArgs;
  args: PlasmicBubble__ArgsType;
  overrides: PlasmicBubble__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          msg: "msg",
          name: "name",
          time: "time"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "notMe",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.notMe
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
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
        sty.root,
        { [sty.rootnotMe]: hasVariant($state, "notMe", "notMe") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__kJeA, {
          [sty.freeBoxnotMe__kJeAp7DnS]: hasVariant($state, "notMe", "notMe")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kir72,
            {
              [sty.textnotMe__kir72P7DnS]: hasVariant($state, "notMe", "notMe")
            }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.time;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "text here";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__bs8P)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xuVjm
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "text here";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pivq5
            )}
          >
            {":\u00a0"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__icPsB
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.msg;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "text here";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBubble__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBubble__VariantsArgs;
    args?: PlasmicBubble__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBubble__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBubble__ArgsType,
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
          internalArgPropNames: PlasmicBubble__ArgProps,
          internalVariantPropNames: PlasmicBubble__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBubble__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBubble";
  } else {
    func.displayName = `PlasmicBubble.${nodeName}`;
  }
  return func;
}

export const PlasmicBubble = Object.assign(
  // Top-level PlasmicBubble renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBubble
    internalVariantProps: PlasmicBubble__VariantProps,
    internalArgProps: PlasmicBubble__ArgProps
  }
);

export default PlasmicBubble;
/* prettier-ignore-end */
