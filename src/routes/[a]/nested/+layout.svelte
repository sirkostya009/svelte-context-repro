<script lang="ts">
	import { get } from "$lib/context";

	const fooDerived = $derived(await get().current);

	let { children } = $props();
</script>

{fooDerived.foo}

{@render children()}
