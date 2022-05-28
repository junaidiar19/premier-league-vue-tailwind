<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
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
      <div class="container py-4 md:py-8">
        <p class="font-semibold mb-3">Total: {{ total }}</p>
        <div class="table-responsive card-table">
          <table class="table">
            <thead>
              <tr>
                <th>League</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="2" align="center" class="px-6 py-4 text-gray-500">Loading...</td>
              </tr>
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
    axios.get(process.env.VUE_APP_API_URL + '/leagues')
    .then(response => {
      const result = response.data.response
      console.log(result);
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