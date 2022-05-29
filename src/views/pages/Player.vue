<template>
  <div>
    <Header />
    <div class="page-title">
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
              <p class="text-gray-700">List of Players</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="bg-section py-4">
      <div class="card-section">

        <div class="row flex-nowrap overflow-x-auto team-section mb-4">
          <div class="col-3 mb-4" v-for="(item, index) in teams" v-bind:key="index">
            <div @click="chooseTeam(item.team.id)" :class="(team.id === item.team.id) ? 'border border-primary dark:!border-white' : '' " class="p-4 shadow rounded-lg text-primary bg-white flex items-center md:gap-3 hover:shadow-md transition-all cursor-pointer dark:bg-primary-1 dark:border dark:border-primary-2 dark:text-slate-100 dark:hover:border-slate-50">
              <img :src="item.team.logo" class="md:h-8 w-auto h-auto" alt="">
              <p class="md:block hidden">{{ item.team.name }}</p>
            </div>
          </div>
        </div>

        <div class="table-responsive card-table" :class="loading ? 'loading-table' : '' ">
          <table class="table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Number</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in players.players" v-bind:key="index">
                <td>
                  <div class="flex items-center gap-2">
                    <img :src="item.photo" class="w-10 h-10 rounded-full" alt="">
                    <div>
                      <p>{{ item.name }}</p>
                      <p class="text-xs text-muted">{{ item.position }}</p>
                    </div>
                  </div>
                </td>
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
      teams: [],
      team: {
        id: '',
        name: '',
        logo: '',
      },
      params: {
        team: this.$router.currentRoute.value.query.team ?? 50,
      },
      headers: {
        'x-rapidapi-host': process.env.VUE_APP_API_HOST,
        'x-rapidapi-key': process.env.VUE_APP_API_KEY,
      },
      loading: true
    }
  },
  mounted () {
    this.getPlayers()
    this.getTeams()
  },
  methods: {
    chooseTeam(id) {
      this.params.team = id
      this.loading = true
      this.players = []

      this.getPlayers()
    },

    getPlayers() {
      axios.get(process.env.VUE_APP_API_URL + '/players/squads', {
        params: this.params,
        headers: this.headers
      })
      .then(response => {
        const result = response.data.response[0]
        this.players = result
        this.team.id = result.team.id
        this.team.name = result.team.name
        this.team.logo = result.team.logo
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    },

    getTeams () {
      axios.get(process.env.VUE_APP_API_URL + '/standings', {
        params: {
          season: 2021,
          league: 39,
        },
        headers: {
          'x-rapidapi-host': process.env.VUE_APP_API_HOST,
          'x-rapidapi-key': process.env.VUE_APP_API_KEY,
        }
      })
      .then(response => {
        const data = response.data.response[0].league.standings[0]
        this.teams = data
      })
      .catch(error => {
        console.log(error)
      })
    }

  }
}
</script>

<style scoped>

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.team-section::-webkit-scrollbar {
  overflow: hidden;
  width: 2px;
  height: 6px;
  background-color: #dcdbdb; /* or add it to the track */
  border-radius: 10px;
  margin: auto 0;
}

/* Add a thumb */
.team-section::-webkit-scrollbar-thumb {
  background: #4c4c6d;
  border-radius: 10px;
}
</style>