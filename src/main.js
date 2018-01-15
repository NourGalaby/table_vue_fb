// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import App1 from './App1'
// import router from './router'
// import Vue from 'vue';
import VueGoodTable from 'vue-good-table'
import VueResource from 'vue-resource'
// import BootstrapVue from 'bootstrap-vue'
// import json2csv from 'json-2-csv'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DT from '@/components/DT'

const conv = require('json-2-csv')

Vue.component('dts', DT)

Vue.use(VueGoodTable)
Vue.use(VueResource)
// Vue.use(BootstrapVue)
// Vue.use(json2csv)

Vue.config.delimiters = ['${', '}']

Vue.config.productionTip = false

/* eslint-disable no-new */
const v1 = new Vue({
  el: '#app',
  // router,
  data: {
    flag: true,
    rows: [],
    rows2: [],
    columns: [],
    q1: '',
    op1: '>',
    q2: '',
    op2: '>',
    q3: '',
    op3: '>',
    q4: '',
    op4: '>',
    q5: '',
    op5: '>',
    q6: '',
    op6: '>',
    qarr: [],
    oparr: [],
    arr: {},
    nbf: 0,
    v0: '',
    o0: '',
    t0: '',
    c0: '',
    v1: '',
    o1: '',
    t1: '',
    c1: '',
    v2: '',
    o2: '',
    t2: '',
    c2: '',
    v3: '',
    o3: '',
    t3: '',
    c3: '',
    v4: '',
    o4: '',
    t4: '',
    c4: '',
    v5: '',
    o5: '',
    t5: '',
    c5: '',
    v6: '',
    o6: '',
    t6: '',
    c6: '',
    v7: '',
    o7: '',
    t7: '',
    c7: '',
    v8: '',
    o8: '',
    t8: '',
    c8: '',
    v9: '',
    o9: '',
    t9: '',
    c9: '',
    v10: '',
    o10: '',
    t10: '',
    c10: '',
    v11: '',
    o11: '',
    t11: '',
    c11: '',
    v12: '',
    o12: '',
    t12: '',
    c12: '',
    v13: '',
    o13: '',
    t13: '',
    c13: '',
    v14: '',
    o14: '',
    t14: '',
    c14: '',
    v15: '',
    o15: '',
    t15: '',
    c15: '',
    v16: '',
    o16: '',
    t16: '',
    c16: '',
    v17: '',
    o17: '',
    t17: '',
    c17: '',
    v18: '',
    o18: '',
    t18: '',
    c18: '',
    v19: '',
    o19: '',
    t19: '',
    c19: '',
    v20: '',
    o20: '',
    t20: '',
    c20: '',
    v21: '',
    o21: '',
    t21: '',
    c21: '',
    v22: '',
    o22: '',
    t22: '',
    c22: '',
    v23: '',
    o23: '',
    t23: '',
    c23: '',
    v24: '',
    o24: '',
    t24: '',
    c24: '',
    v25: '',
    o25: '',
    t25: '',
    c25: '',
    v26: '',
    o26: '',
    t26: '',
    c26: '',
    v27: '',
    o27: '',
    t27: '',
    c27: '',
    v28: '',
    o28: '',
    t28: '',
    c28: '',
    v29: '',
    o29: '',
    t29: '',
    c29: '',
    v30: '',
    o30: '',
    t30: '',
    c30: '',
    v31: '',
    o31: '',
    t31: '',
    c31: '',
    v32: '',
    o32: '',
    t32: '',
    c32: '',
    v33: '',
    o33: '',
    t33: '',
    c33: '',
    v34: '',
    o34: '',
    t34: '',
    c34: '',
    v35: '',
    o35: '',
    t35: '',
    c35: '',
    v36: '',
    o36: '',
    t36: '',
    c36: '',
    v37: '',
    o37: '',
    t37: '',
    c37: '',
    v38: '',
    o38: '',
    t38: '',
    c38: '',
    v39: '',
    o39: '',
    t39: '',
    c39: '',
    v40: '',
    o40: '',
    t40: '',
    c40: '',
    v41: '',
    o41: '',
    t41: '',
    c41: '',
    v42: '',
    o42: '',
    t42: '',
    c42: '',
    v43: '',
    o43: '',
    t43: '',
    c43: '',
    v44: '',
    o44: '',
    t44: '',
    c44: '',
    converter: conv
  },
  template: '<App/>',
  components: { App },
  computed: {
    customFilter: function () {
      // console.log('filter: ' + this.q)
      // console.log('op: ' + this.op)
      // q = q.toString().toLowerCase()
      const operatorFromString = {
        '>': function (x, y) { return x > y },
        '<': function (x, y) { return x < y },
        '=': function (x, y) { return x == y }
      }
      this.rows2 = this.rows2.filter((row) => {
        let qd = new Date(this.q4)
        qd.setHours(0, 0, 0, 0)
        qd.setTime(qd.getTime() + (qd.getTimezoneOffset() * 60 * 1000))
        // console.log(qd.getTime())
        // console.log(qd)
        let d = new Date(row['last_post_date'])
        d.setHours(0, 0, 0, 0)
        d.setTime(d.getTime() + (d.getTimezoneOffset() * 60 * 1000))
        // console.log(d.getTime())
        // console.log(d)
        // console.log(row['US percent'])

        // console.log('this')
        // console.log(this)
        // console.log('this.v0')
        // console.log(this.v0)
        // console.log('this.o0')
        // console.log(this.o0)
        // console.log('this.t0')
        // console.log(this.t0)
        // console.log('this.c0')
        // console.log(this.c0)

        // console.log('arr')
        // console.log(this.arr)
        // console.log('-------------')
        // console.log(this[`v${this.nbf}`])

        // console.log(this.arr)
        // console.log(row)
        // console.log(row['US_fans_percent'])
        // console.log(row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined)
        // console.log(parseFloat(row['US_fans_percent']))
        // console.log(this.q3 / 100)
        // console.log(operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)))

        if (this.nbf) {
          for (let index = 0; index < 45; index++) {
            if (this[`v${index}`] !== '' && this[`v${index}`] !== null && this[`v${index}`] !== undefined) {
              if (this[`o${index}`] && this[`c${index}`] && this[`t${index}`]) {
                let countryName = this[`c${index}`]
                let filterType = this[`t${index}`]
                let operator = this[`o${index}`]
                let value = this[`v${index}`]
                switch (filterType) {
                  case 'Likes':
                    if (row[`${countryName}_Total`] !== null && row[`${countryName}_Total`] !== undefined /* && row[`${countryName}_Total`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                        return false
                      }
                    }
                    break
                  case 'Likes Percent':
                    if (row[`${countryName}_fans_percent`] !== null && row[`${countryName}_fans_percent`] !== undefined /* && row[`${countryName}_fans_percent`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                        return false
                      }
                    }
                    break
                  case 'Talking About':
                    if (row[`${countryName}_people_talking`] !== null && row[`${countryName}_people_talking`] !== undefined /* && row[`${countryName}_people_talking`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                        return false
                      }
                    }
                    break
                  case 'Talking About Percent':
                    if (row[`${countryName}_talking_percent`] !== null && row[`${countryName}_talking_percent`] !== undefined /* && row[`${countryName}_talking_percent`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                        return false
                      }
                    }
                    break
                  default:
                    break
                }
              }
            }
          }
        }
        /*
        if (this.qarr.length) {
          for (let index = 0; index < this.qarr.length; index++) {
            let countryFilter = this.qarr[index]
            let countryName = countryFilter[4]
            for (let i = 0; i < countryFilter.length - 1; i++) {
              let value = countryFilter[i]
              if (value !== null && value !== '' && value !== undefined) {
                switch (i) {
                  case 0:
                    if (this.oparr[index][i] && row[`${countryName}_Total`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_Total`], value))) {
                        return false
                      }
                    }
                    break
                  case 1:
                    if (this.oparr[index][i] && row[`${countryName}_fans_percent`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_fans_percent`], value))) {
                        return false
                      }
                    }
                    break
                  case 2:
                    if (this.oparr[index][i] && row[`${countryName}_people_talking`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_people_talking`], value))) {
                        return false
                      }
                    }
                    break
                  case 3:
                    if (this.oparr[index][i] && row[`${countryName}_talking_percent`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_talking_percent`], value))) {
                        return false
                      }
                    }
                    break
                  default:
                    break
                }
              }
            }
          }
        }
        if (this.arr.length) {
          for (let index = 0; index < this.arr.length; index++) {
            let nfilter = this.arr[index]
            let countryName = nfilter[3]
            let filterType = nfilter[2]
            let operator = nfilter[1]
            let value = nfilter[0]
            if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
              switch (filterType) {
                case 'Likes':
                  if (row[`${countryName}_Total`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                      return false
                    }
                  }
                  break
                case 'Likes Percent':
                  if (row[`${countryName}_fans_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About':
                  if (row[`${countryName}_people_talking`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About Percent':
                  if (row[`${countryName}_talking_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                      return false
                    }
                  }
                  break
                default:
                  break
              }
            }
          }
        }

        if (this.nbf) {
          for (let index = 0; index < this.nbf; index++) {
            let countryName = this[`c${index}`]
            let filterType = this[`f${index}`]
            let operator = this[`o${index}`]
            let value = this[`v${index}`]
            if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
              switch (filterType) {
                case 'Likes':
                  if (row[`${countryName}_Total`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                      return false
                    }
                  }
                  break
                case 'Likes Percent':
                  if (row[`${countryName}_fans_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About':
                  if (row[`${countryName}_people_talking`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About Percent':
                  if (row[`${countryName}_talking_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                      return false
                    }
                  }
                  break
                default:
                  break
              }
            }
          }
        }

        if (Object.keys(this.arr).length !== 0) {
          for (let index = 0; index < Object.keys(this.arr).length; index++) {
            let nfilter = this.arr[index]
            let countryName = nfilter[3]
            let filterType = nfilter[2]
            let operator = nfilter[1]
            let value = nfilter[0]
            if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
              switch (filterType) {
                case 'Likes':
                  if (row[`${countryName}_Total`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                      return false
                    }
                  }
                  break
                case 'Likes Percent':
                  if (row[`${countryName}_fans_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About':
                  if (row[`${countryName}_people_talking`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About Percent':
                  if (row[`${countryName}_talking_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                      return false
                    }
                  }
                  break
                default:
                  break
              }
            }
          }
        }
        */
        if (this.q1 || this.q2 || (this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) || this.q4 || (this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) || this.q6) {
          return (this.q1 ? operatorFromString[this.op1](row['fans_count'], this.q1) : true) &&
          (this.q2 ? operatorFromString[this.op2](row['US_Total'], this.q2) : true) &&
          (this.q6 ? operatorFromString[this.op6](row['US_people_talking'], this.q6) : true) &&
          ((row['US percent'] !== null && row['US percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : ((row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US_fans_percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : (!((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0))))) &&
          (this.q4 ? operatorFromString[this.op4](d.getTime(), qd.getTime()) : true) &&
          ((this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) ? operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)) : true)
        }
        return true
      })
      return this.rows.filter((row) => {
        let qd = new Date(this.q4)
        qd.setHours(0, 0, 0, 0)
        qd.setTime(qd.getTime() + (qd.getTimezoneOffset() * 60 * 1000))
        // console.log(qd.getTime())
        // console.log(qd)
        let d = new Date(row['last_post_date'])
        d.setHours(0, 0, 0, 0)
        d.setTime(d.getTime() + (d.getTimezoneOffset() * 60 * 1000))
        // console.log(d.getTime())
        // console.log(d)

        if (this.nbf) {
          for (let index = 0; index < 45; index++) {
            if (this[`v${index}`] !== '' && this[`v${index}`] !== null && this[`v${index}`] !== undefined) {
              if (this[`o${index}`] && this[`c${index}`] && this[`t${index}`]) {
                let countryName = this[`c${index}`]
                let filterType = this[`t${index}`]
                let operator = this[`o${index}`]
                let value = this[`v${index}`]
                switch (filterType) {
                  case 'Likes':
                    if (row[`${countryName}_Total`] !== null && row[`${countryName}_Total`] !== undefined /* && row[`${countryName}_Total`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                        return false
                      }
                    }
                    break
                  case 'Likes Percent':
                    if (row[`${countryName}_fans_percent`] !== null && row[`${countryName}_fans_percent`] !== undefined /* && row[`${countryName}_fans_percent`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                        return false
                      }
                    }
                    break
                  case 'Talking About':
                    if (row[`${countryName}_people_talking`] !== null && row[`${countryName}_people_talking`] !== undefined /* && row[`${countryName}_people_talking`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                        return false
                      }
                    }
                    break
                  case 'Talking About Percent':
                    if (row[`${countryName}_talking_percent`] !== null && row[`${countryName}_talking_percent`] !== undefined /* && row[`${countryName}_talking_percent`] !== '' */) {
                      if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                        return false
                      }
                    }
                    break
                  default:
                    break
                }
              }
            }
          }
        }

        /*
        if (this.qarr.length) {
          for (var index = 0; index < this.qarr.length; index++) {
            var countryFilter = this.qarr[index]
            var countryName = countryFilter[4]
            for (var i = 0; i < countryFilter.length - 1; i++) {
              var value = countryFilter[i]
              if (value !== null && value !== '' && value !== undefined) {
                switch (i) {
                  case 0:
                    if (this.oparr[index][i] && row[`${countryName}_Total`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_Total`], value))) {
                        return false
                      }
                    }
                    break
                  case 1:
                    if (this.oparr[index][i] && row[`${countryName}_fans_percent`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_fans_percent`], value))) {
                        return false
                      }
                    }
                    break
                  case 2:
                    if (this.oparr[index][i] && row[`${countryName}_people_talking`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_people_talking`], value))) {
                        return false
                      }
                    }
                    break
                  case 3:
                    if (this.oparr[index][i] && row[`${countryName}_talking_percent`]) {
                      if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_talking_percent`], value))) {
                        return false
                      }
                    }
                    break
                  default:
                    break
                }
              }
            }
          }
        }
        if (this.arr.length) {
          for (let index = 0; index < this.arr.length; index++) {
            let nfilter = this.arr[index]
            let countryName = nfilter[3]
            let filterType = nfilter[2]
            let operator = nfilter[1]
            let value = nfilter[0]
            if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
              switch (filterType) {
                case 'Likes':
                  if (row[`${countryName}_Total`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                      return false
                    }
                  }
                  break
                case 'Likes Percent':
                  if (row[`${countryName}_fans_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About':
                  if (row[`${countryName}_people_talking`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About Percent':
                  if (row[`${countryName}_talking_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                      return false
                    }
                  }
                  break
                default:
                  break
              }
            }
          }
        }

        if (this.nbf) {
          for (let index = 0; index < this.nbf; index++) {
            let countryName = this[`c${index}`]
            let filterType = this[`f${index}`]
            let operator = this[`o${index}`]
            let value = this[`v${index}`]
            if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
              switch (filterType) {
                case 'Likes':
                  if (row[`${countryName}_Total`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                      return false
                    }
                  }
                  break
                case 'Likes Percent':
                  if (row[`${countryName}_fans_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About':
                  if (row[`${countryName}_people_talking`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About Percent':
                  if (row[`${countryName}_talking_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                      return false
                    }
                  }
                  break
                default:
                  break
              }
            }
          }
        }

        if (Object.keys(this.arr).length !== 0) {
          for (let index = 0; index < Object.keys(this.arr).length; index++) {
            let nfilter = this.arr[index]
            let countryName = nfilter[3]
            let filterType = nfilter[2]
            let operator = nfilter[1]
            let value = nfilter[0]
            if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
              switch (filterType) {
                case 'Likes':
                  if (row[`${countryName}_Total`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
                      return false
                    }
                  }
                  break
                case 'Likes Percent':
                  if (row[`${countryName}_fans_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About':
                  if (row[`${countryName}_people_talking`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
                      return false
                    }
                  }
                  break
                case 'Talking About Percent':
                  if (row[`${countryName}_talking_percent`]) {
                    if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
                      return false
                    }
                  }
                  break
                default:
                  break
              }
            }
          }
        }
        */
        if (this.q1 || this.q2 || (this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) || this.q4 || (this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) || this.q6) {
          return (this.q1 ? operatorFromString[this.op1](row['fans_count'], this.q1) : true) &&
          (this.q2 ? operatorFromString[this.op2](row['US_Total'], this.q2) : true) &&
          (this.q6 ? operatorFromString[this.op6](row['US_people_talking'], this.q6) : true) &&
          ((row['US percent'] !== null && row['US percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : ((row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US_fans_percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : (!((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0))))) &&
          (this.q4 ? operatorFromString[this.op4](d.getTime(), qd.getTime()) : true) &&
          ((this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) ? operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)) : true)
        }
        return true
      })
    }
  }
})

// const v1 = new Vue({
//   el: '#app',
//   component: DT
// })

const v2 = new Vue({
  el: '#nav',
  data: {
    countryVals: ['US']
  },
  methods: {
    search: function () {
      // console.log('http://localhost:5000/search?token=' + this.$refs['token'] + '&search_term=' + this.$refs['search'])
      // console.log(document.getElementById('token').value);
      // this.$http.get('http://localhost:5000/search?token=' + document.getElementById('token').value + '&search_term=' + document.getElementById('search').value).then((dataSample) => {
      this.$http.post('http://localhost:5000/search', {token: document.getElementById('token').value, search_term: document.getElementById('search').value, countries: this.countryVals}).then((dataSample, status, request) => {
        console.log(dataSample.body)
        let body = JSON.parse(dataSample.body)
        let rows = []
        let rows2 = []
        let columns = []
        for (var colName in body) {
          if (body.hasOwnProperty(colName)) {
            if (colName === 'picture') {
              columns.push({label: 'Picture', field: colName, html: true})
            } else if (colName === 'US percent') {
              columns.push({label: 'US Percent', field: colName, /* filterable: true, */ type: 'percentage'})
            } else if (colName === 'fans_count') {
              columns.push({label: 'Fans Count', field: colName, /* filterable: true, */ type: 'number'})
            } else if (colName === 'US_Total') {
              columns.push({label: 'US Total Fans', field: colName, /* filterable: true, */ type: 'number'})
            } else if (colName === 'last_post_date') {
              columns.push({label: 'Last Post Date', field: colName, /* filterable: true, */ type: 'date', inputFormat: 'YYYY-MM-DD', outputFormat: 'MMM Do YY'})
            } else if (colName === 'id') {
              columns.push({label: 'Page Link', field: colName, html: true})
            } else if (colName === 'name') {
              columns.push({label: 'Page Name', field: colName, filterable: true})
            } else if (colName.toLowerCase().indexOf('percent') > -1) {
              columns.push({label: colName, field: colName, /* filterable: true, */ type: 'percentage'})
            } else {
              columns.push({label: colName, field: colName, filterable: true})
            }
            var col = body[colName]
            const numCommas = (x) => {
              var parts = x.toString().split('.')
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              return parts.join('.')
            }
            for (var id in col) {
              if (col.hasOwnProperty(id)) {
                var val = col[id]

                if (!rows[id]) {
                  rows[id] = {'id': id}
                  rows2[id] = {'id': id}
                }
                rows2[id][colName] = val
                if (colName === 'picture') {
                  rows[id][colName] = '<img src ="' + val + '" />'
                } else if (colName === 'id') {
                  rows[id][colName] = '<a href ="' + val + '" />' + val
                } else if (colName.toLowerCase().indexOf('percent') > -1) {
                  rows[id][colName] = val / 100
                } else if (colName.toLowerCase().indexOf('total') > -1 || colName.toLowerCase().indexOf('count') > -1) {
                  rows[id][colName] = val && numCommas(val)
                } else {
                  rows[id][colName] = val
                }
              }
            }
          }
        }
        v1.rows = rows
        v1.rows2 = rows2
        // console.log(v1.rows)
        v1.columns = columns
        // v1.flag = true
        // console.log(DT)
      }).catch((err) => {
        console.log(err)
      })
    },
    enter: function (ev) {
      // ev.preventDefault()
      if (ev.keyCode === 13) { this.search() }
    },
    postCountries: function () {
      this.countryVals = document.querySelectorAll('input[type=checkbox]:checked').map(box => box.value)
      // this.$http.post('http://localhost:5000/countries', {countries: this.countryVals}).then((data, status, request) => {}).catch((error) => { console.log(error) })
    }
  },
  created () {
    // this.$http.get('http://localhost:5000/sample').then((dataSample) => {
    //   // console.log(dataSample);
    //   let body = JSON.parse(dataSample.body)
    //   let rows = []
    //   let rows2 = []
    //   let columns = []
    //   for (var colName in body) {
    //     if (body.hasOwnProperty(colName)) {
    //       if (colName === 'picture') {
    //         columns.push({label: 'Picture', field: colName, html: true})
    //       } else if (colName === 'US percent') {
    //         columns.push({label: 'US Percent', field: colName, /* filterable: true, */ type: 'percentage'})
    //       } else if (colName === 'fans_count') {
    //         columns.push({label: 'Fans Count', field: colName, /* filterable: true, */ type: 'number'})
    //       } else if (colName === 'US_Total') {
    //         columns.push({label: 'US Total Fans', field: colName, /* filterable: true, */ type: 'number'})
    //       } else if (colName === 'last_post_date') {
    //         columns.push({label: 'Last Post Date', field: colName, /* filterable: true, */ type: 'date', inputFormat: 'YYYY-MM-DD', outputFormat: 'MMM Do YY'})
    //       } else if (colName === 'id') {
    //         columns.push({label: 'Page Link', field: colName, html: true})
    //       } else if (colName === 'name') {
    //         columns.push({label: 'Page Name', field: colName, filterable: true})
    //       } else if (colName.toLowerCase().indexOf('percent') > -1) {
    //         columns.push({label: colName, field: colName, /* filterable: true, */ type: 'percentage'})
    //       } else {
    //         columns.push({label: colName, field: colName, filterable: true})
    //       }
    //       var col = body[colName]
    //       for (var id in col) {
    //         if (col.hasOwnProperty(id)) {
    //           var val = col[id]
    //           if (!rows[id]) {
    //             rows[id] = {'id': id}
    //             rows2[id] = {'id': id}
    //           }
    //           rows2[id][colName] = val
    //           if (colName === 'picture') {
    //             rows[id][colName] = '<img src ="' + val + '" />'
    //           } else if (colName === 'id') {
    //             rows[id][colName] = '<a href ="' + val + '" />' + val
    //           } else {
    //             rows[id][colName] = val
    //           }
    //         }
    //       }
    //     }
    //   }
    //   // console.log(rows);
    //   v1.columns = columns
    //   v1.rows = rows
    //   v1.rows2 = rows2
    //   // console.log(this.customFilter)
    // }).catch((err) => {
    //   console.log(err)
    // })
    // // console.log(flag);
    // // console.log(this.flag);
  }

})
// new Vue({
//   el: '#app1',
//   router,
//   template: '<App1/>',
//   components: { App1 }
// })
// v1.newrows = v2.customFilter
