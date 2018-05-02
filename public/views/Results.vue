<template>
  <div>
    <el-card 
      v-for="(correction, index) in corrections"
      :key="correction._id"
      class="box-card"
      style="margin: 40px;"
      body-style="{ padding: '20px' }">
      <div>
        <p><b>Article url:</b></P>
        <p>{{ correction.articleUrl }}</p>
      </div>
      <div>
        <p><b>Original text:</b></P>
        <p>{{ correction.originalText }}</p>
      </div>
      <div>
        <p><b>Users text:</b></P>
        <p>{{ correction.usersText }}</p>
      </div>
      <el-button
        type="success"
        @click="approveCorr(correction._id)">
        Approve</el-button>
      <el-button
        type="danger"
        @click="deleteCorr(correction._id)">
        Delete</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      corrections: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const self = this
      const apiGetListOfCorrections = `/api/corrections`
      
      self.$http.get(apiGetListOfCorrections).then(response => {
        self.corrections = response.body.filter(item => {
          if (item.isApproved !== true) return item
        })
      }, response => {
        console.log('Results.vue get data error')
      })
    },
    approveCorr (id) {
      const body = this.corrections.filter(item => {
        if (item._id === id) {
          item.isApproved = true
          return item
        }
      })
      this.corrections = this.corrections.filter(item => {
        if (item._id !== id) return item
      })
      this.$http.put(`/api/corrections/update/${id}`, body[0]).then(response => {
      }, response => {
        console.log('Results.vue update data error')
      })
    },
    deleteCorr (id) {
      this.corrections = this.corrections.filter(item => {
        if (item._id !== id) return item
      })
      const body = this.corrections.filter(item => {
        if (item._id === id) return item
      })
      this.$http.delete(`/api/corrections/delete/${id}`, body[0]).then(response => {
      }, response => {
        console.log('Results.vue delete data error')
      })
    }
  }
}
</script>
