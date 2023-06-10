<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Check the location of each element
		document.querySelectorAll('.content').forEach((element) => {
			const bottom_of_object = element.offsetTop + element.offsetHeight;
			const bottom_of_window = window.innerHeight;

			if (bottom_of_object > bottom_of_window) {
				element.classList.add('hidden');
			}
		});

		window.addEventListener('scroll', () => {
			// Check the location of each hidden element
			document.querySelectorAll('.hidden').forEach((element) => {
				const bottom_of_object = element.offsetTop + element.offsetHeight;
				const bottom_of_window = window.scrollY + window.innerHeight;

				// If the object is completely visible in the window, fadeIn it
				if (bottom_of_window > bottom_of_object) {
					element.style.opacity = '1';
				}
			});
		});
	});
</script>

<!-- ! ------------------------------------>

<section class="timeline">
	<ul>
		<li>
			<div class="content">
				<h2>
					<time>2016</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis praesentium itaque
					veniam dolorum cupiditate asperiores optio beatae, qui perferendis ipsam odit modi nemo
					natus corrupti neque quos distinctio facilis?
				</p>
			</div>
		</li>
		<li>
			<div class="content">
				<h2>
					<time>2015</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quas, reiciendis quis
					sequi voluptatem consectetur adipisci accusamus hic vel vero ea ad iure! Natus, ipsum,
					enim aspernatur fugit voluptatibus similique?
				</p>
			</div>
		</li>
		<li>
			<div class="content">
				<h2>
					<time>2012</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, expedita. Dolorem
					blanditiis, delectus omnis eos accusamus mollitia et cupiditate officia maxime vel,
					nesciunt alias eius, quibusdam in ea eveniet ut!
				</p>
			</div>
		</li>
		<li>
			<div class="content">
				<h2>
					<time>2010</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptas voluptatum
					dolorum, quibusdam dignissimos animi pariatur laboriosam quis explicabo similique aperiam
					debitis quam velit quod, reprehenderit harum ratione. Iste, unde?
				</p>
			</div>
		</li>
		<li>
			<div class="content">
				<h2>
					<time>2008</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet inventore odit placeat in
					laboriosam dolore ducimus vero, sapiente ipsam veritatis, numquam libero itaque dolores
					natus ex aliquam nam nihil cumque.
				</p>
			</div>
		</li>
		<li>
			<div class="content">
				<h2>
					<time>2007</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sequi nobis, blanditiis
					quae dolorem quasi reiciendis odio qui fugit? Officiis quos aspernatur mollitia dolorum
					pariatur repellendus quaerat dolorem magnam quo.
				</p>
			</div>
		</li>
		<li>
			<div class="content">
				<h2>
					<time>2004</time>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corporis sunt nostrum velit
					quibusdam neque porro ratione quos dolor libero. Tempore consequatur natus nostrum
					delectus provident fugiat corporis error ipsa.
				</p>
			</div>
		</li>
	</ul>
</section>

<!-- ! ------------------------------------>

<style lang="scss">
    @import '../global.scss';

	$title-background: #3d9e67;
	$content-background-color: #67cc8e;
	$content-background-gradient: #56bc83;
	$content-width: 450px;

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	body {
		font-size: 10px;
		font-family: $font-secondary;
	}

	.timeline {
		color: $color-primary-light;

		ul li .content h2 {
			// text-shadow: 1px 1px 1px rgba(56, 56, 56, 0.5);
		}

		ul {
			padding: 50px 0;

			li {
				background: $color-tertiary;
				position: relative;
				margin: 0 auto;
				width: 5px;
				padding-bottom: 40px;
				list-style-type: none;

				&:last-child {
					padding-bottom: 7px;
				}

				&:before {
					content: '';
					background: $color-primary;
					position: absolute;
					left: 50%;
					top: 0;
					transform: translateX(-50%);
					-webkit-transform: translateX(-50%);
					width: 20px;
					height: 20px;
					border: 3px solid $color-tertiary;
					-webkit-border-radius: 50%;
					-moz-border-radius: 50%;
					border-radius: 50%;
				}

				.hidden {
					opacity: 0;
				}

				.content {
					background: $color-tertiary;
					position: relative;
					top: 7px;
					width: $content-width;
					padding: 20px;

					h2 {
						color: $color-primary-light;
						padding-bottom: 10px;
						text-align: center;
					}

					p {
						text-align: center;
					}

					&:before {
						content: '';
						background: $color-tertiary;
						position: absolute;
						top: 0px;
						width: 38px;
						height: 5px;
					}
				}

                // ! Right Leaves

				&:nth-child(odd) .content {
					left: 50px;
					background: $color-tertiary;
					border-radius: 0 15px 15px 15px;
				}
				&:nth-child(odd) .content:before {
					left: -38px;
				}

                // ! Left Leaves

				&:nth-child(even) .content {
					left: calc(-#{$content-width} - 45px);
					background: $color-tertiary;
                    border-radius: 15px 0px 15px 15px;
                }
				&:nth-child(even) .content:before {
					right: -38px;
				}
			}
		}
	}


	@media screen and (max-width: 1020px) {
		.timeline ul li .content {
			width: 41vw;
		}
		.timeline ul li:nth-child(even) .content {
			left: calc(-41vw - 45px);
		}
	}

	@media screen and (max-width: 700px) {
		.timeline ul li {
			margin-left: 20px;

			.content {
				width: calc(100vw - 100px);

				h2 {
					text-align: initial;
				}
			}

			&:nth-child(even) .content {
				left: 45px;
				background: $content-background-color;
				background: -webkit-linear-gradient(
					-45deg,
					$content-background-gradient,
					$content-background-color
				);
				background: linear-gradient(
					-45deg,
					$content-background-gradient,
					$content-background-color
				);
			}

			&:nth-child(even) .content:before {
				left: -33px;
			}
		}
	}
</style>
