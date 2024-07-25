<!-- 只关注导航本身的实现 -->
<template>
	<nav class="nav-bar">
		<ul class="nav">
			<li class="nav-item">
				<router-link :to="localPath('/')" :class="{'active':routePath==localPath('/')}">ALITA</router-link>
			</li>
			<li class="nav-item">
				<router-link :to="localPath('/about')" :class="{'active':routePath==localPath('/about')}">{{ $t('about_pilates') }}</router-link>
			</li>
			<li class="nav-item">
				<router-link :to="localPath('/products')" :class="{'active':routePath==localPath('/products')}">{{ $t('products_intro') }}</router-link>
			</li>
		</ul>
		<!-- 移动端 -->
		<ul class="nav-m" :class="{'collapse':!isCollapse}">
			<img src="assets/images/animal-pilates.png" alt="logo" class="logo-img">
			<li>
				<router-link :to="localPath('/')" @click="isCollapse = false" >ALITA</router-link>
			</li>
			<li>
				<router-link :to="localPath('/about')" @click="isCollapse = false" >{{ $t('about_pilates') }}</router-link>
			</li>
			<li>
				<router-link :to="localPath('/products')" @click="isCollapse = false" >{{ $t('products_intro') }}</router-link>
			</li>
		</ul>
		<button @click="isCollapse = !isCollapse">
			<svg width="30px" height="30px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#ffffff" stroke-width="0.36"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="1.152"> <path d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z" fill="#973d01"></path> <path d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z" fill="#973d01"></path> <path d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z" fill="#973d01"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z" fill="#973d01"></path> <path d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z" fill="#973d01"></path> <path d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z" fill="#973d01"></path> </g></svg>
		</button>
	</nav>
</template>

<script setup>

	const localPath = useLocalePath();
	const route = useRoute()
	const isCollapse = ref(false)
	const routePath = ref('')
	watch(() => route.path, (path) => {
		routePath.value = path
	})
	onMounted(() => {
		routePath.value = route.path
	})
</script>

<style lang="scss" scoped>

	$header-height: 80px;
	$primary-color:rgb(151, 61, 1);
	@media (max-width:576px) {
		.nav-bar {
			// position: relative;
			.nav {
				display: none !important;
			}

			.nav-m {
				display: block !important;
			}
			button {
			display: block !important;
			z-index: 100;
			position: relative; //不加会被展开的元素遮盖，z-index无效
		}
		}
	}
	// 移动端
	.nav-m {
		position: absolute;
		z-index: 90;
		background-color: rgb(151, 61, 1);;
		left: 0;
		right: 0;
		padding: 1rem;
		max-height: 500px; 
		transition: max-height 0.3s ease-out;
		overflow: hidden;
		
		a {
			padding: 0.8rem 1rem;
			display: inline-block;
		}
		li {
			color: white;
		}
		.logo-img {
			width: 150px;  /* 根据需要调整大小 */
			height: auto; /* 保持比例 */
			position: absolute; /* 绝对定位 */
			right: 0; /* 靠右 */
			bottom: 0; /* 靠上 */
			margin: 10px; /* 根据需要调整间距 */
		}
	}
		.nav-m.collapse {
		max-height: 0; // 根据实际内容高度调整
	}
.nav-bar {
	.nav-m {
		display: none;
	}

	button {
			display: none;
		}
	margin-right: 50px;
	}

	.nav {
		position: relative;
		display: flex;
		width: 100%;
		height: $header-height;
		line-height: $header-height;

		.nav-item {
			position: relative;
			margin: 0 20px;
			cursor: pointer;

			a {
				display: block;
			}

			.active {
				color: $primary-color;
				border-bottom: 2px solid $primary-color;
			}

			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				left: -5px;
				right: -5px;
				height: 2px;
				margin-bottom: -2px; // 和active的border-bottom重叠
				background-color: $primary-color;
				transform: scale(0);
				transition: all 0.4s linear;
			}

			&:hover {
				color: $primary-color;

				&::before {
					transform: scale(1);
				}
			}
			
		}
	}
</style>
