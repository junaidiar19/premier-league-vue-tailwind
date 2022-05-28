<template>
  <div>
    <Header />
    <div class="page-title">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">Leagues</h5>
            <p class="text-gray-700">List of available leagues in the world</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-section">
      <div class="card-section">
        <p class="font-semibold mb-3 dark:text-slate-400">Total: {{ total }}</p>
        <div class="table-responsive card-table" :class="loading ? 'loading-table' : '' ">
          <table class="table">
            <thead>
              <tr>
                <th>League</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in leagues" v-bind:key="index">
                <td>
                  <div class="flex items-center gap-3">
                    <img :src="item.league.logo" class="h-10" alt="">
                    <div>
                      <p>{{ item.league.name }}</p>
                      <p class="text-xs text-muted">League</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex items-center gap-3">
                    <img :src="item.country.flag" class="h-10" alt="">
                    <div>
                      <p>{{ item.country.name }}</p>
                      <p class="text-xs text-muted">{{ item.league.code }}</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
import axios from 'axios'

export default {
  name: 'LeagueView',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      leagues: [],
      total: 0,
      loading: true
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_API_URL + '/leagues', {
        params: {
          type: 'league'
        },
        headers: {
          'x-rapidapi-host': process.env.VUE_APP_API_HOST,
          'x-rapidapi-key': process.env.VUE_APP_API_KEY,
        }
    })
    .then(response => {
      const result = response.data.response
      this.leagues = result
      this.total = result.length
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
}
</script>