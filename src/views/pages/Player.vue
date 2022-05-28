<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">

        <!-- skeloton -->
        <div class="flex justify-between items-center animate-pulse" :class="team.name !== '' ? 'hidden' : '' ">
          <div class="flex items-center gap-3">
            <div class="h-14 w-14 rounded-full bg-gray-200"></div>
            <div class="grid gap-y-2">
              <div class="bg-gray-200 h-4 w-48 rounded-lg"></div>
              <div class="bg-gray-200 h-3 w-24 rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- real -->
        <div class="flex justify-between items-center" :class="team.name === '' ? 'hidden' : '' ">
          <div class="flex items-center gap-3">
            <img :src="team.logo" class="h-14 w-14 rounded-full" alt="">
            <div>
              <h5 class="font-semibold text-2xl text-primary">{{ team.name }}</h5>
              <p class="text-gray-700">Players</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="bg-section">
      <div class="container py-4 md:py-8">
        <div class="table-responsive card-table" :class="loading ? 'loading-table' : '' ">
          <table class="table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Number</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in players.players" v-bind:key="index">
                <td>
                  <div class="flex items-center gap-2">
                    <img :src="item.photo" class="w-10 h-10 rounded-full" alt="">
                    <p>{{ item.name }}</p>
                  </div>
                </td>
                <td>{{ item.position }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.age }} Years</td>
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
  name: 'PlayerView',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      players: [],
      team: {
        name: '',
        logo: '',
      },
      loading: true
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_API_URL + '/players/squads?team=50')
    .then(response => {
      const result = response.data.response[0]
      this.players = result
      this.team.name = result.team.name
      this.team.logo = result.team.logo
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
}
</script>