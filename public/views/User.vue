<template>
  <div>
    <h2>{{ articleData.title }}</h2>
    <el-card 
      v-for="(paragraph, index) in articleData.pharagraphs"
      :key="index"
      class="box-card"
      style="margin: 40px;"
      body-style="{ padding: '20px' }">
      <p>{{ paragraph }}</p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input"
        v-model="input[index]">
      </el-input>
      <el-button
        type="primary"
        @click="saveChanges(index)">
        Send changes
      </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: {},
      input: []
    }
  },
  props: ['query'],
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const self = this
      const apiGetArticleUrl = `api/article?url=${self.query}`
      
      self.$http.get(apiGetArticleUrl).then(response => {
        self.articleData = response.body
      }, response => {
        console.log('User.vue get data error')
      })
    },
    saveChanges (index) {
      const self = this
      const pharagraph = self.articleData.pharagraphs.filter((value, key) => {
        if ( key === index) return value
      })
      const newPharagraph = self.input.filter((value, key) => {
        if ( key === index) return value
      })
      
      if (typeof newPharagraph[0] !== 'undefined') {
      
        const body = {
          articleUrl: this.query,
          originalText: pharagraph[0],
          usersText: newPharagraph[0],
          isApproved: false
        }
        self.$http.post('/api/correction-save', body).then(response => {
        }, response => {
          console.log('User.vue get data error')
        })
      } else {
        alert('Please write some in input before save!')
      }
    }
  }
}
</script>
