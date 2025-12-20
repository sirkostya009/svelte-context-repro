import { createContext } from "svelte";

export type type = typeof import("./a").default | typeof import("./b").default;

export const [get, set] = createContext<{ current: type | undefined }>();
