<template>
    <section class="w-full border-box transition-all duration-500 linear py-8 border-b bg-primary">
    <div class="container">
        <div class="mx-auto flex flex-wrap flex-row items-center justify-between">
            <router-link class="flex font-medium items-center" to="/">
                <img src="logo.png" class="img-header" alt="">
            </router-link>

            <label for="menu-toggle-1-2" class="cursor-pointer lg:hidden block">
                <svg
                class="w-6 h-6"
                fill="none"
                stroke="#FFFFFF"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
                </svg>
            </label>

            <input class="hidden" type="checkbox" id="menu-toggle-1-2" />
            
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full lg:ml-auto lg:mr-auto flex-wrap items-center text-base justify-center" id="menu-1-2">
                <nav class="lg:space-x-12 space-x-0 lg:flex items-center justify-between text-base pt-8 lg:pt-0 lg:space-y-0">
                    <router-link class="nav-link" to="/matches">Matches</router-link>
                    <router-link class="nav-link" to="/standings">Standings</router-link>
                    <router-link class="nav-link" to="/stats">Stats</router-link>
                    <router-link class="nav-link" to="/players">Players</router-link>
                </nav>
            </div>
            
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full mt-6 lg:mt-0" id="menu-1-2">
                <router-link to="/login" class="bg-warning items-center border-0 py-3 px-8 focus:outline-none rounded-2xl font-medium text-base">
                    Login
                </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'HeaderLayout',
    data() {
      return {
        currentRoute: this.$router.currentRoute.value.path
      }
    }
}
</script>

<style scoped>
.img-header {
    height: 50px;
}
</style>