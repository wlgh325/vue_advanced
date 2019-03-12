<template>
  <div class="computed-box">
     <span> Computed: </span>
     <input type="text" v-model="newNumber" placeholder="Type number"
     v-on:keyup.enter="cal(newNumber)">
     <ul>
        <li v-for="(gugu,index) in newgugudan">
           <p> {{newNumber}} * {{index + 1}} = {{ gugu }} </p>
        </li>
     </ul>
  </div>
</template>

// 계산해야하는 목표 데이터를 지정하고 정의하는 방
// computed 속성은 정의된 데이터에 의존한다
// 종속 대상을 따라서 저장(캐싱)된다
// 즉 종속 대상이 변하지 않는 한 값을 계속 요청해도
// 다시 계산하지 않고 캐싱된, 이미 계산된 값을 내놓는다

<script>
export default {
   data() {
      return {
         gugudan: [],
         newNumber: '3'
      }
   },
   computed: {
      newgugudan(){
         get: {
            var temp = [];

            for(let i=0; i<9; i++){
               temp[i] = this.newNumber * (i+1);
            }
            return temp
         }
      }
   }
}
</script>


<style>

</style>
