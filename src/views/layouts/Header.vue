<template>
    <section class="w-full border-box transition-all duration-500 linear lg:px-24 md:px-20 px-8 py-8 border-b" style="background-color: #141432">
    <div style="font-family: 'Poppins', sans-serif">
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
                    <router-link class="block cursor-pointer nav-1-2" to="/club">Club</router-link>
                    <router-link class="block cursor-pointer nav-1-2" to="/player">Player</router-link>
                    <router-link class="block cursor-pointer nav-1-2" to="/manager">Manager</router-link>
                    <router-link class="block cursor-pointer nav-1-2" to="/stadium">Stadium</router-link>
                </nav>
            </div>
            
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full mt-6 lg:mt-0" id="menu-1-2">
                <router-link to="/login" class="btn-fill-1-2 items-center border-0 py-3 px-8 focus:outline-none rounded-2xl font-medium text-base">
                    Login
                </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'HeaderLayout'
}
</script>

<style scoped>
.img-header {
    height: 50px;
}

.btn-fill-1-2 {
    background-color: #ffdda9;
    color: #372642;
}

.btn-fill-1-2:hover {
    background-color: #fcd396;
    color: #372642;
}

nav a.nav-1-2 {
    color: #ffffff;
}

nav a.nav-1-2:hover {
    color: #ffdda9;
}

nav a.nav-1-2.active {
    color: #ffdda9;
}

#menu-toggle-1-2:checked + #menu-1-2,
#menu-toggle-1-2:checked + #menu-1-2 + #menu-1-2 {
    display: block;
}
</style>