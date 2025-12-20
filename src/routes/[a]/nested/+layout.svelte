<script lang="ts">
	import { get } from "$lib/context";

	const fooDerived = $derived(get().current);

	let { children } = $props();
</script>

{fooDerived?.foo ?? 'fallback'}

{@render children()}
