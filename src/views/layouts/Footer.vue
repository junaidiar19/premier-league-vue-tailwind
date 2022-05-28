<template>

<!-- bottom menu in mobile -->
<div class="bottom-menu">
    <router-link to="/standings" class="nav-link">
        <i class="fe fe-list"></i>
        Standings
    </router-link>
    <router-link to="/stats" class="nav-link">
        <i class="fe fe-bar-chart-2"></i>
        Stats
    </router-link>
    <router-link to="/players" class="nav-link">
        <i class="fe fe-users"></i>
        Players
    </router-link>
    <router-link to="/league" class="nav-link">
        <i class="fe fe-globe"></i>
        Leagues
    </router-link>
</div>

<footer class="pt-12 md:pb-12 pb-20 lg:px-24 md:px-16 sm:px-8 px-4 bg-primary">
    <div class="container mx-auto text-center">
        <p class="text-gray-400">Copyright © 2021 Handle Back Tea Labs</p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'FooterLayout'
}
</script>