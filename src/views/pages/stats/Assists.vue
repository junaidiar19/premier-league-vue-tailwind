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
              <p class="text-primary mb-1 dark:text-slate-100">{{ item.player.name }}</p>
              <div class="flex items-center gap-1">
                <img :src="item.statistics[0].team.logo" class="h-4" alt="">
                <p class="text-xs text-muted dark:text-slate-400">{{ item.statistics[0].team.name }}</p>
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
  export default {
    name: 'AssistsView',
    props: [{
      name: 'loading',
      type: Boolean,
      default: false,
    }, {
      name: 'scorers',
      type: Array,
      default: () => [],
    }],
    data () {
      return {
        data: [],
      }
    },
    mounted () {
      this.data = this.assists;
    }
  }
</script>