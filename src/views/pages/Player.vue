<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3">
            <img src="https://media.api-sports.io/football/teams/50.png" class="h-14 w-14 rounded-full" alt="">
            <div>
              <h5 class="font-semibold text-2xl text-primary">Manchester City</h5>
              <p class="text-gray-700">Players</p>
            </div>
          </div>
          <div>
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
                <th>Player</th>
                <th>Position</th>
                <th>Number</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="flex items-center gap-2">
                    <img src="https://media.api-sports.io/football/players/882.png" class="w-10 h-10 rounded-full" alt="">
                    <p>David de Gea</p>
                  </div>
                </td>
                <td>Goal Keeper</td>
                <td>20</td>
                <td>31 Years</td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center gap-2">
                    <img src="https://media.api-sports.io/football/players/2935.png" class="w-10 h-10 rounded-full" alt="">
                    <p>Harry Maguire</p>
                  </div>
                </td>
                <td>Defender</td>
                <td>5</td>
                <td>28 Years</td>
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

export default {
  name: 'PlayerView',
  components: {
    Header,
    Footer,
  }
}
</script>