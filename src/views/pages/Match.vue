<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">English Premier League</h5>
            <p class="text-gray-700">Matches</p>
          </div>
          <div>
            <p class="">2021-2022 Season</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-12">
      
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layouts/Header.vue'
import Footer from '@/views/layouts/Footer.vue'

export default {
  name: 'MatchView',
  components: {
    Header,
    Footer,
  }
}
</script>