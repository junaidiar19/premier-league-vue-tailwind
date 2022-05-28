<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md bg-white">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">English Premier League</h5>
            <p class="text-gray-700">Standings</p>
          </div>
          <div>
            <select>
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
        <div class="table-responsive card-table">
          <table class="table">
              <thead>
                <tr>
                    <th scope="col" colspan="2">Club</th>
                    <th scope="col">MP</th>
                    <th scope="col">W</th>
                    <th scope="col">D</th>
                    <th scope="col">L</th>
                    <th scope="col">PTS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td colspan="7" align="center" class="px-6 py-4 text-gray-500">Loading...</td>
                </tr>
                <tr v-for="(item, index) in standings" v-bind:key="index">
                  <td v-if="item.description === 'Promotion - Champions League (Group Stage)'" class="border-l-4 border-blue-500" width="10">{{ item.rank }}</td>
                  <td v-else-if="item.description === 'Promotion - Europa League (Group Stage)'" class="border-l-4 border-green-500" width="10">{{ item.rank }}</td>
                  <td v-else-if="item.description === 'Promotion - Europa Conference League (Qualification)'" class="border-l-4 border-yellow-400" width="10">{{ item.rank }}</td>
                  <td v-else-if="item.description === 'Relegation - Championship'" class="border-l-4 border-red-500" width="10">{{ item.rank }}</td>
                  <td v-else width="10">{{ item.rank }}</td>
                  <td class="!pl-0">
                    <div class="flex items-center gap-3">
                      <img v-bind:src="item.team.logo" class="h-8" alt="">
                      {{ item.team.name }}
                    </div>
                  </td>
                  <td>{{ item.all.played }}</td>
                  <td>{{ item.all.win }}</td>
                  <td>{{ item.all.draw }}</td>
                  <td>{{ item.all.lose }}</td>
                  <td>{{ item.points }}</td>
                </tr>
              </tbody>
          </table>
        </div>
        <div class="p-4 rounded-lg bg-white shadow">
          <p class="font-semibold mb-2">Qualification/Relegation</p>
          <div class="flex items-center gap-2" v-for="(item, index) in qualifications" v-bind:key="index">
            <div :class="item.color" class="p-1"></div>
            <p class="text-sm">{{ item.description }}</p>
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
import axios from 'axios'

export default {
  name: 'StandingView',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      standings: [],
      loading: true,
      qualifications: [
        {
          description: 'Promotion - Champions League (Group Stage)',
          color: 'bg-blue-500',
        },
        {
          description: 'Promotion - Europa League (Group Stage)',
          color: 'bg-yellow-400',
        },
        {
          description: 'Promotion - Europa Conference League (Qualification)',
          color: 'bg-green-500',
        },
        {
          description: 'Relegation - Championship',
          color: 'bg-red-500',
        },
      ]
    }
  },
  mounted () {
    axios.get(process.env.VUE_APP_API_URL + '/standings')
    .then(response => {
        const data = response.data.response[0].league.standings[0]
        console.log(data);
        this.standings = data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>