<template>
<div class="table-responsive card-table" :class="loading ? 'loading-table' : '' ">
  <table class="table">
    <thead>
      <tr>
        <th>Player</th>
        <th>Assist</th>
      </tr>
    </thead>
    <tbody>
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
        <td>{{ item.statistics[0].goals.assists }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'AssistsView',
    props: ['season'],
    data () {
      return {
        data: [],
        loading: true
      }
    },
    mounted () {
      this.getAssists();
    },
    methods: {
      getAssists () {
        axios.get(process.env.VUE_APP_API_URL + '/players/topassists', {
          params: {
            season: this.season,
            league: 39
          }
        })
        .then(response => {
          const result = response.data.response
          this.data = result
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loading = false)
      }
    }
  }
</script>