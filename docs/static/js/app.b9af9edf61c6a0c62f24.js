webpackJsonp([1],{"0gNH":function(t,e){},"333y":function(t,e){},"49d2":function(t,e){},"8GTC":function(t,e){},"9V+n":function(t,e){},MRHw:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),o=a("/ocq"),n=a("Dd8w"),i=a.n(n),r=a("NYxO"),d={created:function(){this.week=["SUN","MON","TUE","WED","THU","FRI","SAT"]},computed:i()({},Object(r.b)({currentlastDay:"getLastDate"})),mounted:function(){this.timerID=setInterval(function(){this.realtimeClock()}.bind(this),1e3);var t=new Date;this.year=this.zeroPadding(t.getFullYear(),4),this.month=this.zeroPadding(t.getMonth()+1,2),this.date=this.zeroPadding(t.getDate(),2),this.day=t.getDay(),this.setDay(this.day),this.setYear(this.year),this.setMonth(this.month),this.setDate(this.date)},data:function(){return{week:"",year:"",month:"",date:"",hour:"",min:"",sec:"",time:"",currentDate:"",timerID:"",color:["powderblue","red","white"],day:0}},methods:i()({},Object(r.c)(["addIndex","setYear","setMonth","setDate","setLastDate","setWeek","setDateNum","setDay"]),{realtimeClock:function(){var t=new Date;if(this.hour=this.zeroPadding(t.getHours(),2),this.min=this.zeroPadding(t.getMinutes(),2),this.sec=this.zeroPadding(t.getSeconds(),2),"00"==this.hour&&"00"==this.min&&"00"==this.sec&&(this.date==getLastDate&&("12"==this.month&&(this.year=this.zeroPadding(t.getFullYear(),4),this.setYear(this.year)),this.month=this.zeroPadding(t.getMonth()+1,2),this.setMonth(this.month)),this.date=this.zeroPadding(t.getDate(),2),this.setDate(this.date)),this.setLastDate(),this.setWeek(),this.setDateNum(),this.currentDate=this.year+"-"+this.month+"-"+this.date+" "+this.week[this.day],this.time=this.hour+":"+this.min+":"+this.sec,1*this.sec>=50&&1*this.sec<55)document.getElementById("clock").style.color=this.color[0];else if(1*this.sec>=55&&1*this.sec<=59){document.getElementById("clock").style.color=this.color[1]}else{document.getElementById("clock").style.color=this.color[2]}},zeroPadding:function(t,e){for(var a="",s=0;s<e;s++)a+="0";return(a+t).slice(-e)}})},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clock-box"},[e("span",[e("div",{attrs:{id:"clock"}},[e("p",{staticClass:"date"},[this._v(" "+this._s(this.currentDate)+" ")]),this._v(" "),e("p",{staticClass:"time"},[this._v(" "+this._s(this.time)+" ")])])])])},staticRenderFns:[]};var c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Navigation"},[e("ul",{staticClass:"navilist"},[e("router-link",{attrs:{to:"/"}},[e("li",{staticClass:"active"},[this._v("Home")])]),this._v(" "),e("router-link",{attrs:{to:"/Calendar"}},[e("li",[this._v("Calendar")])]),this._v(" "),e("router-link",{attrs:{to:"/Contact"}},[e("li",[this._v("Contact")])])],1)])},staticRenderFns:[]};var h={components:{Time:a("VU/8")(d,l,!1,function(t){a("ubGH")},"data-v-10de4acb",null).exports,Navigation:a("VU/8")({},c,!1,function(t){a("rz52")},"data-v-b858d806",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[this._m(0),this._v(" "),e("div",{staticClass:"date"},[e("Time")],1),this._v(" "),e("Navigation")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",{staticClass:"headerText animated bounce"},[this._v("TODO it!")])])}]};var m={components:{TodoHeader:a("VU/8")(h,u,!1,function(t){a("9V+n")},null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("TodoHeader"),this._v(" "),e("transition",{attrs:{name:"page","enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutLeft"}},[e("router-view")],1)],1)},staticRenderFns:[]};var v=a("VU/8")(m,f,!1,function(t){a("8GTC")},null,null).exports,p=a("mvHQ"),y=a.n(p),_={state:{todoItems:function(){var t=[];if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!=localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}(),modification:"",index:0,nowYear:"",nowMonth:"",nowDate:"",dateString:["sun","mon","tue","wed","thu","fri","sat"],allLastDate:[31,28,31,30,31,30,31,31,30,31,30,31],nowLastDate:0,week:0,dateNum:0,nowDay:0},getters:{getTodoItems:function(t){return t.todoItems},getNowYear:function(t){return t.nowYear},getNowMonth:function(t){return t.nowMonth},getNowDate:function(t){return t.nowDate},getDateString:function(t){return t.dateString},getLastDate:function(t){return t.nowLastDate},getWeek:function(t){return t.week},getDateNum:function(t){return t.dateNum},getAllLastDate:function(t){return t.allLastDate}},mutations:{addTodo:function(t,e){var a={item:e,isFilled:!1,completed:!1};localStorage.setItem(e,y()(a)),t.todoItems.push(a)},removeTodo:function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},clearAll:function(t){localStorage.clear(),t.todoItems=[]},importantTodo:function(t,e){var a=localStorage.key(e.index);t.todoItems[e.index].isFilled=!e.todoItem.isFilled,console.log(e.todoItem),console.log(e.index),localStorage.removeItem(a),localStorage.setItem(e.todoItem.item,y()(e.todoItem))},modifyTodo:function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems[e.editIndex].item=e.editItem,localStorage.setItem(e.editItem,y()(e.todoItem))},toggleCompleted:function(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,y()(e.todoItem))},setYear:function(t,e){t.nowYear=e},setMonth:function(t,e){t.nowMonth=1*e},setDate:function(t,e){t.nowDate=e},setLastDate:function(t){t.nowLastDate=t.allLastDate[t.nowMonth-1]},setWeek:function(t){t.week=Math.ceil((t.nowDay+t.nowLastDate)/7)},setDateNum:function(t){t.dateNum=1-t.nowDay},setDay:function(t,e){t.nowDay=e}}};s.a.use(r.a);var g=new r.a.Store({modules:{todoApp:_}}),D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal","enter-active-class":"animated fadeIn"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n            default header\n          ")])],2),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t._t("footer",[t._v("\n            default footer\n            "),a("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("\n              OK\n            ")])])],2)])])])])},staticRenderFns:[]};var w=a("VU/8")({},D,!1,function(t){a("cx/O")},null,null).exports,C={data:function(){return{editItem:"",editIndex:"",todoItem:[],showModal:!1}},computed:i()({},Object(r.b)({todoItems:"getTodoItems"})),methods:i()({},Object(r.c)(["removeTodo","toggleCompleted","importantTodo"]),{modifyTodo:function(){var t={todoItem:this.todoItem,editItem:this.editItem,editIndex:this.editIndex};this.showModal=!this.showModal,this.$store.commit("modifyTodo",t)},showEditModal:function(t,e){this.todoItem=t,this.editItem=t.item,this.editIndex=e,this.showModal=!0},esc:function(){"Escape"==event.key&&(this.showModal=!1)}}),components:{Modal:w}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.todoItems,function(e,s){return a("li",{key:e.item,staticClass:"shadow"},[a("i",{staticClass:"checkBtn fas fa-check",class:{checkBtnCompleted:e.completed},attrs:{"aria-hidden":"true"},on:{click:function(a){return t.toggleCompleted({todoItem:e,index:s})}}}),t._v(" "),a("span",{class:{textCompleted:e.completed}},[t._v(t._s(e.item))]),t._v(" "),a("span",{staticClass:"importantBtn",attrs:{type:"button"},on:{click:function(a){return t.importantTodo({todoItem:e,index:s})}}},[a("i",{class:{"far fa-star":!e.isFilled,"fas fa-star":e.isFilled},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"removeBtn",attrs:{type:"button"},on:{click:function(a){return t.removeTodo({todoItem:e,index:s})}}},[a("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"modifyBtn",attrs:{type:"button"},on:{click:function(a){return t.showEditModal(e,s)}}},[a("i",{staticClass:"fas fa-pen-square",attrs:{"aria-hidden":"true"}})])])}),0),t._v(" "),t.showModal?a("modal",{on:{close:function(e){t.showModal=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("할 일 수정")]),t._v(" "),a("h3",{attrs:{slot:"body"},slot:"body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.editItem,expression:"editItem"}],attrs:{type:"text",placeholder:"수정 할일 입력해주세요",autofocus:""},domProps:{value:t.editItem},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.modifyTodo(e)},t.esc],input:function(e){e.target.composing||(t.editItem=e.target.value)}}}),t._v(" "),a("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.showModal=!1}}})]),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"})]):t._e()],1)},staticRenderFns:[]};var I=a("VU/8")(C,k,!1,function(t){a("hsZJ")},"data-v-f4d83bc8",null).exports,M={methods:i()({},Object(r.c)({clearTodo:"clearAll"}))},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearAllContainer"},[e("span",{staticClass:"clearAllBtn",on:{click:this.clearTodo}},[this._v("Clear All")])])},staticRenderFns:[]};var x={data:function(){return{newTodoItem:"",showModal:!1}},methods:{addTodo:function(){if(""!=this.newTodoItem){var t=this.newTodoItem&&this.newTodoItem.trim();this.$store.commit("addTodo",t),this.clearInput()}else this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{Modal:w}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"inputBox shadow"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"Type what you have to do"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),t._v(" "),a("span",{staticClass:"addContainer",on:{click:t.addTodo}},[a("i",{staticClass:"addBtn fas fa-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.showModal?a("modal",{on:{close:function(e){t.showModal=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고")]),t._v(" "),a("h3",{attrs:{slot:"body"},slot:"body"}),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n        할 일을 입력하세요\n        "),a("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.showModal=!1}}})])]):t._e()],1)},staticRenderFns:[]};var N={name:"Home",components:{TodoList:I,TodoFooter:a("VU/8")(M,T,!1,function(t){a("0gNH")},null,null).exports,TodoInput:a("VU/8")(x,b,!1,function(t){a("WgrK")},"data-v-a2459ab6",null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("TodoInput"),this._v(" "),e("TodoList"),this._v(" "),e("TodoFooter")],1)},staticRenderFns:[]};var E=a("VU/8")(N,L,!1,function(t){a("333y")},null,null).exports,S=a("mtWM"),F=a.n(S),O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"axi"}},[t._l(t.Mydata,function(e){return a("div",{key:e.id},[a("h1",[t._v(t._s(e))])])}),t._v(" "),a("button",{on:{click:t.searchTerm}},[t._v("글 불러오기")])],2)},staticRenderFns:[]};a("VU/8")({name:"axios",data:function(){return{error:0,loading:!0,Mydata:{data:0}}},created:function(){this.Mydata=""},methods:{searchTerm:function(){}}},O,!1,function(t){a("49d2")},null,null).exports;var $={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("audio",{attrs:{id:"player",loop:"",controls:""}},[e("source",{attrs:{id:"audioSource",src:a("lAKl"),type:"audio/mp3"}})])])}]};var B=a("VU/8")({methods:{}},$,!1,function(t){a("MRHw")},"data-v-3362eb2a",null).exports,H={data:function(){return{prevDate:"",nextDate:"",day:0,year:"",month:"",date:"",lastDate:0,week:0,days:[],todo:[],showModal:!1,index:0,dateClassName:[],preLastDate:0}},computed:i()({},Object(r.b)({currentYear:"getNowYear",currentMonth:"getNowMonth",currentDate:"getNowDate",dateString:"getDateString",currentLastDate:"getLastDate",currentWeek:"getWeek",dateNum:"getDateNum",allLastDate:"getAllLastDate"})),mounted:function(){this.year=this.currentYear,this.month=this.currentMonth,this.date=this.currentDate,this.lastDate=this.currentLastDate,this.week=this.currentWeek,this.setCalendarDate();var t=new Date(1*this.currentYear,1*this.currentMonth,1);this.day=t.getDay(),this.createCalendar()},methods:i()({},Object(r.c)(["setYear","setMonth","setDate","setLastDate","setWeek","setDay","addTodo"]),{Button:function(t){var e=t.getFullYear(),a=t.getMonth()+1,s=t.getDate();this.year=e,this.month=a,this.date=s;var o=new Date(1*this.year,1*this.month-1,1);this.day=o.getDay(),this.lastDate=this.allLastDate[this.month-1],this.week=Math.ceil((this.day+this.lastDate)/7),2==this.month&&(this.year%4==0&&this.year%100!=0?this.lastDate=29:this.year%400==0&&(this.lastDate=29)),this.setCalendarDate(),this.createCalendar()},createCalendar:function(){this.days=[],this.dateClassName=[];for(var t=1,e=0,a=this.preLastDate-this.day,s=0;s<=this.day;s++)this.days.push(a),this.dateClassName.push("other-month"),a++;for(var o=0;o<this.week;o++)for(var n=0;n<7;n++)e<this.day||t>this.lastDate?e++:(this.days.push(t++),this.dateClassName.push(""));for(var i=this.days.length,r=1;i<7*this.week;i++,r++)this.days.push(r),this.dateClassName.push("other-month")},setCalendarDate:function(){1!=this.month?(this.prevDate=new Date(1*this.year,1*this.month-2,1),this.preLastDate=this.allLastDate[this.month-2]):(this.prevDate=new Date(1*this.year-1,11,1),this.preLastDate=this.allLastDate[11]),12!=this.month?this.nextDate=new Date(1*this.year,1*this.month,1):this.nextDate=new Date(1*this.year+1,0,1)},addTodo:function(){document.getElementsByClassName("event-desc")[1].innerHTML="click"},esc:function(){"Escape"==event.key&&(this.showModal=!1)}}),components:{Modal:w}},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Contents"}},[a("header",[a("span",{staticClass:"Left Button",attrs:{type:"button"},on:{click:function(e){return t.Button(t.prevDate)}}},[a("i",{staticClass:"fas fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("h1",[t._v(t._s(t.year+"년 "+t.month+"월"))]),t._v(" "),a("span",{staticClass:"Right Button",attrs:{type:"button"},on:{click:function(e){return t.Button(t.nextDate)}}},[a("i",{staticClass:"fas fa-angle-right",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("div",{attrs:{id:"calendar"}},[t._m(0),t._v(" "),a("ul",{staticClass:"days"},t._l(t.days,function(e,s){return a("li",{class:t.dateClassName[s],on:{click:function(e){t.showModal=!0}}},[a("div",{staticClass:"date"},[t._v(" "+t._s(e)+" ")]),t._v(" "),t._m(1,!0),t._v(" "),a("div")])}),0)]),t._v(" "),t.showModal?a("modal",{on:{close:function(e){t.showModal=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("할 일 추가")]),t._v(" "),a("h3",{attrs:{slot:"body"},slot:"body"},[a("input",{attrs:{type:"text",placeholder:"추가 할일을 입력해주세요",autofocus:""},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},t.esc]}}),t._v(" "),a("input",{attrs:{type:"text",placeholder:"시간을 입력해주세요"},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},t.esc]}})]),t._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.showModal=!1}}})])]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"weekdays"},[a("li",[t._v("Sunday")]),t._v(" "),a("li",[t._v("Monday")]),t._v(" "),a("li",[t._v("TuesDay")]),t._v(" "),a("li",[t._v("Wednesday")]),t._v(" "),a("li",[t._v("Thursday")]),t._v(" "),a("li",[t._v("Friday")]),t._v(" "),a("li",[t._v("Saturday")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"event"},[e("div",{staticClass:"event-desc"},[this._v("\n            test\n          ")]),this._v(" "),e("div",{staticClass:"event-time"},[this._v("\n            1:00pm to 3:00pm\n          ")])])}]};var R=a("VU/8")(H,Y,!1,function(t){a("cCVw")},"data-v-013512f6",null).exports;s.a.use(o.a);var V=[{path:"/",component:E},{path:"/Home",component:E},{path:"/Calendar",component:R},{path:"/Contact",component:B}],U=new o.a({mode:"history",routes:V});s.a.prototype.$http=F.a,new s.a({el:"#app",render:function(t){return t(v)},router:U,store:g}).$mount("#app")},WgrK:function(t,e){},cCVw:function(t,e){},"cx/O":function(t,e){},hsZJ:function(t,e){},lAKl:function(t,e,a){t.exports=a.p+"static/media/Clock1.ae5810b.mp3"},rz52:function(t,e){},ubGH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b9af9edf61c6a0c62f24.js.map