<script lang="ts">
	import { set } from "$lib/context";

	let { children, params } = $props();

	const fooState = $derived(import(`$lib/${params.a}.ts`).then((m) => m.default));

	set({
		get current() {
			return fooState;
		},
	});
</script>

{@render children()}
