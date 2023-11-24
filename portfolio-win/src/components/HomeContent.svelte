<!-- ! Content -->

<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from './Contact.svelte';
	import Timeline from './Timeline.svelte';

	onMount(() => {
		let document = window.document;
		const title = document.querySelector('.title');

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target === title && entry.contentRect.width === 0) {
					changeText();
					break;
				}
			}
		});

		resizeObserver.observe(title);

		function changeText() {
			const text = [
				'Hi, I am Carlos Iborra',
				'Welcome to my Portfolio!',
				'Happy coding!',
				'Have a nice day!',
				'Hello World!',
				'¡Hola Mundo!',
				'Saluton mondo!',
				'Привет, мир!',
				'Hallo Welt!',
				'Salut monde!'
			];

			const randomText = text[Math.floor(Math.random() * text.length)];
			title.textContent = randomText;
		}
	});
</script>

<!-- ! ------------------------------------>

<title>Carlos Iborra | Portfolio</title>
<div id="container" class="home-page card-wrapper">
	<div class="left-card">
		<div class="left-card-heading">
			<span class="title-holder">
				<h2 class="title">Hi, I am Carlos Iborra</h2>
			</span>
		</div>

		<div class="left-card-body">
			<div id="section1" class="section">
				<div class="section-wrapper">
					<h2>0. Introduction</h2>
					<div class="section-content">
						<p>
							I am an Spanish student currently studying Computer Science Engineering at Universidad
							Carlos III de Madrid. I've been passionate for programming since I was 8, always
							looking for new challenges thereby improving my skills. If you want to learn more
							about my present and future career, feel free to visit my LinkedIn profile.
						</p>
					</div>
				</div>
			</div>

			<div id="section2" class="section">
				<div class="section-wrapper">
					<h2>1. Roadmap</h2>
					<div class="section-content">
						<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
					</div>
				</div>
			</div>

			<div id="section3" class="section">
				<div class="section-wrapper">
					<h2>2. Proyects</h2>
					<div class="section-content">
						<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
					</div>
				</div>
			</div>

			<div id="section4" class="section">
				<div class="section-wrapper">
					<h2>3. Timeline</h2>
					<div class="section-content">
						<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
						<Timeline />
					</div>
				</div>
			</div>

			<div id="section5" class="section">
				<div class="section-wrapper">
					<h2>4. Stats</h2>
					<div class="section-content">
						<p>
							This are my overall stats in the VS Code editor (Arch Linux + Windows). Looking foward
							adding compatibility with Neovim, Konsole and Terminal.
						</p>
						<p>
							For better up-to date stats, visit my <a href="https://github.com/carlosiborra"
								>GitHub</a
							> profile.
						</p>
						<!-- This better GitHub stats were provided by https://github.com/jstrieb/github-stats -->
						<div class="github-stats">
							<img
								class="img-fluid"
								src="https://github-readme-stats.vercel.app/api/?username=carlosiborra&count_private=true&theme=dark&show_icons=true&title_color=00d612&show_owner&icon_color=00d612"
								alt="Carlos Iborra GitHub Stats"
							/>
							<img
								class="img-fluid"
								src="https://github-readme-stats.vercel.app/api/top-langs/?username=carlosiborra&count_private=true&theme=dark&show_icons=true&title_color=00d612&show_owner&icon_color=00d612"
								alt="Carlos Iborra Most Used Languages"
							/>
						</div>
					</div>
				</div>
			</div>

			<div id="section6" class="section">
				<div class="section-wrapper">
					<h2>5. Social Media</h2>
					<div class="section-content">
						<Contact />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- ! ------------------------------------>

<style lang="scss">
	@import 'static/styles/styles.scss';

	@mixin glass-content-morph-background {
		@each $property, $value in $color-secondary-glass-morph-content {
			#{$property}: $value;
		}
	}

	#container {
		@media screen and (max-width: $breakpoint-mobile) {
			flex-direction: column;
			align-items: center;
		}

		@media screen and (min-width: $breakpoint-ultrawide) {
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.left-card {
			display: flex;
			flex-direction: column;
			gap: $separation-big;

			background-color: none;

			@media screen and (max-width: $breakpoint-mobile) {
				flex-direction: column;
				align-items: center;
			}

			.left-card-heading {
				@include glass-content-morph-background;

				border-radius: $border-radius-big;
				z-index: 1;

				padding: $separation-small $separation-big;

				.title-holder {
					width: min-content;
					height: max-content;
					font-size: 100%;

					.title {
						font-family: $font-family-mono;
						color: $color-primary-light;
						font-size: 15px;

						width: min-content;
						max-width: min-content;
						height: min-content;

						border-right: 2px solid $color-primary-light;
						overflow: hidden;
						white-space: nowrap;

						animation:
							typewriter 5s steps(7) infinite,
							blinking-cursor 0.8s infinite;
						animation-fill-mode: forwards;
					}
				}

				@media screen and (max-width: $breakpoint-mobile) {
					width: calc(100% - $separation-big * 2);
				}
			}

			.left-card-body {
				background-color: none;
				display: flex;
				flex-direction: column;
				gap: $separation-big; /* Add a gap between sections */
				border-radius: 15px;
				z-index: 1;

				.section {
					@include glass-content-morph-background;
					border-radius: $border-radius-big;

					.section-wrapper {
						color: $color-primary-light;
						font-family: $font-family-sans;
						font-size: 14px;
						display: flex;
						flex-direction: column;

						padding: $separation-big;

						.section-content {
							@include glass-content-morph-background;
							margin: 0;
							padding: $separation-big;
						}

						h2 {
							font-family: $font-family-mono;
							letter-spacing: -2px; /* Adjust the value to make the font more tight */
							margin: 0 0 $separation-big 0;
							color: #ffd84c;
						}

						p {
							margin: 0;
						}
					}

					.github-stats {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: left;
						flex-wrap: wrap;

						.img-fluid {
							// set max width of the image to the one on the div it is inside
							max-width: 100%;
							margin: 40px 0 0 0;
						}
					}
				}
			}
		}
	}

	@keyframes typewriter {
		0% {
			width: 0%;
		}
		25% {
			width: 60%;
		}
		48% {
			width: 70%;
		}
		50% {
			width: 70%;
		}
		55% {
			width: 70%;
		}
		75% {
			width: 60%;
		}
		85% {
			width: 30%;
		}
		100% {
			width: 0%;
		}
	}

	@keyframes blinking-cursor {
		from {
			border-color: transparent;
		}
		to {
			border-color: $color-primary-light;
		}
	}
</style>
