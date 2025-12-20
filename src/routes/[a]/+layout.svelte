<script lang="ts">
	import { set, type type } from "$lib/context";

	let { children, params } = $props();

	let fooState = $state<type>();

	set({
		get current() {
			return fooState;
		},
	});

	$effect(() => {
		import(`$lib/${params.a}.ts`).then((m) => (fooState = m));
	});
</script>

{@render children()}
