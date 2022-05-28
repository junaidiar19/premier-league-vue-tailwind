<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">English Premier League</h5>
            <p class="text-gray-700">Stats</p>
          </div>
          <div class="hidden md:block">
            <select @change="changeSeason($event)">
              <option value="2021">2021-2022 Season</option>
              <option value="2020">2020-2021 Season</option>
              <option value="2019">2019-2020 Season</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-section">
      <div class="container py-4 md:py-8">

        <div class="md:hidden mb-4 md:mb-0">
          <select @change="changeSeason($event)" class="custom-select">
            <option value="2021">2021-2022 Season</option>
            <option value="2020">2020-2021 Season</option>
            <option value="2019">2019-2020 Season</option>
          </select>
        </div>

        <div class="row">
          <div class="md:col-6">
            <p class="font-semibold text-primary mb-3">TOP SCORERS</p>

            <ScorersView :season="params.season" />

          </div>
          <div class="md:col-6">
            <p class="font-semibold text-primary mb-3">TOP ASSISTS</p>

            <AssistsView :season="params.season"/>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layouts/Header.vue'
import Footer from '@/views/layouts/Footer.vue'
import ScorersView from '@/views/pages/stats/Scorers.vue'
import AssistsView from '@/views/pages/stats/Assists.vue'

export default {
  name: 'StatsView',
  components: {
    Header,
    Footer,
    ScorersView,
    AssistsView
  },
  data() {
    return {
      params: {
        season: 2021,
        league: 39
      },
      scorers: [],
      assists: [],
      loading: true
    }
  },
  methods: {
    changeSeason (event) {
      this.params = {
        season: event.target.value,
        league: 39
      }
    },
  }
}
</script>