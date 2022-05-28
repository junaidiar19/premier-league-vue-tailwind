<template>
<div class="table-responsive card-table">
  <table class="table">
    <thead>
      <tr>
        <th>Player</th>
        <th>Goals</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td colspan="2" align="center" class="px-6 py-4 text-gray-500">Loading...</td>
      </tr>
      <tr v-for="(item, index) in data" v-bind:key="index">
        <td>
          <div class="flex items-top gap-5">
            <p class="">{{ index+1 }}</p>
            <div>
              <p class="text-primary mb-1">{{ item.player.name }}</p>
              <div class="flex items-center gap-1">
                <img :src="item.statistics[0].team.logo" class="h-4" alt="">
                <p class="text-xs text-muted">{{ item.statistics[0].team.name }}</p>
              </div>
            </div>
          </div>
        </td>
        <td>{{ item.statistics[0].goals.total }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'ScorersView',
    data () {
      return {
        data: [],
        loading: true
      }
    },
    mounted () {
    axios.get(process.env.VUE_APP_API_URL + '/players/topscorers')
    .then(response => {
        const result = response.data.response
        console.log(result);
        this.data = result
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  }
</script>