<template>
  <div>
    <h1>Welcome!</h1>
    <nuxt-link to="/about">
      About Page
    </nuxt-link>

    <div style="text-align: center;">
      <a class="button"
      href="#"
      @click.prevent="generate">
        Generate
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: 'Home page'
  },
  methods: {
    generate () {
      let vm = this

      axios.post('/generate', {

      }, {

      })
      .then(function (resp) {

        console.log('generate', resp.data)
      })
    }
  }
}
</script>
<style>
.button {
  background-color: #00c58e;
  font-size: .875rem;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  display: inline-block;
  border-radius: .25rem;
  text-transform: uppercase;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
}

.button:hover {
  background-color: #108775;
}
</style>
