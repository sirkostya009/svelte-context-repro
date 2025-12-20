<script lang="ts">
	import { set, type type } from "$lib/context";
	import { writable } from "svelte/store";

	let { children, params } = $props();

	const fooStore = writable<type>();

	set(fooStore);

	$effect(() => {
		import(`$lib/${params.a}.ts`).then((m) => fooStore.set(m));
	});
</script>

{@render children()}
