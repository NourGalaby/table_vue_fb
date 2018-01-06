<template>
  <div id="app">
    <!-- <img src="./assets/fb-art.png">
    <br> -->
    <nav class="w3-sidebar w3-collapse w3-light-grey w3-animate-left" style="z-index:3;width:300px;height:60%;overflow:hidden;" id="mySidebar">
      <div style="height:100%" id="fltrprnt">
        <!-- v-on:click="tggleacc" -->
        <button class="accordion2 w3-bar-item w3-button w3-padding w3-dark-grey" v-on:click="tggleacc" >Advanced Filters</button>
        <!-- style="height:350px;margin:auto;" -->
        <div class="panel w3-light-grey" id="fltrdiv">
          <div class="filterbar w3-light-grey" id="filter1">
            <!-- <label for="">Filter by : </label> -->
            <!-- <select v-model="$parent.f"> -->
              <label for="operator1">Fans Count</label>
              <!-- <option value="fans_count">Fans Count</option> -->
              <!-- <option value="US_Total">US Total Fans</option> -->
            
            <!-- </select> -->
            <select v-model="$parent.op1" class="form-control" name="operator1">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="number" v-model="$parent.q1" class="form-control" placeholder="A positive number">
          </div>
          <div class="filterbar w3-light-grey" id="filter4">
            <label for="operator4">Last Post Date</label>
            <select v-model="$parent.op4" class="form-control" name="operator4">
              <option value=">">greater than</option>
              <option value="<">less than</option>
              <option value="=">equal to</option>
            </select>
            <input type="date" v-model="$parent.q4" class="form-control" placeholder="Date">
          </div>
          <div class="filterbar w3-light-grey" id="filter2">
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
          <!-- filter6 yet in main.js -->
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
          </div>
          
          <div id="add-filter">
            <label for="operator4">Choose another country</label>
            <select  class="form-control" name="countries" id="dc-filters">
              <option value="UK">UK</option>
              <option value="JP">JP</option>
              <option value="EG">EG</option>
            </select>
            <button v-on:click="addFilters">Add Filters</button>
          </div>
          <div class="btn-right">
            <button  id="csv-btn" class="btn w3-dark-grey" v-on:click="csv">Save as CSV</button>
          </div>
        </div>
        <button class="accordion2 w3-bar-item w3-button w3-padding w3-dark-grey" v-on:click="tggleacc">Country list</button>
        <div id="cntrydiv">
          <div style="margin-top:2%;">
            <input type="checkbox" name="UKch" id="UKch" value="UK"><label for="UKch">UK</label>
            <input type="checkbox" name="USch" id="USch" value="US" checked><label for="USch">US</label>
            <input type="checkbox" name="EGch" id="EGch" value="EG"><label for="EGch">EG</label>
            <input type="checkbox" name="JPch" id="JPch" value="JP"><label for="JPch">JP</label>
          </div>
          <div class="btn-right">
            <button  id="cntry-btn" class="btn w3-dark-grey" v-on:click="postCountries" >Submit</button>
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
    postCountries: function () {
      let countryVals = document.querySelectorAll('input[type=checkbox]:checked').map(box => box.value)
      this.$http.post('http://localhost:5000/countries', {countries: countryVals}).then((data, status, request) => {}).catch((error) => { console.log(error) })
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

      slct1.setAttribute('v-model', `$parent.oparr[${this.f - 7}][1]`)
      slct1.setAttribute('class', 'form-control')
      slct1.setAttribute('name', `operator${localf}`)
      slct1.add(opGreater)
      slct1.add(opLess)
      slct1.add(opEqual)
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

      slct2.setAttribute('v-model', `$parent.oparr[${this.f - 7}][2]`)
      slct2.setAttribute('class', 'form-control')
      slct.setAttribute('name', `operator${localf}`)
      slct.add(opGreater)
      slct.add(opLess)
      slct.add(opEqual)
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

      slct3.setAttribute('v-model', `$parent.oparr[${this.f - 7}][3]`)
      slct3.setAttribute('class', 'form-control')
      slct3.setAttribute('name', `operator${localf}`)
      slct3.add(opGreater)
      slct3.add(opLess)
      slct3.add(opEqual)
      let filterDiv3 = document.createElement('div')
      filterDiv3.appendChild(lbl3)
      filterDiv3.appendChild(slct3)
      filterDiv3.appendChild(inpt3)

      document.getElementById('fltrdiv').insertBefore(filterDiv, document.getElementById('add-filter'))
      document.getElementById('fltrdiv').insertBefore(filterDiv1, document.getElementById('add-filter'))
      document.getElementById('fltrdiv').insertBefore(filterDiv2, document.getElementById('add-filter'))
      document.getElementById('fltrdiv').insertBefore(filterDiv3, document.getElementById('add-filter'))
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
    height: 80%;
    overflow-y: scroll;
    /* margin: auto;
    width: 75%; */
  }
  #cntrydiv {
    padding: 0 6px;
    display: none;
    /* padding: 1%; */
    height: 80%;
    overflow-y: scroll;
  }
  .filterbar {
    overflow: hidden;
    background-color: #e9e9e9;
    
  }
  .filterbar input, .filterbar select, .filterbar label {
    
    padding: 2px;
    border: none;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 5px;
    padding: 4px 5px;
    
    font-size: smaller;
  }
  .filterbar label {
    width: 100%;
    margin-top: 16px;
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
