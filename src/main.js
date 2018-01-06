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
        // console.log(row['US_fans_percent'])
        // console.log(row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined)
        // console.log(parseFloat(row['US_fans_percent']))
        // console.log(this.q3 / 100)
        // console.log(operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)))
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
        if (this.q1 || this.q2 || (this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) || this.q4 || (this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0)) {
          return (this.q1 ? operatorFromString[this.op1](row['fans_count'], this.q1) : true) &&
          (this.q2 ? operatorFromString[this.op2](row['US_Total'], this.q2) : true) &&
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
        if (this.q1 || this.q2 || (this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) || this.q4 || (this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0)) {
          return (this.q1 ? operatorFromString[this.op1](row['fans_count'], this.q1) : true) &&
          (this.q2 ? operatorFromString[this.op2](row['US_Total'], this.q2) : true) &&
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
  methods: {
    search: function () {
      // console.log('http://localhost:5000/search?token=' + this.$refs['token'] + '&search_term=' + this.$refs['search'])
      // console.log(document.getElementById('token').value);
      this.$http.get('http://localhost:5000/search?token=' + document.getElementById('token').value + '&search_term=' + document.getElementById('search').value).then((dataSample) => {
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
    }
  },
  created () {
    this.$http.get('http://localhost:5000/sample').then((dataSample) => {
      // console.log(dataSample);
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
              } else {
                rows[id][colName] = val
              }
            }
          }
        }
      }
      // console.log(rows);
      v1.columns = columns
      v1.rows = rows
      v1.rows2 = rows2
      // console.log(this.customFilter)
    }).catch((err) => {
      console.log(err)
    })
    // console.log(flag);
    // console.log(this.flag);
  }

})
// new Vue({
//   el: '#app1',
//   router,
//   template: '<App1/>',
//   components: { App1 }
// })
// v1.newrows = v2.customFilter
