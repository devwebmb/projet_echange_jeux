<script>
	import { onMount } from 'svelte';

	let announcementsArray = [];

	function getAllAnnouncements() {
		fetch(`http://localhost:3080/api/announcement`, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			res.json().then((announcements) => {
				for (let i = 0; i < announcements.data.length; i++) {
					announcementsArray = [...announcementsArray, announcements.data[i]];
				}
			});
		});
	}

	onMount(() => {
		getAllAnnouncements();
	});
</script>

{#each announcementsArray as announcement}
	{announcement.post}
{/each}

<style></style>
