<template>
  <div id="app">
    <!-- <img src="./assets/fb-art.png">
    <br> -->
    <nav class="w3-sidebar w3-collapse w3-light-grey w3-animate-left" style="z-index:3;width:300px;height:60%;overflow:hidden;" id="mySidebar">
      <div style="height:100%" id="fltrprnt">
        <!-- v-on:click="tggleacc" -->
        <button class="accordion2 w3-bar-item w3-button w3-padding w3-dark-grey" >Advanced Filters</button>
        <!-- style="height:350px;margin:auto;" -->
        <div class="panel w3-light-grey" id="fltrdiv">
          <div class="filterbar bg-secondary" id="filter1">
            <!-- <label for="">Filter by : </label> -->
            <!-- <select v-model="$parent.f"> -->
              <label for="operator1">Fans Count</label>
              <!-- <option value="fans_count">Fans Count</option> -->
              <!-- <option value="US_Total">US Total Fans</option> -->
            
            <!-- </select> -->
            <form class="form-inline" > <div style="float:none;margin: 0 auto;">
            <select v-model="$parent.op1" class="form-control mb-1 mr-sm-1 mb-sm-1 ml-sm-1" style="font-size:10px;" name="operator1">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="number" v-model="$parent.q1" class="form-control mb-1 mr-sm-1 mb-sm-1 " style="font-size:10px;" placeholder="A positive number">
            </div>
            </form>
          </div>
          <div class="filterbar bg-secondary" id="filter4">

            <label for="operator4">Last Post Date</label>
            <form class="form-inline" > <div style="float:none;margin: 0 auto;">
            <select v-model="$parent.op4" class="form-control mb-1 mr-sm-1 mb-sm-1 ml-sm-1" name="operator4" style="font-size:10px;">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="date" v-model="$parent.q4" class="form-control mb-1 mr-sm-1 mb-sm-1" placeholder="Date" style="font-size:10px;">
            </div>
            </form>
          </div>
          <!-- <div class="filterbar w3-light-grey" id="filter2">
            <label for="operator2">US Total Fans</label>
            <select v-model="$parent.op2" class="form-control" name="operator2">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="number" v-model="$parent.q2" class="form-control" placeholder="A positive number">
          </div>
          <div class="filterbar w3-light-grey" id="filter3">
            <label for="operator3">US Likes Percent</label>
            <select v-model="$parent.op3" class="form-control" name="operator3">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="text" v-model="$parent.q3" class="form-control" placeholder="e.g. 50.5">
          </div>
          
          <div class="filterbar w3-light-grey" id="filter6">
            <label for="operator6">US Talking About</label>
            <select v-model="$parent.op6" class="form-control" name="operator6">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="text" v-model="$parent.q6" class="form-control" placeholder="A positive number">
          </div>
          <div class="filterbar w3-light-grey" id="filter5">
            <label for="operator5">US Talking About Percent</label>
            <select v-model="$parent.op5" class="form-control" name="operator5">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="text" v-model="$parent.q5" class="form-control" placeholder="e.g. 50.5">
          </div> -->
          <div id="add-filter" class="bg-secondary" style="margin-top:2px;" >
            
            <label for="operator4">Custom filter</label>
            <form class="form-inline" > <div style="float:none;margin: 0 auto;">
            <select  class="form-control mb-1 mr-sm-1 mb-sm-1 ml-sm-1" name="countries" id="dc-filters" style="font-size:10px;">
              <option value="AE">AE</option> 
              <option value="AR">AR</option>
              <option value="AU">AU</option>
              <option value="BD">BD</option>
              <option value="BE">BE</option>
              <option value="BR">BR</option>
              <option value="CA">CA</option>
              <option value="CL">CL</option>
              <option value="CO">CO</option>
              <option value="DE">DE</option>
              <option value="DZ">DZ</option>
              <option value="EC">EC</option>
              <option value="EG">EG</option>
              <option value="ES">ES</option>
              <option value="FR">FR</option>
              <option value="GB">GB</option>
              <option value="HK">HK</option>
              <option value="ID">ID</option>
              <option value="IN">IN</option>
              <option value="IQ">IQ</option>
              <option value="IR">IR</option>
              <option value="IT">IT</option>
              <option value="JP">JP</option>
              <option value="KH">KH</option>
              <option value="KR">KR</option>
              <option value="LK">LK</option>
              <option value="MA">MA</option>
              <option value="MM">MM</option>
              <option value="MX">MX</option>
              <option value="MY">MY</option>
              <option value="PE">PE</option>
              <option value="PH">PH</option>
              <option value="PK">PK</option>
              <option value="PL">PL</option>
              <option value="RO">RO</option>
              <option value="SA">SA</option>
              <option value="SG">SG</option>
              <option value="SY">SY</option>
              <option value="TH">TH</option>
              <option value="TN">TN</option>
              <option value="TR">TR</option>
              <option value="TW">TW</option>
              <option value="US" selected>US</option>
              <option value="VE">VE</option>
              <option value="VN">VN</option>
            </select>
            <select class="form-control mb-1 mr-sm-1 mb-sm-1 " name="type" id="dc-filter-type" style="font-size:10px;">
              <option value="Likes">Likes</option> 
              <option value="Likes Percent">Likes Percent</option>
              <option value="Talking About">Talking About</option>
              <option value="Talking About Percent">Talking About Percent</option>
            </select>
            
            </div>
            
            </form>
            <button v-on:click="addFilter" class="btn w3-dark-grey mb-sm-1  " style="font-size:10px;">Add Filter</button>
          </div>
          <div id="added-filters"></div>
          
          <div class="btn-right">
            <button  id="csv-btn" class="btn w3-dark-grey" v-on:click="csv">Save as CSV</button>
          </div>
        </div>
        
      </div>
    </nav>
    <!-- <router-view/> -->
    <!-- <dts v-if="$parent.flag" :flag='$parent.flag' :prows='$parent.rows' :pcolumns='$parent.columns'></dts> -->
    <!-- <b-alert show variant="primary">Primary Alert</b-alert> -->
    <!-- styleClass="edited-table" -->
    <!-- responsive=false -->
    
<div class="sub-body w3-main" style="margin-left:300px;margin-top:43px;padding-left:20px;">
  
    <div v-if="$parent.flag" class="w3-light-grey" >
      <vue-good-table
        title=""
        styleClass="table table-bordered w3-light-grey"
        
        :columns="$parent.columns"
        :rows="$parent.customFilter"
        :paginate="true"
        :lineNumbers="true"/>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      f: 6
    }
  },
  methods: {
    tggleacc: function (event) {
      // var panel = event.target.nextElementSibling
      // console.log(panel.style.display);
      var filterPanel = document.getElementById('fltrdiv')
      var countryPanel = document.getElementById('cntrydiv')
      if (filterPanel.style.display !== 'none') {
        filterPanel.style.display = 'none'
        countryPanel.style.display = 'block'
      } else {
        filterPanel.style.display = 'block'
        countryPanel.style.display = 'none'
      }
    },
    csv: function () {
      const converter = require('json-2-csv')
      // console.log(this)
      // console.log(this.$children)
      // console.log(this.$parent.customFilter)
      converter.json2csv(this.$parent.rows2, (err, converted) => {
        if (err) {
          console.log(err)
        } else {
          console.log(converted)
          let csvContent = 'data:text/csv;charset=utf-8,'
          csvContent += converted
          // converted.forEach(function(rowArray){
          //   let row = rowArray.join(",")
          //   csvContent += row + "\r\n" // add carriage return
          // });
          var encodedUri = encodeURI(csvContent)
          var link = document.createElement('a')
          link.setAttribute('href', encodedUri)
          link.setAttribute('download', 'statistics.csv')
          document.body.appendChild(link) // Required for FF

          link.click()
        }
      })
    },
    addFilters: function () {
      const filterCountry = document.getElementById('dc-filters').options[document.getElementById('dc-filters').selectedIndex].value
      this.f++
      let localf = this.f
      this.$parent.qarr[this.f - 7] = [null, null, null, null, filterCountry]
      this.$parent.oparr[this.f - 7] = [null, null, null, null]
      let lbl = document.createElement('LABEL')
      let slct = document.createElement('SELECT')
      let inpt = document.createElement('INPUT')
      lbl.setAttribute('for', `operator${localf}`)
      lbl.textContent = `${filterCountry} Likes`
      inpt.setAttribute('type', 'text')
      inpt.setAttribute('v-model', `$parent.qarr[${this.f - 7}][0]`)
      inpt.setAttribute('class', 'form-control')
      inpt.setAttribute('placeholder', 'A positive number')
      let opGreater = document.createElement('option')
      opGreater.text = 'greater than'
      opGreater.setAttribute('value', '>')
      let opLess = document.createElement('option')
      opLess.text = 'less than'
      opLess.setAttribute('value', '<')
      let opEqual = document.createElement('option')
      opEqual.text = 'equal to'
      opEqual.setAttribute('value', '=')
      slct.setAttribute('v-model', `$parent.oparr[${this.f - 7}][0]`)
      slct.setAttribute('class', 'form-control')
      slct.setAttribute('name', `operator${localf}`)
      slct.add(opGreater)
      slct.add(opLess)
      slct.add(opEqual)
      let filterDiv = document.createElement('div')
      filterDiv.appendChild(lbl)
      filterDiv.appendChild(slct)
      filterDiv.appendChild(inpt)
      // --------
      localf++
      let lbl1 = document.createElement('LABEL')
      let slct1 = document.createElement('SELECT')
      let inpt1 = document.createElement('INPUT')
      lbl1.setAttribute('for', `operator${localf}`)
      lbl1.textContent = `${filterCountry} Likes Percent`
      inpt1.setAttribute('type', 'text')
      inpt1.setAttribute('v-model', `$parent.qarr[${this.f - 7}][1]`)
      inpt1.setAttribute('class', 'form-control')
      inpt1.setAttribute('placeholder', 'e.g. 50.5')

      let opGreater1 = document.createElement('option')
      opGreater1.text = 'greater than'
      opGreater1.setAttribute('value', '>')
      let opLess1 = document.createElement('option')
      opLess1.text = 'less than'
      opLess1.setAttribute('value', '<')
      let opEqual1 = document.createElement('option')
      opEqual1.text = 'equal to'
      opEqual1.setAttribute('value', '=')

      slct1.setAttribute('v-model', `$parent.oparr[${this.f - 7}][1]`)
      slct1.setAttribute('class', 'form-control')
      slct1.setAttribute('name', `operator${localf}`)
      slct1.add(opGreater1)
      slct1.add(opLess1)
      slct1.add(opEqual1)
      let filterDiv1 = document.createElement('div')
      filterDiv1.appendChild(lbl1)
      filterDiv1.appendChild(slct1)
      filterDiv1.appendChild(inpt1)
      // --------
      localf++
      let lbl2 = document.createElement('LABEL')
      let slct2 = document.createElement('SELECT')
      let inpt2 = document.createElement('INPUT')
      lbl2.setAttribute('for', `operator${localf}`)
      lbl2.textContent = `${filterCountry} Talking About`
      inpt2.setAttribute('type', 'text')
      inpt2.setAttribute('v-model', `$parent.qarr[${this.f - 7}][2]`)
      inpt2.setAttribute('class', 'form-control')
      inpt2.setAttribute('placeholder', 'A positive number')

      let opGreater2 = document.createElement('option')
      opGreater2.text = 'greater than'
      opGreater2.setAttribute('value', '>')
      let opLess2 = document.createElement('option')
      opLess2.text = 'less than'
      opLess2.setAttribute('value', '<')
      let opEqual2 = document.createElement('option')
      opEqual2.text = 'equal to'
      opEqual2.setAttribute('value', '=')

      slct2.setAttribute('v-model', `$parent.oparr[${this.f - 7}][2]`)
      slct2.setAttribute('class', 'form-control')
      slct2.setAttribute('name', `operator${localf}`)
      slct2.add(opGreater2)
      slct2.add(opLess2)
      slct2.add(opEqual2)

      let filterDiv2 = document.createElement('div')
      filterDiv2.appendChild(lbl2)
      filterDiv2.appendChild(slct2)
      filterDiv2.appendChild(inpt2)
      localf++
      let lbl3 = document.createElement('LABEL')
      let slct3 = document.createElement('SELECT')
      let inpt3 = document.createElement('INPUT')
      lbl3.setAttribute('for', `operator${localf}`)
      lbl3.textContent = `${filterCountry} Talking About Percent`
      inpt3.setAttribute('type', 'text')
      inpt3.setAttribute('v-model', `$parent.qarr[${this.f - 7}][3]`)
      inpt3.setAttribute('class', 'form-control')
      inpt3.setAttribute('placeholder', 'e.g. 50.5')

      let opGreater3 = document.createElement('option')
      opGreater3.text = 'greater than'
      opGreater3.setAttribute('value', '>')
      let opLess3 = document.createElement('option')
      opLess3.text = 'less than'
      opLess3.setAttribute('value', '<')
      let opEqual3 = document.createElement('option')
      opEqual3.text = 'equal to'
      opEqual3.setAttribute('value', '=')

      slct3.setAttribute('v-model', `$parent.oparr[${this.f - 7}][3]`)
      slct3.setAttribute('class', 'form-control')
      slct3.setAttribute('name', `operator${localf}`)
      slct3.add(opGreater3)
      slct3.add(opLess3)
      slct3.add(opEqual3)
      let filterDiv3 = document.createElement('div')
      filterDiv3.appendChild(lbl3)
      filterDiv3.appendChild(slct3)
      filterDiv3.appendChild(inpt3)

      document.getElementById('fltrdiv').insertBefore(filterDiv, document.getElementById('add-filter'))
      document.getElementById('fltrdiv').insertBefore(filterDiv1, document.getElementById('add-filter'))
      document.getElementById('fltrdiv').insertBefore(filterDiv2, document.getElementById('add-filter'))
      document.getElementById('fltrdiv').insertBefore(filterDiv3, document.getElementById('add-filter'))
    },
    ch: function (ev) {
      // console.log('ch')
      this.$parent.$set(this.$parent.arr[this.$parent.nbf], 0, ev.target.value)
    },
    addFilter: function () {
      var Vue = require('vue');
      const filterCountry = document.getElementById('dc-filters').options[document.getElementById('dc-filters').selectedIndex].value
      const filterType = document.getElementById('dc-filter-type').options[document.getElementById('dc-filter-type').selectedIndex].value
      const si = document.getElementById('dc-filters').selectedIndex
      // this.$parent.$set(this.$parent.arr, this.$parent.nbf, {})
      // this.$parent.$set(this.$parent.arr[this.$parent.nbf], 0, null)
      // this.$parent.$set(this.$parent.arr[this.$parent.nbf], 1, null)
      // this.$parent.$set(this.$parent.arr[this.$parent.nbf], 2, filterType)
      // this.$parent.$set(this.$parent.arr[this.$parent.nbf], 3, filterCountry)

      // this.$parent.arr[this.$parent.nbf] = {
      //   0: null,
      //   1: null,
      //   2: filterType,
      //   3: filterCountry
      // }
      // this.$parent[`v${this.$parent.nbf}`] = null
      // this.$parent[`o${this.$parent.nbf}`] = null
      // this.$parent[`f${this.$parent.nbf}`] = filterType
      // this.$parent[`c${this.$parent.nbf}`] = filterCountry

      this.$parent[`v${si}`] = ''
      this.$parent[`o${si}`] = ''
      this.$parent[`t${si}`] = filterType
      this.$parent[`c${si}`] = filterCountry
      let lbl = document.createElement('LABEL')
      let slct = document.createElement('SELECT')
      let inpt = document.createElement('INPUT')
      lbl.setAttribute('for', `noperator${this.$parent.nbf}`)
      lbl.textContent = `${filterCountry} ${filterType}`
      inpt.setAttribute('type', 'text')
      inpt.setAttribute('id', `id${this.$parent.nbf}`)
      // inpt.setAttribute('v-model', `$parent.arr[${this.$parent.nbf}][0]`)
      inpt.setAttribute('v-model', `$parent.v${si}`)
      // inpt.setAttribute('v-on:change', 'alert("ch")')
      inpt.setAttribute('class', 'form-control')
      inpt.setAttribute('placeholder', 'A positive number')
      let opGreater = document.createElement('option')
      opGreater.text = 'greater than'
      opGreater.setAttribute('value', '>')
      opGreater.setAttribute('selected', 'true')
      let opLess = document.createElement('option')
      opLess.text = 'less than'
      opLess.setAttribute('value', '<')
      let opEqual = document.createElement('option')
      opEqual.text = 'equal to'
      opEqual.setAttribute('value', '=')
      slct.setAttribute('v-model', `$parent.o${si}`)
      slct.setAttribute('class', 'form-control')
      slct.setAttribute('name', `noperator${this.$parent.nbf}`)
      slct.add(opGreater)
      slct.add(opLess)
      slct.add(opEqual)
      let filterDiv = document.createElement('div')
      filterDiv.appendChild(lbl)
      filterDiv.appendChild(slct)
      filterDiv.appendChild(inpt)
      // let $element = this.$parent.$el.append(filterDiv)
      // console.log(Vue)
      // console.log(this.$parent.c0)
      // console.log(this.x.c0)
      // console.log(v1)
      var self = this
      // let x = this.$parent
      // with(this){return _c('div',[_c('label',{attrs:{"for":"noperator1"}},[_v("AE Likes")]),_c('select',{directives:[{name:"model",rawName:"v-model"}],staticClass:"form-control",attrs:{"name":"noperator1"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); =$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":">"}},[_v("greater than")]),_c('option',{attrs:{"value":"<"}},[_v("less than")]),_c('option',{attrs:{"value":"="}},[_v("equal to")])]),_c('input',{directives:[{name:"model",rawName:"v-model",value:($parent.v0),expression:"$parent.v0"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"A positive number"},domProps:{"value":($parent.v0)},on:{"input":function($event){if($event.target.composing)return;$set($parent, "v0", $event.target.value)}}})])}
      // let res = Vue.default.compile(`<div><label for="noperator${this.$parent.nbf}">${filterCountry} ${filterType}</label><select v-model="$parent['o${si}']" class="form-control" name="noperator${this.$parent.nbf}"><option value=">">greater than</option><option value="<">less than</option><option value="=">equal to</option></select><input type="text"  v-model="$parent['v${si}']" class="form-control" placeholder="A positive number"></div>`)
      let res = Vue.default.compile(`<div><div class="bg-info" ><label for="noperator${this.$parent.nbf}">${filterCountry} ${filterType}</label><form class="form-inline" > <div style="float:none;margin: 0 auto;"><select v-model="parent2.$parent['o${si}']" class="form-control mb-1 mr-sm-1 mb-sm-1 ml-sm-1" style="font-size:10px;" name="noperator${this.$parent.nbf}"><option value=">" selected>greater than</option><option value="<">less than</option><option value="=">equal to</option></select><input type="text" v-model="parent2.$parent['v${si}']" style="font-size:10px;" class="form-control mb-1 mr-sm-1 mb-sm-1 " placeholder="A positive number"></div></form></div><div id="added-filters" ></div></div>`)
      new Vue.default({
        el: '#added-filters',
        data: {
          parent2: self
        },
        render: res.render,
        staticRenderFns: res.staticRenderFns
      })
      // document.getElementById('fltrdiv').insertBefore(res, document.getElementById('add-filter'))
      // document.getElementById('fltrdiv').insertBefore(filterDiv, document.getElementById('add-filter'))
      this.$parent.nbf++
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  .table {
    /* margin: auto;
    width: 75%; */
    font-size: small;
    overflow: hidden;
    /* table-layout: fixed; */
    /* width: 200px; */
  }
  /* .table * {
    overflow: hidden;
  } */
  .table th {
    font-size: small;
    text-align: center;
  }
  .row{
    font-size: small;
  }
  .edited-table {
    overflow: hidden;
  }
  /* Style the buttons that are used to open and close the accordion panel */
  .accordion2 {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    /* margin: auto; */
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active, .accordion2:hover {
    background-color: #ccc;
  }

  /* Style the accordion panel. Note: hidden by default */
  .panel {
    padding: 0 6px;
    background-color: #ddd;
    display: block;
    height: 90%;
    overflow-y: scroll;
    /* margin: auto;
    width: 75%; */
  }
  /* #cntrydiv {
    padding: 0 6px;
    display: none;
    padding: 1%;
    height: 80%;
    overflow-y: scroll;
  } */
  .filterbar {
    overflow: hidden;
    background-color: #e9e9e9;
    
  }
  .filterbar input, .filterbar select, .filterbar label {
    
    padding: 2px;
    border: none;
    margin-top: 1px;
    margin-bottom: 1px;
    /* margin-left: 5px; */
    padding: 4px 5px;
    
    font-size: smaller;
  }
  .filterbar label {
    width: 100%;
    margin-top: 5px;
  }
  .btn-right {
    float: right;
    padding: 6px;
    margin-top: 3px;
    margin-bottom: 3px;
    /* display: inline-block; */
  }
  /* nav {
    height: 40%;
  } */
  /* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 1.25em; height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '✔';
  position: absolute;
  top: .1em; left: .15em;
  font-size: 1.4em;
  line-height: 0.8;
  color: #09ad7e;
  transition: all .2s;
  font-family: Helvetica, Arial, sans-serif;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}

/* hover style just for information */
label:hover:before {
  border: 2px solid #4778d9!important;
}
.w3-dark-grey {
  color: #fff!important;
  background-color: #009688!important;
}
</style>
