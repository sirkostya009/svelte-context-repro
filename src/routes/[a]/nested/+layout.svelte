<script lang="ts">
	import { get } from "$lib/context";

	const current = get();

	let { children } = $props();
</script>

{current.foo}

{@render children()}
