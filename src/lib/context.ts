import { createContext } from "svelte";
import type { Readable } from "svelte/store";

export type type = typeof import("./a").default | typeof import("./b").default;

export const [get, set] = createContext<Readable<type | undefined>>();
