<template>

<!-- bottom menu in mobile -->
<div class="fixed bottom-0 inset-x-0 w-full md:hidden bottom-menu flex bg-primary">
    <router-link to="/standings" class="flex flex-col items-center justify-center grow text-gray-400 text-xs my-3">
        <i class="fas fa-clipboard-list"></i>
        Standings
    </router-link>
    <router-link to="/stats" class="flex flex-col items-center justify-center grow text-gray-400 text-xs my-3">
        <i class="fas fa-sort-numeric-up"></i>
        Stats
    </router-link>
    <router-link to="/players" class="flex flex-col items-center justify-center grow text-gray-400 text-xs my-3">
        <i class="fas fa-id-card-alt"></i>
        Players
    </router-link>
    <router-link to="/league" class="flex flex-col items-center justify-center grow text-gray-400 text-xs my-3">
        <i class="fas fa-medal"></i>
        Leagues
    </router-link>
</div>

<footer class="py-12 lg:px-24 md:px-16 sm:px-8 px-4 bg-primary">
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