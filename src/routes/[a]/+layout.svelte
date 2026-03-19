<script lang="ts">
	import { set } from "$lib/context";

	let { children, params } = $props();

	const fooState = $derived(await import(`$lib/${params.a}.ts`).then((m) => m.default));

	// svelte-ignore state_referenced_locally
	set(fooState);
</script>

{@render children()}
