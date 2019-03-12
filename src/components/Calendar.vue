<template>
  <div id="Contents">
    <header>
      <span class="Left Button" type="button" @click="Button(prevDate)">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </span>
      <h1>{{year + '년' + ' ' + month + '월'}}</h1>
      <span class="Right Button" type="button" @click="Button(nextDate)">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </header>
    <div id="calendar">
      <ul class="weekdays">
        <li>Sunday</li>
        <li>Monday</li>
        <li>TuesDay</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
      </ul>
      <!-- Days -->
      <ul class="days">
        <li v-for="(day, index) in days" @click="showModal = true" v-bind:class="dateClassName[index]">
          <div class="date"> {{ day }} </div>
          <div class="event">
            <div class="event-desc">
              test
            </div>
            <div class="event-time">
              1:00pm to 3:00pm
            </div>
          </div>
          <div >

          </div>
        </li>
      </ul>
    </div>

    <modal v-if="showModal" @close="showModal = false" >
      <h3 slot="header">할 일 추가</h3>
      <h3 slot="body">
        <input type="text" placeholder="추가 할일을 입력해주세요"
        v-on:keyup.enter="addTodo" v-on:keyup="esc" autofocus>
        <input type="text" placeholder="시간을 입력해주세요"
        v-on:keyup.enter="addTodo" v-on:keyup="esc">
      </h3>
      <span slot="footer">
          <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="showModal = false"></i>
      </span>
    </modal>
  </div>
</template>

<script scoped>
import { mapGetters, mapMutations } from 'vuex'
import Modal from './common/Modal.vue'

export default {
  data () {
    return {
      prevDate: '',
      nextDate: '',
      day: 0,
      year: '',
      month: '',
      date: '',
      lastDate: 0,
      week: 0,
      days: [],
      todo: [],
      showModal: false,
      index: 0,
      dateClassName: [],
      preLastDate: 0
    }
  },
  computed: {
    ...mapGetters({
      currentYear: 'getNowYear',
      currentMonth: 'getNowMonth',
      currentDate: 'getNowDate',
      dateString: 'getDateString',
      currentLastDate: 'getLastDate',
      currentWeek: 'getWeek',
      dateNum: 'getDateNum',
      allLastDate: 'getAllLastDate'
    }),
  },
  mounted () {
    init: {
      // 달력 컴포넌트만의 년, 월, 일 데이터 Set
      // 처음에는 당일 현재 날짜 달력을 가져오기
      this.year = this.currentYear
      this.month = this.currentMonth
      this.date = this.currentDate
      this.lastDate = this.currentLastDate
      this.week = this.currentWeek

      // 이전달과 다음달 날짜 Set
      this.setCalendarDate()

      var setDate = new Date(this.currentYear * 1, this.currentMonth * 1, 1)
      this.day = setDate.getDay()
      this.createCalendar()
    }
  },
  methods: {
    ...mapMutations(['setYear', 'setMonth', 'setDate', 'setLastDate', 'setWeek', 'setDay', 'addTodo']),
    Button (newDate) {
      // 년, 월, 일 셋팅하기
      var year = newDate.getFullYear()
      var month = newDate.getMonth() + 1
      var date = newDate.getDate()

      // 새로 바뀐 년, 월, 일 정보들 셋팅
      this.year = year
      this.month = month
      this.date = date

      // 달의 첫 날이 무슨 요일인지 받아오기
      var setDate = new Date(this.year * 1, this.month * 1 - 1, 1)
      this.day = setDate.getDay()

      // 달의 마지막 일
      this.lastDate = this.allLastDate[this.month-1];
      this.week = Math.ceil( ( this.day + this.lastDate ) / 7 )

      /*
        윤년계산
      */
      // 2월 달인 경우만 계산
      // 4로 나누어 떨어지고
      // 100으로 나누어 떨어지지 않고
      // 400으로 나누어 떨어지는 년은 윤년
      if (this.month == 2) {
        if (this.year % 4 == 0 && this.year % 100 != 0) {
          this.lastDate = 29
        }
        else {
          if (this.year % 400 == 0) {
            this.lastDate = 29
          }
        }
      }
      this.setCalendarDate()
      this.createCalendar()
    },
    createCalendar() {
      this.days = []
      this.dateClassName = []

      var num = 1
      var currentCell = 0

      var temp = this.preLastDate - this.day

      // 이전 달 넣기
      for(let i = 0; i <= this.day; i++){
        this.days.push(temp)
        this.dateClassName.push('other-month')
        temp++
      }

      for(var i = 0; i < this.week; i++) {
        for(var j = 0; j < 7; j++) {
          if( currentCell < this.day || num > this.lastDate ) {
            currentCell++
            continue;
          }
          else {
            this.days.push(num++)
            this.dateClassName.push('')
          }
        }
      }

      // 다음 달
      for(let length=this.days.length, i=1; length < this.week * 7; length++, i++){
        this.days.push(i)
        this.dateClassName.push('other-month')
      }

    },
    setCalendarDate() {
      // 작년으로 넘어갈 경우
      if(this.month != 1){
        this.prevDate = new Date( this.year * 1, this.month * 1 -2, 1 )
        this.preLastDate = this.allLastDate[this.month-2];
      }
      else{
        this.prevDate = new Date( this.year * 1 - 1, 11, 1 )
        this.preLastDate = this.allLastDate[11]
      }


      // 다음 해로 넘어갈 경우
      if(this.month != 12)
        this.nextDate = new Date( this.year * 1, this.month * 1, 1)
      else
        this.nextDate = new Date( this.year * 1 + 1, 0, 1)
    },
    addTodo() {
      var className = 'event-desc'
      var doc = document.getElementsByClassName("event-desc")
      doc[1].innerHTML = "click"
    },
    esc() {
      if (event.key == 'Escape') {
        this.showModal = false;
      }
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
header {
  text-align: center;
}
h1 {
  display: inline;
}
.Button {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  font-size: 30px;
}
#Contents {
  font-family: Tahoma;
  width: 100%;
}
#calendar {
  font-family: Tahoma;
  margin: auto;
  width: 80%;
  height: 70%;
  /* margin: auto; */
}
#calendar a {
  color: #8e352e;
  text-decoration: none;
}
#calendar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
#calendar li {
  display: block;
  float: left;
  width: 14.342%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-right: -1px;
  margin-bottom: -1px;
}
#calendar ul.weekdays {
  height: 40px;
  background: #8e352e;
}
#calendar ul.weekdays li {
  text-align: center;
  text-transform: uppercase;
  line-height: 20px;
  border: none !important;
  padding: 10px 6px;
  color: #fff;
  font-size: 13px;
}
#calendar .days li {
  height: 180px;
}
#calendar .days li:hover {
  background: #d3d3d3;
}
#calendar .date {
  text-align: center;
  margin-bottom: 5px;
  padding: 4px;
  background: #333;
  color: #fff;
  width: 20px;
  border-radius: 50%;
  float: right;
}
#calendar .event {
  clear: both;
  display: block;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-top: 40px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #e4f2f2;
  border: 1px solid #b5dbdc;
  color: #009aaf;
  text-decoration: none;
}
#calendar .event-desc {
  color: #666;
  margin: 3px 0 7px 0;
  text-decoration: none;
}
#calendar .other-month {
  background: #f5f5f5;
  color: #666;
}
/* ============================
      Mobile Responsiveness
   ============================*/
@media (max-width: 768px) {
  #calendar .weekdays, #calendar .other-month {
    display: none;
  }
  #calendar li {
    height: auto !important;
    border: 1px solid #ededed;
    width: 100%;
    padding: 10px;
    margin-bottom: -1px;
  }
  #calendar .date {
    float: none;
  }
}
</style>
