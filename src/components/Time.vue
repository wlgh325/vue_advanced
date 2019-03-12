<template>
  <div class="clock-box">
    <span>
      <div id="clock">
        <p class="date"> {{ currentDate }} </p>
        <p class="time"> {{ time }} </p>
      </div>
    </span>
  </div>
</template>

// 계산해야하는 목표 데이터를 지정하고 정의하는 방
// computed 속성은 정의된 데이터에 의존한다
// 종속 대상을 따라서 저장(캐싱)된다
// 즉 종속 대상이 변하지 않는 한 값을 계속 요청해도
// 다시 계산하지 않고 캐싱된, 이미 계산된 값을 내놓는다

<script scoped>
import { mapGetters, mapMutations } from 'vuex'
export default {
  // created전에 data와 methods 속성 정의
  // but 인스턴스가 화면에 부착되기 전
  // template 속성에 접근불가
  created () {
    this.week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  },
  computed: {
    ...mapGetters({
      currentlastDay: 'getLastDate'
    })
  },
  mounted () {
    this.timerID = setInterval(function() {
      this.realtimeClock()
    }.bind(this), 1000)

    const nowDate = new Date()

    this.year = this.zeroPadding(nowDate.getFullYear(), 4)
    this.month = this.zeroPadding(nowDate.getMonth() + 1, 2)
    this.date = this.zeroPadding(nowDate.getDate(), 2)
    this.day = nowDate.getDay()

    this.setDay(this.day)
    this.setYear(this.year)
    this.setMonth(this.month)
    this.setDate(this.date)
  },
  data () {
    return {
      week: '',
      year: '',
      month: '',
      date: '',
      hour: '',
      min: '',
      sec: '',
      time: '',
      currentDate: '',
      timerID: '',
      color: ["powderblue", "red", "white"],
      day: 0
    }
  },
  methods: {
    ...mapMutations(['addIndex', 'setYear', 'setMonth', 'setDate', 'setLastDate', 'setWeek', 'setDateNum', 'setDay']),
    realtimeClock() {
      const nowDate = new Date()

      this.hour = this.zeroPadding(nowDate.getHours(), 2)
      this.min = this.zeroPadding(nowDate.getMinutes(), 2)
      this.sec = this.zeroPadding(nowDate.getSeconds(), 2)

      //19년 12월 31일 11시 59분 59초 -> 20년 1월 1일 0시 0분 0초
      // 시간이 다음날로 넘어갈때 '일' 바꿔주기
      if (this.hour == "00" && this.min == "00" && this.sec == "00") {
        // 시간이 다음달로 넘어갈때 '달' 바꿔주기
        if (this.date == getLastDate) {
          // 시간이 다음해로 넘어갈때 '년' 바꿔주기
          if (this.month == "12") {
            this.year = this.zeroPadding(nowDate.getFullYear(), 4)
            this.setYear(this.year)
          }
          this.month = this.zeroPadding(nowDate.getMonth() + 1, 2)
          this.setMonth(this.month)
        }
        this.date = this.zeroPadding(nowDate.getDate(), 2)
        this.setDate(this.date)
      }

      this.setLastDate()
      this.setWeek()
      this.setDateNum()

      this.currentDate = this.year + '-' + this.month + '-' + this.date + ' ' + this.week[this.day]
      this.time = this.hour + ':' + this.min + ':' + this.sec


      // 시간 색깔 바꾸기
      if (this.sec * 1 >= 50 && this.sec * 1 < 55) {
        var temp = document.getElementById('clock')
        temp.style.color = this.color[0]
      }
      else if (this.sec * 1 >= 55 && this.sec * 1 <= 59) {
        var temp = document.getElementById('clock')
        temp.style.color = this.color[1]
      }
      else{
        var temp = document.getElementById('clock')
        temp.style.color = this.color[2]
      }

    },
    zeroPadding(num, digit) {
      var zero = ''

      for(let i=0; i < digit; i++){
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>


<style scoped="">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.clock-box{
    background: #0f3854;
    background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
    background-size: 100%;
}
p:focus {
    margin: 0;
    padding: 0;
}
#clock{
    font-family: Tahoma;
    text-align: center;
    color: rgb(249, 42, 9);
    text-shadow: 0 0 20px rgba(100, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
  }
    .time {
      letter-spacing: 0.05em;
      font-size: 30px;
      padding: 5px 0;
    }
    .date {
      letter-spacing: 0.1em;
      font-size: 24px;
    }
.temp {
  animation-delay: 1s;
  display: inline-block;
}
</style>
