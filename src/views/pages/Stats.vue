<template>
  <div>
    <Header />
    <div class="page-title">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">Stats</h5>
            <p class="text-gray-700">It's about the most goals and assists</p>
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
      <div class="card-section">

        <div class="md:hidden mb-4 md:mb-0">
          <select @change="changeSeason($event)" class="custom-select">
            <option value="2021">2021-2022 Season</option>
            <option value="2020">2020-2021 Season</option>
            <option value="2019">2019-2020 Season</option>
          </select>
        </div>

        <div class="row">
          <div class="md:col-6">
            <p class="font-semibold text-primary mb-3 dark:text-slate-100">TOP SCORERS</p>

            <ScorersView :loading="loading" :scorers="scorers" />

          </div>
          <div class="md:col-6">
            <p class="font-semibold text-primary mb-3 dark:text-slate-100">TOP ASSISTS</p>

            <AssistsView :loading="loading" :assists="assists"/>

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
import axios from 'axios'

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
      scorers: [],
      assists: [],
      loading: true,
      params: {
        season: 2021,
        league: 39
      },
      headers: {
          'x-rapidapi-host': process.env.VUE_APP_API_HOST,
          'x-rapidapi-key': process.env.VUE_APP_API_KEY,
        }
    }
  },
  mounted() {
    this.getScorers()
    this.getAssists()
  },
  methods: {
    changeSeason (event) {
      this.params = {
        season: event.target.value,
        league: 39
      }

      this.loading = true;
      this.scorers = [];
      this.assists = [];

      this.getScorers();
      this.getAssists();
    },
    getScorers () {
      axios.get(process.env.VUE_APP_API_URL + '/players/topscorers', {
        params: this.params, headers: this.headers
      })
      .then(response => {
        const result = response.data.response
        this.scorers = result

        setTimeout(() => {
          this.loading = false
        }, 100)

      })
      .catch(error => {
        console.log(error)
      })
    },
    getAssists () {
      axios.get(process.env.VUE_APP_API_URL + '/players/topassists', {
        params: this.params, headers: this.headers
      })
      .then(response => {
        const result = response.data.response
        this.assists = result

        setTimeout(() => {
          this.loading = false
        }, 100)
        
      })
      .catch(error => {
        console.log(error)
      })
    },
  }
}
</script>