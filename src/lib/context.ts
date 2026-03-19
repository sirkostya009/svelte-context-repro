import { createContext } from "svelte";

type type = typeof import("./a").default | typeof import("./b").default;

export const [get, set] = createContext<type>();
