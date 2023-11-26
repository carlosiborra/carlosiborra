<!-- ! SCRIPTS ------------------------------------------------------------------------------------>

<script lang="ts">

	

</script>

<!-- ! STRUCTURE ---------------------------------------------------------------------------------->

<div class="social-wrapper">
	<div
		class="social-button"
		id="linkedin"
		onclick="window.open('https://www.linkedin.com/in/carlos-iborra')"
	>
		<img src="img/linkedin.png" alt="linkedin" />
		<span>LinkedIn</span>
	</div>
	<div class="social-button" id="github" onclick="window.open('https://github.com/carlosiborra')">
		<img src="img/github.png" alt="github" />
		<span>GitHub</span>
	</div>
	<div class="social-button" id="twitter" onclick="window.open('https://twitter.com/iboorraa')">
		<img src="img/twitter.png" alt="twitter" />
		<span>Twitter</span>
	</div>
	<div class="social-button" id="Email" onclick="window.open('mailto:charlie.iborra@gmail.com')">
		<img src="img/email.png" alt="email" />
		<span>Email</span>
	</div>
</div>

<!-- ! STRUCTURE ---------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';
	.social-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(80px, 2fr));
		grid-gap: 20px;
	}

	.social-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: $color-primary;
		border-radius: 10px;
		padding: 20px 40px;
		// max-width: 200px;

		&:hover {
			filter: brightness(1.2);
			transform: scale(1.01);
			
			// rotate
			transform: rotate(5deg);
			transition: all 0.2s ease-in-out;


		}

		&:active {
			filter: brightness(0.8);
			transform: scale(0.99);
		}
	}

	.social-button span {
		text-decoration: none;
		color: $color-primary-light;
		font-family: $font-family-sans;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: bold;
	}

	.social-button img {
		// width: 40px;
		height: 5vw;
		max-height: 40px;
		min-height: 20px;
		// border-radius: 50%;
		margin-bottom: 10px;
	}
</style>
