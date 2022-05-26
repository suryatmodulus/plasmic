import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerRenderErrorListener, setPlasmicRootNode } from "./canvas-host";
import * as hostModule from "./exports";
import { setRepeatedElementFn } from "./repeatedElement";
// version.ts is automatically generated by `yarn build` and not committed.
import { hostVersion } from "./version";

// All exports must come from "./exports"
export * from "./exports";

const root = globalThis as any;

if (root.__Sub == null) {
  // Creating a side effect here by logging, so that vite won't
  // ignore this block for whatever reason
  console.log("Plasmic: Setting up app host dependencies");
  root.__Sub = {
    React,
    ReactDOM,
    hostModule,
    hostVersion,
    hostUtils: {
      setPlasmicRootNode,
      registerRenderErrorListener,
      setRepeatedElementFn,
    },

    // For backwards compatibility:
    setPlasmicRootNode,
    registerRenderErrorListener,
    setRepeatedElementFn,
    ...hostModule,
  };
}
