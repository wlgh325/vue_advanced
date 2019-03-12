<template>
  <div id="axi">

    <div v-for = "post in Mydata" v-bind:key="post.id">
      <h1>{{post}}</h1>
    </div>
    <button v-on:click="searchTerm">글 불러오기</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios',
  data: function(){
    return{
      error:0,
      loading:true,
      Mydata: { data:0}
    }
  },
  created(){
    this.Mydata = '';
  },
  methods: {
    searchTerm: function () {
      // // using JSONPlaceholder
      // const baseURI = 'http://localhost:8081/index.jsp'
      // axios.get(`${baseURI}`).then((response) => {
      //   console.log(response);
      //   this.loading = false;
      //   this.error = 0;
      // });
    }
  }
}
</script>

<style>
#axi {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 560px;
}
</style>
