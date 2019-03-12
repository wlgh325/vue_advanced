<template lang="html">
   <div class="Navigation">
      <ul class="navilist">
        <router-link to="/"><li class="active">Home</li></router-link>
        <router-link to="/Calendar"><li>Calendar</li></router-link>
        <router-link to="/Contact"><li>Contact</li></router-link>
      </ul>
   </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
ul.navilist {
  list-style-type: none;
  margin-top: 2vw;
  padding: 0;
  border: 1px solid #e7e7e7;
  background-color: #333;
  position: sticky;
  overflow: hidden;
}
.navilist li {
  float:left;
  border-right: 1px solid #bbb;
  padding: 2vw;
  text-align: center;
}
li:last-child {
  border-right: none;
}
li a{
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}
/* Change the link color to #111 (black) on hover */
.navilist a:hover {
  background-color: #111;
}
.navilist a:visited {
  color: white;
}

.router-link-exact-active li{
  background-color: #4CAF50;
}
</style>
