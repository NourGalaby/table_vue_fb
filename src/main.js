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
// let rows3 = []
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
    v0_0: '',
    o0_0: '>',
    t0_0: '',
    c0_0: '',
    v1_0: '',
    o1_0: '>',
    t1_0: '',
    c1_0: '',
    v2_0: '',
    o2_0: '>',
    t2_0: '',
    c2_0: '',
    v3_0: '',
    o3_0: '>',
    t3_0: '',
    c3_0: '',
    v4_0: '',
    o4_0: '>',
    t4_0: '',
    c4_0: '',
    v5_0: '',
    o5_0: '>',
    t5_0: '',
    c5_0: '',
    v6_0: '',
    o6_0: '>',
    t6_0: '',
    c6_0: '',
    v7_0: '',
    o7_0: '>',
    t7_0: '',
    c7_0: '',
    v8_0: '',
    o8_0: '>',
    t8_0: '',
    c8_0: '',
    v9_0: '',
    o9_0: '>',
    t9_0: '',
    c9_0: '',
    v10_0: '',
    o10_0: '>',
    t10_0: '',
    c10_0: '',
    v11_0: '',
    o11_0: '>',
    t11_0: '',
    c11_0: '',
    v12_0: '',
    o12_0: '>',
    t12_0: '',
    c12_0: '',
    v13_0: '',
    o13_0: '>',
    t13_0: '',
    c13_0: '',
    v14_0: '',
    o14_0: '>',
    t14_0: '',
    c14_0: '',
    v15_0: '',
    o15_0: '>',
    t15_0: '',
    c15_0: '',
    v16_0: '',
    o16_0: '>',
    t16_0: '',
    c16_0: '',
    v17_0: '',
    o17_0: '>',
    t17_0: '',
    c17_0: '',
    v18_0: '',
    o18_0: '>',
    t18_0: '',
    c18_0: '',
    v19_0: '',
    o19_0: '>',
    t19_0: '',
    c19_0: '',
    v20_0: '',
    o20_0: '>',
    t20_0: '',
    c20_0: '',
    v21_0: '',
    o21_0: '>',
    t21_0: '',
    c21_0: '',
    v22_0: '',
    o22_0: '>',
    t22_0: '',
    c22_0: '',
    v23_0: '',
    o23_0: '>',
    t23_0: '',
    c23_0: '',
    v24_0: '',
    o24_0: '>',
    t24_0: '',
    c24_0: '',
    v25_0: '',
    o25_0: '>',
    t25_0: '',
    c25_0: '',
    v26_0: '',
    o26_0: '>',
    t26_0: '',
    c26_0: '',
    v27_0: '',
    o27_0: '>',
    t27_0: '',
    c27_0: '',
    v28_0: '',
    o28_0: '>',
    t28_0: '',
    c28_0: '',
    v29_0: '',
    o29_0: '>',
    t29_0: '',
    c29_0: '',
    v30_0: '',
    o30_0: '>',
    t30_0: '',
    c30_0: '',
    v31_0: '',
    o31_0: '>',
    t31_0: '',
    c31_0: '',
    v32_0: '',
    o32_0: '>',
    t32_0: '',
    c32_0: '',
    v33_0: '',
    o33_0: '>',
    t33_0: '',
    c33_0: '',
    v34_0: '',
    o34_0: '>',
    t34_0: '',
    c34_0: '',
    v35_0: '',
    o35_0: '>',
    t35_0: '',
    c35_0: '',
    v36_0: '',
    o36_0: '>',
    t36_0: '',
    c36_0: '',
    v37_0: '',
    o37_0: '>',
    t37_0: '',
    c37_0: '',
    v38_0: '',
    o38_0: '>',
    t38_0: '',
    c38_0: '',
    v39_0: '',
    o39_0: '>',
    t39_0: '',
    c39_0: '',
    v40_0: '',
    o40_0: '>',
    t40_0: '',
    c40_0: '',
    v41_0: '',
    o41_0: '>',
    t41_0: '',
    c41_0: '',
    v42_0: '',
    o42_0: '>',
    t42_0: '',
    c42_0: '',
    v43_0: '',
    o43_0: '>',
    t43_0: '',
    c43_0: '',
    v44_0: '',
    o44_0: '>',
    t44_0: '',
    c44_0: '',
    v0_1: '',
    o0_1: '>',
    t0_1: '',
    c0_1: '',
    v1_1: '',
    o1_1: '>',
    t1_1: '',
    c1_1: '',
    v2_1: '',
    o2_1: '>',
    t2_1: '',
    c2_1: '',
    v3_1: '',
    o3_1: '>',
    t3_1: '',
    c3_1: '',
    v4_1: '',
    o4_1: '>',
    t4_1: '',
    c4_1: '',
    v5_1: '',
    o5_1: '>',
    t5_1: '',
    c5_1: '',
    v6_1: '',
    o6_1: '>',
    t6_1: '',
    c6_1: '',
    v7_1: '',
    o7_1: '>',
    t7_1: '',
    c7_1: '',
    v8_1: '',
    o8_1: '>',
    t8_1: '',
    c8_1: '',
    v9_1: '',
    o9_1: '>',
    t9_1: '',
    c9_1: '',
    v10_1: '',
    o10_1: '>',
    t10_1: '',
    c10_1: '',
    v11_1: '',
    o11_1: '>',
    t11_1: '',
    c11_1: '',
    v12_1: '',
    o12_1: '>',
    t12_1: '',
    c12_1: '',
    v13_1: '',
    o13_1: '>',
    t13_1: '',
    c13_1: '',
    v14_1: '',
    o14_1: '>',
    t14_1: '',
    c14_1: '',
    v15_1: '',
    o15_1: '>',
    t15_1: '',
    c15_1: '',
    v16_1: '',
    o16_1: '>',
    t16_1: '',
    c16_1: '',
    v17_1: '',
    o17_1: '>',
    t17_1: '',
    c17_1: '',
    v18_1: '',
    o18_1: '>',
    t18_1: '',
    c18_1: '',
    v19_1: '',
    o19_1: '>',
    t19_1: '',
    c19_1: '',
    v20_1: '',
    o20_1: '>',
    t20_1: '',
    c20_1: '',
    v21_1: '',
    o21_1: '>',
    t21_1: '',
    c21_1: '',
    v22_1: '',
    o22_1: '>',
    t22_1: '',
    c22_1: '',
    v23_1: '',
    o23_1: '>',
    t23_1: '',
    c23_1: '',
    v24_1: '',
    o24_1: '>',
    t24_1: '',
    c24_1: '',
    v25_1: '',
    o25_1: '>',
    t25_1: '',
    c25_1: '',
    v26_1: '',
    o26_1: '>',
    t26_1: '',
    c26_1: '',
    v27_1: '',
    o27_1: '>',
    t27_1: '',
    c27_1: '',
    v28_1: '',
    o28_1: '>',
    t28_1: '',
    c28_1: '',
    v29_1: '',
    o29_1: '>',
    t29_1: '',
    c29_1: '',
    v30_1: '',
    o30_1: '>',
    t30_1: '',
    c30_1: '',
    v31_1: '',
    o31_1: '>',
    t31_1: '',
    c31_1: '',
    v32_1: '',
    o32_1: '>',
    t32_1: '',
    c32_1: '',
    v33_1: '',
    o33_1: '>',
    t33_1: '',
    c33_1: '',
    v34_1: '',
    o34_1: '>',
    t34_1: '',
    c34_1: '',
    v35_1: '',
    o35_1: '>',
    t35_1: '',
    c35_1: '',
    v36_1: '',
    o36_1: '>',
    t36_1: '',
    c36_1: '',
    v37_1: '',
    o37_1: '>',
    t37_1: '',
    c37_1: '',
    v38_1: '',
    o38_1: '>',
    t38_1: '',
    c38_1: '',
    v39_1: '',
    o39_1: '>',
    t39_1: '',
    c39_1: '',
    v40_1: '',
    o40_1: '>',
    t40_1: '',
    c40_1: '',
    v41_1: '',
    o41_1: '>',
    t41_1: '',
    c41_1: '',
    v42_1: '',
    o42_1: '>',
    t42_1: '',
    c42_1: '',
    v43_1: '',
    o43_1: '>',
    t43_1: '',
    c43_1: '',
    v44_1: '',
    o44_1: '>',
    t44_1: '',
    c44_1: '',
    v0_2: '',
    o0_2: '>',
    t0_2: '',
    c0_2: '',
    v1_2: '',
    o1_2: '>',
    t1_2: '',
    c1_2: '',
    v2_2: '',
    o2_2: '>',
    t2_2: '',
    c2_2: '',
    v3_2: '',
    o3_2: '>',
    t3_2: '',
    c3_2: '',
    v4_2: '',
    o4_2: '>',
    t4_2: '',
    c4_2: '',
    v5_2: '',
    o5_2: '>',
    t5_2: '',
    c5_2: '',
    v6_2: '',
    o6_2: '>',
    t6_2: '',
    c6_2: '',
    v7_2: '',
    o7_2: '>',
    t7_2: '',
    c7_2: '',
    v8_2: '',
    o8_2: '>',
    t8_2: '',
    c8_2: '',
    v9_2: '',
    o9_2: '>',
    t9_2: '',
    c9_2: '',
    v10_2: '',
    o10_2: '>',
    t10_2: '',
    c10_2: '',
    v11_2: '',
    o11_2: '>',
    t11_2: '',
    c11_2: '',
    v12_2: '',
    o12_2: '>',
    t12_2: '',
    c12_2: '',
    v13_2: '',
    o13_2: '>',
    t13_2: '',
    c13_2: '',
    v14_2: '',
    o14_2: '>',
    t14_2: '',
    c14_2: '',
    v15_2: '',
    o15_2: '>',
    t15_2: '',
    c15_2: '',
    v16_2: '',
    o16_2: '>',
    t16_2: '',
    c16_2: '',
    v17_2: '',
    o17_2: '>',
    t17_2: '',
    c17_2: '',
    v18_2: '',
    o18_2: '>',
    t18_2: '',
    c18_2: '',
    v19_2: '',
    o19_2: '>',
    t19_2: '',
    c19_2: '',
    v20_2: '',
    o20_2: '>',
    t20_2: '',
    c20_2: '',
    v21_2: '',
    o21_2: '>',
    t21_2: '',
    c21_2: '',
    v22_2: '',
    o22_2: '>',
    t22_2: '',
    c22_2: '',
    v23_2: '',
    o23_2: '>',
    t23_2: '',
    c23_2: '',
    v24_2: '',
    o24_2: '>',
    t24_2: '',
    c24_2: '',
    v25_2: '',
    o25_2: '>',
    t25_2: '',
    c25_2: '',
    v26_2: '',
    o26_2: '>',
    t26_2: '',
    c26_2: '',
    v27_2: '',
    o27_2: '>',
    t27_2: '',
    c27_2: '',
    v28_2: '',
    o28_2: '>',
    t28_2: '',
    c28_2: '',
    v29_2: '',
    o29_2: '>',
    t29_2: '',
    c29_2: '',
    v30_2: '',
    o30_2: '>',
    t30_2: '',
    c30_2: '',
    v31_2: '',
    o31_2: '>',
    t31_2: '',
    c31_2: '',
    v32_2: '',
    o32_2: '>',
    t32_2: '',
    c32_2: '',
    v33_2: '',
    o33_2: '>',
    t33_2: '',
    c33_2: '',
    v34_2: '',
    o34_2: '>',
    t34_2: '',
    c34_2: '',
    v35_2: '',
    o35_2: '>',
    t35_2: '',
    c35_2: '',
    v36_2: '',
    o36_2: '>',
    t36_2: '',
    c36_2: '',
    v37_2: '',
    o37_2: '>',
    t37_2: '',
    c37_2: '',
    v38_2: '',
    o38_2: '>',
    t38_2: '',
    c38_2: '',
    v39_2: '',
    o39_2: '>',
    t39_2: '',
    c39_2: '',
    v40_2: '',
    o40_2: '>',
    t40_2: '',
    c40_2: '',
    v41_2: '',
    o41_2: '>',
    t41_2: '',
    c41_2: '',
    v42_2: '',
    o42_2: '>',
    t42_2: '',
    c42_2: '',
    v43_2: '',
    o43_2: '>',
    t43_2: '',
    c43_2: '',
    v44_2: '',
    o44_2: '>',
    t44_2: '',
    c44_2: '',
    v0_3: '',
    o0_3: '>',
    t0_3: '',
    c0_3: '',
    v1_3: '',
    o1_3: '>',
    t1_3: '',
    c1_3: '',
    v2_3: '',
    o2_3: '>',
    t2_3: '',
    c2_3: '',
    v3_3: '',
    o3_3: '>',
    t3_3: '',
    c3_3: '',
    v4_3: '',
    o4_3: '>',
    t4_3: '',
    c4_3: '',
    v5_3: '',
    o5_3: '>',
    t5_3: '',
    c5_3: '',
    v6_3: '',
    o6_3: '>',
    t6_3: '',
    c6_3: '',
    v7_3: '',
    o7_3: '>',
    t7_3: '',
    c7_3: '',
    v8_3: '',
    o8_3: '>',
    t8_3: '',
    c8_3: '',
    v9_3: '',
    o9_3: '>',
    t9_3: '',
    c9_3: '',
    v10_3: '',
    o10_3: '>',
    t10_3: '',
    c10_3: '',
    v11_3: '',
    o11_3: '>',
    t11_3: '',
    c11_3: '',
    v12_3: '',
    o12_3: '>',
    t12_3: '',
    c12_3: '',
    v13_3: '',
    o13_3: '>',
    t13_3: '',
    c13_3: '',
    v14_3: '',
    o14_3: '>',
    t14_3: '',
    c14_3: '',
    v15_3: '',
    o15_3: '>',
    t15_3: '',
    c15_3: '',
    v16_3: '',
    o16_3: '>',
    t16_3: '',
    c16_3: '',
    v17_3: '',
    o17_3: '>',
    t17_3: '',
    c17_3: '',
    v18_3: '',
    o18_3: '>',
    t18_3: '',
    c18_3: '',
    v19_3: '',
    o19_3: '>',
    t19_3: '',
    c19_3: '',
    v20_3: '',
    o20_3: '>',
    t20_3: '',
    c20_3: '',
    v21_3: '',
    o21_3: '>',
    t21_3: '',
    c21_3: '',
    v22_3: '',
    o22_3: '>',
    t22_3: '',
    c22_3: '',
    v23_3: '',
    o23_3: '>',
    t23_3: '',
    c23_3: '',
    v24_3: '',
    o24_3: '>',
    t24_3: '',
    c24_3: '',
    v25_3: '',
    o25_3: '>',
    t25_3: '',
    c25_3: '',
    v26_3: '',
    o26_3: '>',
    t26_3: '',
    c26_3: '',
    v27_3: '',
    o27_3: '>',
    t27_3: '',
    c27_3: '',
    v28_3: '',
    o28_3: '>',
    t28_3: '',
    c28_3: '',
    v29_3: '',
    o29_3: '>',
    t29_3: '',
    c29_3: '',
    v30_3: '',
    o30_3: '>',
    t30_3: '',
    c30_3: '',
    v31_3: '',
    o31_3: '>',
    t31_3: '',
    c31_3: '',
    v32_3: '',
    o32_3: '>',
    t32_3: '',
    c32_3: '',
    v33_3: '',
    o33_3: '>',
    t33_3: '',
    c33_3: '',
    v34_3: '',
    o34_3: '>',
    t34_3: '',
    c34_3: '',
    v35_3: '',
    o35_3: '>',
    t35_3: '',
    c35_3: '',
    v36_3: '',
    o36_3: '>',
    t36_3: '',
    c36_3: '',
    v37_3: '',
    o37_3: '>',
    t37_3: '',
    c37_3: '',
    v38_3: '',
    o38_3: '>',
    t38_3: '',
    c38_3: '',
    v39_3: '',
    o39_3: '>',
    t39_3: '',
    c39_3: '',
    v40_3: '',
    o40_3: '>',
    t40_3: '',
    c40_3: '',
    v41_3: '',
    o41_3: '>',
    t41_3: '',
    c41_3: '',
    v42_3: '',
    o42_3: '>',
    t42_3: '',
    c42_3: '',
    v43_3: '',
    o43_3: '>',
    t43_3: '',
    c43_3: '',
    v44_3: '',
    o44_3: '>',
    t44_3: '',
    c44_3: '',
    converter: conv
  },
  template: '<App/>',
  components: { App },
  computed: {
    customFilter () {
      // console.log('filter: ' + this.q)
      // console.log('op: ' + this.op)
      // q = q.toString().toLowerCase()
      const operatorFromString = {
        '>': function (x, y) { return x > y },
        '<': function (x, y) { return x < y },
        '=': function (x, y) { return x == y }
      }
      // console.log('this of customFilter')
      // console.log(this)
      // this.rows2 = this.csvFilter()
      // rows3 = this.csvFilter()
      // console.log('rows3')
      // console.log(rows3)
      // console.log('this.rows2 before')
      // console.log(this.rows2)
      // rows3 = rows3.filter((row) => {
      // this.rows2 = this.rows2.filter((row) => {
      //   let qd = new Date(this.q4)
      //   qd.setHours(0, 0, 0, 0)
      //   qd.setTime(qd.getTime() + (qd.getTimezoneOffset() * 60 * 1000))
      //   // console.log(qd.getTime())
      //   // console.log(qd)
      //   let d = new Date(row['last_post_date'])
      //   d.setHours(0, 0, 0, 0)
      //   d.setTime(d.getTime() + (d.getTimezoneOffset() * 60 * 1000))
      //   // console.log(d.getTime())
      //   // console.log(d)
      //   // console.log(row['US percent'])

      //   // console.log('this')
      //   // console.log(this)
      //   // console.log('this.v0')
      //   // console.log(this.v0)
      //   // console.log('this.o0')
      //   // console.log(this.o0)
      //   // console.log('this.t0')
      //   // console.log(this.t0)
      //   // console.log('this.c0')
      //   // console.log(this.c0)

      //   // console.log('arr')
      //   // console.log(this.arr)
      //   // console.log('-------------')
      //   // console.log(this[`v${this.nbf}`])

      //   // console.log(this.arr)
      //   // console.log(row)
      //   // console.log(row['US_fans_percent'])
      //   // console.log(row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined)
      //   // console.log(parseFloat(row['US_fans_percent']))
      //   // console.log(this.q3 / 100)
      //   // console.log(operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)))

      //   const unComma = (commad) => {
      //     // console.log(commad)
      //     // console.log(typeof commad)
      //     if (commad && typeof commad === 'string') {
      //       commad = commad.replace(/,/g, '')
      //       return parseInt(commad, 10)
      //     }
      //   }

      //   if (this.nbf) {
      //     for (var findex = 0; findex < 4; findex++) {
      //       for (let index = 0; index < 45; index++) {
      //         if (this[`v${index}_${findex}`] !== '' && this[`v${index}_${findex}`] !== null && this[`v${index}_${findex}`] !== undefined) {
      //           if (this[`o${index}_${findex}`] && this[`c${index}_${findex}`] && this[`t${index}_${findex}`]) {
      //             let countryName = this[`c${index}_${findex}`]
      //             let filterType = this[`t${index}_${findex}`]
      //             let operator = this[`o${index}_${findex}`]
      //             let value = this[`v${index}_${findex}`]
      //             switch (filterType) {
      //               case 'Likes':
      //                 if (row[`${countryName}_Total`] !== null && row[`${countryName}_Total`] !== undefined /* && row[`${countryName}_Total`] !== '' */) {
      //                   if (!(operatorFromString[operator](unComma(row[`${countryName}_Total`]), value))) {
      //                     return false
      //                   }
      //                 }
      //                 break
      //               case 'Likes Percent':
      //                 if (row[`${countryName}_fans_percent`] !== null && row[`${countryName}_fans_percent`] !== undefined /* && row[`${countryName}_fans_percent`] !== '' */) {
      //                   if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], (value / 100)))) {
      //                     return false
      //                   }
      //                 }
      //                 break
      //               case 'Talking About':
      //                 if (row[`${countryName}_people_talking`] !== null && row[`${countryName}_people_talking`] !== undefined /* && row[`${countryName}_people_talking`] !== '' */) {
      //                   if (!(operatorFromString[operator](unComma(row[`${countryName}_people_talking`]), value))) {
      //                     return false
      //                   }
      //                 }
      //                 break
      //               case 'Talking About Percent':
      //                 if (row[`${countryName}_talking_percent`] !== null && row[`${countryName}_talking_percent`] !== undefined /* && row[`${countryName}_talking_percent`] !== '' */) {
      //                   if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], (value / 100)))) {
      //                     return false
      //                   }
      //                 }
      //                 break
      //               default:
      //                 break
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      //   /*
      //   if (this.qarr.length) {
      //     for (let index = 0; index < this.qarr.length; index++) {
      //       let countryFilter = this.qarr[index]
      //       let countryName = countryFilter[4]
      //       for (let i = 0; i < countryFilter.length - 1; i++) {
      //         let value = countryFilter[i]
      //         if (value !== null && value !== '' && value !== undefined) {
      //           switch (i) {
      //             case 0:
      //               if (this.oparr[index][i] && row[`${countryName}_Total`]) {
      //                 if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_Total`], value))) {
      //                   return false
      //                 }
      //               }
      //               break
      //             case 1:
      //               if (this.oparr[index][i] && row[`${countryName}_fans_percent`]) {
      //                 if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_fans_percent`], value))) {
      //                   return false
      //                 }
      //               }
      //               break
      //             case 2:
      //               if (this.oparr[index][i] && row[`${countryName}_people_talking`]) {
      //                 if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_people_talking`], value))) {
      //                   return false
      //                 }
      //               }
      //               break
      //             case 3:
      //               if (this.oparr[index][i] && row[`${countryName}_talking_percent`]) {
      //                 if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_talking_percent`], value))) {
      //                   return false
      //                 }
      //               }
      //               break
      //             default:
      //               break
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if (this.arr.length) {
      //     for (let index = 0; index < this.arr.length; index++) {
      //       let nfilter = this.arr[index]
      //       let countryName = nfilter[3]
      //       let filterType = nfilter[2]
      //       let operator = nfilter[1]
      //       let value = nfilter[0]
      //       if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
      //         switch (filterType) {
      //           case 'Likes':
      //             if (row[`${countryName}_Total`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Likes Percent':
      //             if (row[`${countryName}_fans_percent`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Talking About':
      //             if (row[`${countryName}_people_talking`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Talking About Percent':
      //             if (row[`${countryName}_talking_percent`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           default:
      //             break
      //         }
      //       }
      //     }
      //   }

      //   if (this.nbf) {
      //     for (let index = 0; index < this.nbf; index++) {
      //       let countryName = this[`c${index}`]
      //       let filterType = this[`f${index}`]
      //       let operator = this[`o${index}`]
      //       let value = this[`v${index}`]
      //       if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
      //         switch (filterType) {
      //           case 'Likes':
      //             if (row[`${countryName}_Total`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Likes Percent':
      //             if (row[`${countryName}_fans_percent`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Talking About':
      //             if (row[`${countryName}_people_talking`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Talking About Percent':
      //             if (row[`${countryName}_talking_percent`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           default:
      //             break
      //         }
      //       }
      //     }
      //   }

      //   if (Object.keys(this.arr).length !== 0) {
      //     for (let index = 0; index < Object.keys(this.arr).length; index++) {
      //       let nfilter = this.arr[index]
      //       let countryName = nfilter[3]
      //       let filterType = nfilter[2]
      //       let operator = nfilter[1]
      //       let value = nfilter[0]
      //       if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
      //         switch (filterType) {
      //           case 'Likes':
      //             if (row[`${countryName}_Total`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Likes Percent':
      //             if (row[`${countryName}_fans_percent`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Talking About':
      //             if (row[`${countryName}_people_talking`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           case 'Talking About Percent':
      //             if (row[`${countryName}_talking_percent`]) {
      //               if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
      //                 return false
      //               }
      //             }
      //             break
      //           default:
      //             break
      //         }
      //       }
      //     }
      //   }
      //   */
      //   if (this.q1 || this.q2 || (this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) || this.q4 || (this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) || this.q6) {
      //     return (this.q1 ? operatorFromString[this.op1](unComma(row['fans_count']), this.q1) : true) &&
      //     (this.q2 ? operatorFromString[this.op2](unComma(row['US_Total']), this.q2) : true) &&
      //     (this.q6 ? operatorFromString[this.op6](unComma(row['US_people_talking']), this.q6) : true) &&
      //     ((row['US percent'] !== null && row['US percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : ((row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US_fans_percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : (!((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0))))) &&
      //     (this.q4 ? operatorFromString[this.op4](d.getTime(), qd.getTime()) : true) &&
      //     ((this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) ? operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)) : true)
      //   }
      //   return true
      // })
      // console.log('this.rows2 after')
      // console.log(this.rows2)
      // console.log(this.rows2.__ob__.then((ch) => { console.log('ch: ' + ch) }))

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

        const unComma = (commad) => {
          if (commad && typeof commad === 'string') {
            commad = commad.replace(/,/g, '')
            return parseInt(commad, 10)
          }
          return commad
        }

        if (this.nbf) {
          // console.log('in')
          for (var findex = 0; findex < 4; findex++) {
            for (let index = 0; index < 45; index++) {
              // console.log(this[`v${index}_${findex}`])
              if (this[`v${index}_${findex}`] !== '' && this[`v${index}_${findex}`] !== null && this[`v${index}_${findex}`] !== undefined) {
                if (this[`o${index}_${findex}`] && this[`c${index}_${findex}`] && this[`t${index}_${findex}`]) {
                  let countryName = this[`c${index}_${findex}`]
                  let filterType = this[`t${index}_${findex}`]
                  let operator = this[`o${index}_${findex}`]
                  let value = this[`v${index}_${findex}`]
                  // console.log(row[`${countryName}_Total`])
                  switch (filterType) {
                    case 'Likes':
                      if (row[`${countryName}_Total`] !== null && row[`${countryName}_Total`] !== undefined /* && row[`${countryName}_Total`] !== '' */) {
                        if (!(operatorFromString[operator](unComma(row[`${countryName}_Total`]), value))) {
                          return false
                        }
                      }
                      break
                    case 'Likes Percent':
                      if (row[`${countryName}_fans_percent`] !== null && row[`${countryName}_fans_percent`] !== undefined /* && row[`${countryName}_fans_percent`] !== '' */) {
                        if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], (value / 100)))) {
                          return false
                        }
                      }
                      break
                    case 'Talking About':
                      if (row[`${countryName}_people_talking`] !== null && row[`${countryName}_people_talking`] !== undefined /* && row[`${countryName}_people_talking`] !== '' */) {
                        if (!(operatorFromString[operator](unComma(row[`${countryName}_people_talking`]), value))) {
                          // console.log('value = ' + value + 'row[countryName_people_talking]: ' + row[`${countryName}_people_talking`] + 'unComma(row[countryName_people_talking]): ' + unComma(row[`${countryName}_people_talking`]))
                          return false
                        }
                      }
                      break
                    case 'Talking About Percent':
                      if (row[`${countryName}_talking_percent`] !== null && row[`${countryName}_talking_percent`] !== undefined /* && row[`${countryName}_talking_percent`] !== '' */) {
                        if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], (value / 100)))) {
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
          return (this.q1 ? operatorFromString[this.op1](unComma(row['fans_count']), this.q1) : true) &&
          (this.q2 ? operatorFromString[this.op2](unComma(row['US_Total']), this.q2) : true) &&
          (this.q6 ? operatorFromString[this.op6](unComma(row['US_people_talking']), this.q6) : true) &&
          ((row['US percent'] !== null && row['US percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : ((row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US_fans_percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : (!((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0))))) &&
          (this.q4 ? operatorFromString[this.op4](d.getTime(), qd.getTime()) : true) &&
          ((this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) ? operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)) : true)
        }
        return true
      })
    }
  },
  methods: {
    // csvFilter () {
    //   const operatorFromString = {
    //     '>': function (x, y) { return x > y },
    //     '<': function (x, y) { return x < y },
    //     '=': function (x, y) { return x == y }
    //   }
    //   // console.log('this of csvFilter')
    //   // console.log(this)
    //   // console.log('this.rows2 before')
    //   // console.log(this.rows2)

    //   return this.rows2.filter((row) => {
    //     // return this.rows2.filter((row) => {
    //     let qd = new Date(this.q4)
    //     qd.setHours(0, 0, 0, 0)
    //     qd.setTime(qd.getTime() + (qd.getTimezoneOffset() * 60 * 1000))
    //     // console.log(qd.getTime())
    //     // console.log(qd)
    //     let d = new Date(row['last_post_date'])
    //     d.setHours(0, 0, 0, 0)
    //     d.setTime(d.getTime() + (d.getTimezoneOffset() * 60 * 1000))
    //     // console.log(d.getTime())
    //     // console.log(d)
    //     // console.log(row['US percent'])

    //     // console.log('this')
    //     // console.log(this)
    //     // console.log('this.v0')
    //     // console.log(this.v0)
    //     // console.log('this.o0')
    //     // console.log(this.o0)
    //     // console.log('this.t0')
    //     // console.log(this.t0)
    //     // console.log('this.c0')
    //     // console.log(this.c0)

    //     // console.log('arr')
    //     // console.log(this.arr)
    //     // console.log('-------------')
    //     // console.log(this[`v${this.nbf}`])

    //     // console.log(this.arr)
    //     // console.log(row)
    //     // console.log(row['US_fans_percent'])
    //     // console.log(row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined)
    //     // console.log(parseFloat(row['US_fans_percent']))
    //     // console.log(this.q3 / 100)
    //     // console.log(operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)))

    //     const unComma = (commad) => {
    //       // console.log(commad)
    //       // console.log(typeof commad)
    //       if (commad && typeof commad === 'string') {
    //         commad = commad.replace(/,/g, '')
    //         return parseInt(commad, 10)
    //       }
    //     }
    //     // console.log('this.nbf')
    //     // console.log(this.nbf)
    //     if (this.nbf) {
    //       for (var findex = 0; findex < 4; findex++) {
    //         for (let index = 0; index < 45; index++) {
    //           if (this[`v${index}_${findex}`] !== '' && this[`v${index}_${findex}`] !== null && this[`v${index}_${findex}`] !== undefined) {
    //             if (this[`o${index}_${findex}`] && this[`c${index}_${findex}`] && this[`t${index}_${findex}`]) {
    //               let countryName = this[`c${index}_${findex}`]
    //               let filterType = this[`t${index}_${findex}`]
    //               let operator = this[`o${index}_${findex}`]
    //               let value = this[`v${index}_${findex}`]
    //               switch (filterType) {
    //                 case 'Likes':
    //                   if (row[`${countryName}_Total`] !== null && row[`${countryName}_Total`] !== undefined /* && row[`${countryName}_Total`] !== '' */) {
    //                     if (!(operatorFromString[operator](unComma(row[`${countryName}_Total`]), value))) {
    //                       return false
    //                     }
    //                   }
    //                   break
    //                 case 'Likes Percent':
    //                   if (row[`${countryName}_fans_percent`] !== null && row[`${countryName}_fans_percent`] !== undefined /* && row[`${countryName}_fans_percent`] !== '' */) {
    //                     if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], (value / 100)))) {
    //                       return false
    //                     }
    //                   }
    //                   break
    //                 case 'Talking About':
    //                   if (row[`${countryName}_people_talking`] !== null && row[`${countryName}_people_talking`] !== undefined /* && row[`${countryName}_people_talking`] !== '' */) {
    //                     if (!(operatorFromString[operator](unComma(row[`${countryName}_people_talking`]), value))) {
    //                       return false
    //                     }
    //                   }
    //                   break
    //                 case 'Talking About Percent':
    //                   if (row[`${countryName}_talking_percent`] !== null && row[`${countryName}_talking_percent`] !== undefined /* && row[`${countryName}_talking_percent`] !== '' */) {
    //                     if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], (value / 100)))) {
    //                       return false
    //                     }
    //                   }
    //                   break
    //                 default:
    //                   break
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //     /*
    //     if (this.qarr.length) {
    //       for (let index = 0; index < this.qarr.length; index++) {
    //         let countryFilter = this.qarr[index]
    //         let countryName = countryFilter[4]
    //         for (let i = 0; i < countryFilter.length - 1; i++) {
    //           let value = countryFilter[i]
    //           if (value !== null && value !== '' && value !== undefined) {
    //             switch (i) {
    //               case 0:
    //                 if (this.oparr[index][i] && row[`${countryName}_Total`]) {
    //                   if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_Total`], value))) {
    //                     return false
    //                   }
    //                 }
    //                 break
    //               case 1:
    //                 if (this.oparr[index][i] && row[`${countryName}_fans_percent`]) {
    //                   if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_fans_percent`], value))) {
    //                     return false
    //                   }
    //                 }
    //                 break
    //               case 2:
    //                 if (this.oparr[index][i] && row[`${countryName}_people_talking`]) {
    //                   if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_people_talking`], value))) {
    //                     return false
    //                   }
    //                 }
    //                 break
    //               case 3:
    //                 if (this.oparr[index][i] && row[`${countryName}_talking_percent`]) {
    //                   if (!(operatorFromString[this.oparr[index][i]](row[`${countryName}_talking_percent`], value))) {
    //                     return false
    //                   }
    //                 }
    //                 break
    //               default:
    //                 break
    //             }
    //           }
    //         }
    //       }
    //     }
    //     if (this.arr.length) {
    //       for (let index = 0; index < this.arr.length; index++) {
    //         let nfilter = this.arr[index]
    //         let countryName = nfilter[3]
    //         let filterType = nfilter[2]
    //         let operator = nfilter[1]
    //         let value = nfilter[0]
    //         if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
    //           switch (filterType) {
    //             case 'Likes':
    //               if (row[`${countryName}_Total`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Likes Percent':
    //               if (row[`${countryName}_fans_percent`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Talking About':
    //               if (row[`${countryName}_people_talking`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Talking About Percent':
    //               if (row[`${countryName}_talking_percent`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             default:
    //               break
    //           }
    //         }
    //       }
    //     }

    //     if (this.nbf) {
    //       for (let index = 0; index < this.nbf; index++) {
    //         let countryName = this[`c${index}`]
    //         let filterType = this[`f${index}`]
    //         let operator = this[`o${index}`]
    //         let value = this[`v${index}`]
    //         if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
    //           switch (filterType) {
    //             case 'Likes':
    //               if (row[`${countryName}_Total`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Likes Percent':
    //               if (row[`${countryName}_fans_percent`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Talking About':
    //               if (row[`${countryName}_people_talking`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Talking About Percent':
    //               if (row[`${countryName}_talking_percent`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             default:
    //               break
    //           }
    //         }
    //       }
    //     }

    //     if (Object.keys(this.arr).length !== 0) {
    //       for (let index = 0; index < Object.keys(this.arr).length; index++) {
    //         let nfilter = this.arr[index]
    //         let countryName = nfilter[3]
    //         let filterType = nfilter[2]
    //         let operator = nfilter[1]
    //         let value = nfilter[0]
    //         if (countryName && filterType && operator && value !== null && value !== '' && value !== undefined) {
    //           switch (filterType) {
    //             case 'Likes':
    //               if (row[`${countryName}_Total`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_Total`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Likes Percent':
    //               if (row[`${countryName}_fans_percent`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_fans_percent`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Talking About':
    //               if (row[`${countryName}_people_talking`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_people_talking`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             case 'Talking About Percent':
    //               if (row[`${countryName}_talking_percent`]) {
    //                 if (!(operatorFromString[operator](row[`${countryName}_talking_percent`], value))) {
    //                   return false
    //                 }
    //               }
    //               break
    //             default:
    //               break
    //           }
    //         }
    //       }
    //     }
    //     */
    //     if (this.q1 || this.q2 || (this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) || this.q4 || (this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) || this.q6) {
    //       return (this.q1 ? operatorFromString[this.op1](unComma(row['fans_count']), this.q1) : true) &&
    //       (this.q2 ? operatorFromString[this.op2](unComma(row['US_Total']), this.q2) : true) &&
    //       (this.q6 ? operatorFromString[this.op6](unComma(row['US_people_talking']), this.q6) : true) &&
    //       ((row['US percent'] !== null && row['US percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : ((row['US_fans_percent'] !== null && row['US_fans_percent'] !== undefined) ? ((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0) ? operatorFromString[this.op3](parseFloat(row['US_fans_percent'])/* .toString().replace('%', '').trim()) */, (this.q3 / 100)) : true) : (!((this.q3 !== null && this.q3 !== '' && this.q3 >= 0.0))))) &&
    //       (this.q4 ? operatorFromString[this.op4](d.getTime(), qd.getTime()) : true) &&
    //       ((this.q5 !== null && this.q5 !== '' && this.q5 >= 0.0) ? operatorFromString[this.op5](parseFloat(row['US_talking_percent'])/* .toString().replace('%', '').trim()) */, (this.q5 / 100)) : true)
    //     }
    //     return true
    //   })
    // }
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
      let loading = document.getElementById('search-btn')
      loading.setAttribute('class', 'btn btn-link btn-lg dsiabled')
      loading.setAttribute('disabled', 'disabled')
      // loading.setAttribute('style', 'padding: 12px 16px;')
      loading.innerHTML = 'Loading &nbsp;&nbsp;<i class="fa fa-refresh fa-spin"></i>'
      this.countryVals = []
      document.querySelectorAll('input[type=checkbox]:checked').forEach((box) => {
        this.countryVals.push(box.value)
      }, this)
      // console.log('http://localhost:5000/search?token=' + this.$refs['token'] + '&search_term=' + this.$refs['search'])
      // console.log(document.getElementById('token').value);
      // this.$http.get('http://localhost:5000/search?token=' + document.getElementById('token').value + '&search_term=' + document.getElementById('search').value).then((dataSample) => {
      this.$http.post('http://localhost:5000/search', {token: document.getElementById('token').value, search_term: document.getElementById('search').value, countries: this.countryVals}).then((dataSample, status, request) => {
        // console.log(dataSample.body)
        let body = JSON.parse(dataSample.body)
        let rows = []
        let rows2 = []
        let columns = []
        let nameTmp = []
        let linkTmp = []
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
              // columns.push({label: 'Page Link', field: colName, html: true})
            } else if (colName === 'name') {
              columns.push({label: 'Page Name', field: colName, html: true, filterable: true})
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
                if (val === null) {
                  val = ''
                }
                if (!rows[id]) {
                  rows[id] = {'id': id}
                  rows2[id] = {'id': id}
                }
                rows2[id][colName] = val
                if (colName === 'picture') {
                  rows[id][colName] = '<img src ="' + val + '" />'
                } else if (colName === 'id') {
                  // console.log('in link')
                  linkTmp.push(val)
                  // console.log(linkTmp[id])
                  if (nameTmp[id]) {
                    rows[id]['name'] = '<a class="page_name" href ="' + linkTmp[id] + '" >' + nameTmp[id] + '</a>'
                    // console.log('done: ' + rows[id]['name'])
                  }
                } else if (colName === 'name') {
                  // console.log('in name')
                  nameTmp.push(val)
                  // console.log(nameTmp[id])
                  if (linkTmp[id]) {
                    rows[id]['name'] = '<a href ="' + linkTmp[id] + '" >' + nameTmp[id] + '</a>'
                    // console.log('done: ' + rows[id]['name'])
                  }
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
        // rows3 = rows2
        // console.log(v1.rows)
        v1.columns = columns
        // v1.flag = true
        // console.log(DT)
        setTimeout(() => {
          document.getElementById('app').scrollIntoView()
          loading.setAttribute('class', 'btn btn-default btn-lg btn-block')
          loading.removeAttribute('disabled')
          loading.innerHTML = 'Search'
        }, 400)
      }).catch((err) => {
        console.log(err)
      })
    },
    enter: function (ev) {
      // ev.preventDefault()
      let countryVals = []
      document.querySelectorAll('input[type=checkbox]:checked').forEach(function (box) {
        countryVals.push(box.value)
      }, this)
      if (document.getElementById('token').value && document.getElementById('search').value && countryVals.length) {
        document.getElementById('search-btn').removeAttribute('disabled')
        if (ev.keyCode === 13) {
          this.search()
        }
      } else {
        document.getElementById('search-btn').setAttribute('disabled', 'disabled')
      }
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
