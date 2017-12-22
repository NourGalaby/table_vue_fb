// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import App1 from './App1'
// import router from './router'
// import Vue from 'vue';
import VueGoodTable from 'vue-good-table'
import VueResource from 'vue-resource'

import DT from '@/components/DT'

Vue.component('dts', DT)

Vue.use(VueGoodTable)
Vue.use(VueResource)

Vue.config.delimiters = ['${', '}']

Vue.config.productionTip = false

/* eslint-disable no-new */
const v1 = new Vue({
  el: '#app',
  // router,
  data: {
    flag: true,
    rows: [],
    columns: [],
    q: '',
    op: '>',
    f: 'fans_count'
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
      return this.rows.filter((row) => {
        if (this.q) {
          return operatorFromString[this.op](row[this.f], this.q)  
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
        let columns = []
        for (var colName in body) {
          if (body.hasOwnProperty(colName)) {
            if (colName === 'picture') {
              columns.push({label: 'Picture', field: colName, html: true})
            } else if (colName === 'US percent') {
              columns.push({label: 'US Percent', field: colName, filterable: true, type: 'percentage'})
            } else if (colName === 'fans_count') {
              columns.push({label: 'Fans Count', field: colName, filterable: true, type: 'number'})
            } else if (colName === 'US_Total') {
              columns.push({label: 'US Total Fans', field: colName, filterable: true, type: 'number'})
            } else if (colName === 'last_post_date') {
              columns.push({label: 'Last Post Date', field: colName, filterable: true, type: 'date', inputFormat: 'YYYY-MM-DD', outputFormat: 'MMM Do YY'})
            } else if (colName === 'id') {
              columns.push({label: 'Page Link', field: colName, html: true})
            } else if (colName === 'name') {
              columns.push({label: 'Page Name', field: colName, filterable: true})
            } else {
              columns.push({label: colName, field: colName, filterable: true})
            }
            var col = body[colName]
            for (var id in col) {
              if (col.hasOwnProperty(id)) {
                var val = col[id]
                if (!rows[id]) {
                  rows[id] = {'id': id}
                }
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
      let columns = []
      for (var colName in body) {
        if (body.hasOwnProperty(colName)) {
          if (colName === 'picture') {
            columns.push({label: 'Picture', field: colName, html: true})
          } else if (colName === 'US percent') {
            columns.push({label: 'US Percent', field: colName, filterable: true, type: 'percentage'})
          } else if (colName === 'fans_count') {
            columns.push({label: 'Fans Count', field: colName, filterable: true, type: 'number'})
          } else if (colName === 'US_Total') {
            columns.push({label: 'US Total Fans', field: colName, filterable: true, type: 'number'})
          } else if (colName === 'last_post_date') {
            columns.push({label: 'Last Post Date', field: colName, filterable: true, type: 'date', inputFormat: 'YYYY-MM-DD', outputFormat: 'MMM Do YY'})
          } else if (colName === 'id') {
            columns.push({label: 'Page Link', field: colName, html: true})
          } else if (colName === 'name') {
            columns.push({label: 'Page Name', field: colName, filterable: true})
          } else {
            columns.push({label: colName, field: colName, filterable: true})
          }
          var col = body[colName]
          for (var id in col) {
            if (col.hasOwnProperty(id)) {
              var val = col[id]
              if (!rows[id]) {
                rows[id] = {'id': id}
              }
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
