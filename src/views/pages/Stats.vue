<template>
  <div>
    <Header />
    <div class="py-5 border-b shadow-md">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="font-semibold text-2xl text-primary">English Premier League</h5>
            <p class="text-gray-700">Statistic</p>
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
        <div class="row">
          <div class="md:col-6">
            <p class="font-semibold text-primary mb-3">TOP SCORERS</p>

            <div class="table-responsive card-table">
              <table class="table">
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Goals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="flex items-top gap-5">
                        <p class="">1</p>
                        <div>
                          <p class="text-primary mb-1">Kevin Debuyrne</p>
                          <div class="flex items-center gap-1">
                            <img src="https://media.api-sports.io/football/teams/50.png" class="h-4" alt="">
                            <p class="text-xs text-muted">Manchester City</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="flex items-top gap-5">
                        <p class="">2</p>
                        <div>
                          <p class="text-primary mb-1">Mohammed Salah</p>
                          <div class="flex items-center gap-1">
                            <img src="https://media.api-sports.io/football/teams/40.png" class="h-4" alt="">
                            <p class="text-xs text-muted">Liverpool</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div class="md:col-6">
            <p class="font-semibold text-primary mb-3">TOP ASSISTS</p>

            <div class="table-responsive card-table">
              <table class="table">
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Assists</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="flex items-top gap-5">
                        <p class="">1</p>
                        <div>
                          <p class="text-primary mb-1">Kevin Debuyrne</p>
                          <div class="flex items-center gap-1">
                            <img src="https://media.api-sports.io/football/teams/50.png" class="h-4" alt="">
                            <p class="text-xs text-muted">Manchester City</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="flex items-top gap-5">
                        <p class="">2</p>
                        <div>
                          <p class="text-primary mb-1">Mohammed Salah</p>
                          <div class="flex items-center gap-1">
                            <img src="https://media.api-sports.io/football/teams/40.png" class="h-4" alt="">
                            <p class="text-xs text-muted">Liverpool</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>

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

export default {
  name: 'StatsView',
  components: {
    Header,
    Footer,
  }
}
</script>