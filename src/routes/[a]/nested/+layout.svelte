<script lang="ts">
	import { get } from "$lib/context";

	const fooDerived = get()

	let { children } = $props();
</script>

{$fooDerived?.foo ?? 'fallback'}

{@render children()}
