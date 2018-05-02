<template>
  <div>
    <el-button type="primary" @click="pcClick(url)">Propose changes</el-button> from {{ url }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788'
      }
    },
    methods: {
      pcClick (url) {
        this.$router.push({name: 'User', query: { articleURL: url }})
      }
    }
  }
</script>
