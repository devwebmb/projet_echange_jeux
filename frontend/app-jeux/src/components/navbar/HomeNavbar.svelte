<script>
	let token;
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('token');
	}
</script>

<nav>
	<label for="toggle">☰</label>
	<input type="checkbox" id="toggle" />
	<div class="home-menu">
		<a href="/">Toutes les annonces</a>
		<a href="/account">Mon compte</a>
		{#if token !== null}
			<a href="/">Se déconnecter</a>
		{:else}
			<a href="/connect">Se connecter</a>
		{/if}
	</div>
</nav>

<style>
	nav {
		margin: auto;
		width: 60%;
		height: 100px;
		background: #6a645a;
	}

	nav .home-menu {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	nav .home-menu a {
		width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		text-decoration: none;
		color: white;
		text-align: center;
		transition: 0.5s;
	}

	nav a:hover {
		background: #a59983;
	}

	label,
	#toggle {
		display: none;
	}
	@media all and (max-width: 991px) {
		nav {
			height: 60px;
			width: 80%;
			max-width: 500px;
		}
		nav .home-menu {
			display: none;
			flex-direction: column;
			background: #6a645a;
			height: 220px;
		}
		nav .home-menu a {
			width: 50%;
		}
		label {
			width: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			font-size: 40px;
			color: white;
			cursor: pointer;
		}
		#toggle:checked + .home-menu {
			display: flex;
		}
	}
</style>
