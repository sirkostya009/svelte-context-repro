<script lang="ts">
	import { set } from "$lib/context";

	let { children, params } = $props();

	const fooState = $derived({
		current: import(`$lib/${params.a}.ts`),
	});

	set(fooState);
</script>

{@render children()}
