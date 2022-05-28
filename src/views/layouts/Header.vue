<template>
    <section class="w-full border-box transition-all duration-500 linear py-8 border-b bg-primary dark:border-b-slate-700">
    <div class="container">
        <div class="mx-auto flex flex-wrap flex-row items-center gap-3 justify-between">

          <div class="flex items-center gap-3">
            <router-link class="flex font-medium items-center" to="/">
              <img src="logo.png" class="h-10 md:h-14" alt="">
            </router-link>
            <p class="md:hidden text-white text-lg">English Premier League</p>
          </div>

            <label for="menu-toggle-1-2" class="cursor-pointer hidden">
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
                  <router-link class="nav-link" to="/standings">Standings</router-link>
                    <router-link class="nav-link" to="/stats">Stats</router-link>
                    <router-link class="nav-link" to="/players">Players</router-link>
                    <router-link class="nav-link" to="/league">Leagues</router-link>
                </nav>
            </div>

            <button class="btn-mode" @click="changeMode()">
              <i class="fe fe-moon" id="icon-mode"></i>
            </button>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'HeaderLayout',
    data() {
      return {
        currentRoute: this.$router.currentRoute.value.path,
        mode: 'light'
      }
    },
    mounted() {
      var theme = localStorage.getItem('theme');
      if (theme) {
        this.mode = theme;

        var icon = document.getElementById('icon-mode');

        if (theme === 'dark') {
          document.body.classList.add('dark');
          icon.setAttribute('class', 'fe fe-sun')
        } else {
          document.body.classList.remove('dark');
          icon.setAttribute('class', 'fe fe-moon')
        }
      }
    },
    methods: {
      changeMode () {
        this.mode = (this.mode === 'light') ? 'dark' : 'light'

        var icon = document.getElementById('icon-mode');

        if (this.mode == 'dark') {
          document.body.classList.add('dark')
          icon.setAttribute('class', 'fe fe-sun')

        } else {
          document.body.classList.remove('dark')
          icon.setAttribute('class', 'fe fe-moon')
        }

        // save to local storage theme
        localStorage.setItem('theme', this.mode)
      }
    }
}
</script>

<style scoped>
.img-header {
    height: 50px;
}
</style>