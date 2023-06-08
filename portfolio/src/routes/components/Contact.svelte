<!-- ! Contact elements of Home -->

<!-- ! ------------------------------------>

<div class="social-wrapper">
	<div class="social-button" id="linkedin">
		<a href="https://www.linkedin.com/in/carlos-iborra/">
			<img src="linkedin.png" alt="linkedin" />
			<span>LinkedIn</span>
		</a>
	</div>
	<div class="social-button" id="github">
		<a href="https://github.com/carlosiborra">
			<img src="github.png" alt="github" />
			<span>GitHub</span>
		</a>
	</div>
	<div class="social-button" id="twitter">
		<a href="https://twitter.com/iboorraa">
			<img src="twitter.png" alt="twitter" />
			<span>Twitter</span>
		</a>
	</div>
	<div class="social-button" id="Email">
		<a href="mailto:charlie.iborra@gmail.com">
			<img src="email.png" alt="email" />
			<span>Email</span>
		</a>
	</div>
</div>

<!-- ! ------------------------------------>

<style lang="scss">
	@import '../global.scss';
	.social-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
		grid-gap: 20px;
		margin-top: 20px;
	}

	.social-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: $color-primary;
		border-radius: 10px;
		padding: 20px 40px;
	}

	.social-button a {
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
		height: 40px;
		// border-radius: 50%;
		margin-bottom: 10px;
	}
</style>
