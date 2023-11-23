<!-- ! Contact elements of Home -->

<!-- ! ------------------------------------>

<title>Carlos Iborra | Projects</title>
<div class="social-wrapper">
	<div
		class="social-button"
		id="linkedin"
		onclick="window.open('https://www.linkedin.com/in/carlos-iborra')"
	>
		<img src="linkedin.png" alt="linkedin" />
		<span>LinkedIn</span>
	</div>
	<div
		class="social-button"
		id="github"
		onclick="window.open('https://github.com/carlosiborra')"
	>
		<img src="github.png" alt="github" />
		<span>GitHub</span>
	</div>
	<div
		class="social-button"
		id="twitter"
		onclick="window.open('https://twitter.com/iboorraa')"
	>
		<img src="twitter.png" alt="twitter" />
		<span>Twitter</span>
	</div>
	<div
		class="social-button"
		id="Email"
		onclick="window.open('mailto:charlie.iborra@gmail.com')"
	>
		<img src="email.png" alt="email" />
		<span>Email</span>
	</div>
</div>

<!-- ! ------------------------------------>

<style lang="scss">
	@import '../global.scss';
	.social-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
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

			a {
				filter: brightness(1.2);
			}
		}

		&:active {
			filter: brightness(0.8);
			transform: scale(0.99);
		}
	}

	.social-button span {
		text-decoration: none;
		color: $color-primary-light;
		font-family: $font-secondary;
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
