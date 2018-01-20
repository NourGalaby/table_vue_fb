<template>
<div class="row search_c" id="app" style="background:linear-gradient(#07192f,#07192f)">

	<div id="mySidenav" class="sidenav">
	  <div class="panel panel-success" style="margin:0;width:250px;">
		  <div data-toggle="collapse~" data-target="#filter_c" class="panel-heading text-left" style="color:#fff;background-color:#07192f;">
			Advanced Filters
			<span class="sidenav_close pull-right glyphicon glyphicon-remove-sign" onclick="closeNav()"></span>	
		  </div>
		  <div id="filter_c" class="collapse in panel-body">
			<div class="filterbar bg-light~" id="filter1">
				<label style="margin-bottom: .2rem;" for="operator1">Fans Count</label>
				<form class="form-inline" > 
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<select v-model="$parent.op1" class="form-control" style="width:100%;font-size:12px;" name="operator1">
								<option value=">">greater than</option>
								<option value="<">less than</option>
								<option value="=">equal to</option>
							</select>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<input type="number" v-model="$parent.q1" class="form-control" style="width:100%;font-size:12px;" placeholder="A positive number">
						</div>
					</div>
				</form>
			</div>
			<div class="clearfix" style="clear:both;"></div>
			<div class="filterbar bg-light~" id="filter4">
				<label style="margin-top: .9rem;margin-bottom: .2rem;" for="operator4">Last Post Date</label>
				<form class="form-inline" > 
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<select v-model="$parent.op4" class="form-control" style="width:100%;font-size:12px;" name="operator4">
								<option value=">">greater than</option>
								<option value="<">less than</option>
								<option value="=">equal to</option>
							</select>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<input type="date" v-model="$parent.q4" class="form-control" style="width:100%;font-size:12px;padding-left:5px;" placeholder="Date">
						</div>
					</div>
				</form>
			</div>
			<div class="clearfix" style="clear:both;"></div>
			<div id="add-filter" style="margin-top:2px;" >
				<label for="operator4">Custom filter</label>
				<form class="form-inline" > 
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<select  class="form-control" style="width:100%;font-size:12px;" name="countries" id="dc-filters">
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
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<select class="form-control" style="width:100%;font-size:12px;" name="type" id="dc-filter-type">
								<option value="Likes">Likes</option> 
								<option value="Likes Percent">Likes Percent</option>
								<option value="Talking About">Talking About</option>
								<option value="Talking About Percent">Talking About Percent</option>
							</select>
						</div>
					</div>
				</form>
				<div class="clearfix" style="clear:both;"><br/></div>
				<button v-on:click="addFilter" class="btn btn-block" style="font-size:10px;">Add Filter</button>
			</div>
			<div id="added-filters0"></div>
		  </div>
		  <div class="panel-footer">
			<button class="btn btn-info btn-block" id="csv-btn" v-on:click="csv">Save as CSV</button>
		  </div>
		</div>
		  
	</div>

	<div class="clearfix" style="clear:both;"></div>
	<div class="container" style="margin: auto auto 20px;border-radius: 4px;padding-top: 20px;max-width: 95%;margin-top: -48px;">
		<div class="row" style="position:relative;">
			<div class="filter" onclick="openNav();">
				<span class="glyphicon glyphicon-filter"></span>
			</div>
			
			<div id="result_cont" style="transition: all 1s ease-in-out;" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div v-if="$parent.flag" class="result_table rounded" style="position:relative;" >
				  <vue-good-table
					title=""
					styleClass="table table-striped table-hover table-condensed w3-light-grey~"       
					:columns="$parent.columns"
					:rows="$parent.customFilter"
					:paginate="true"
					:globalSearch="true"
					:lineNumbers="false">
					</vue-good-table>
				</div>			
			</div>
		</div>
	</div>
	
	<div class="clearfix" style="clear:both;"></div>
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
      const cloneDeep = require('lodash.clonedeep')
      // console.log(this)
      // console.log(this.$children)
      // console.log(this.$parent.customFilter)
      // this.$parent.rows2 = this.$parent.csvFilter()
      // let csvRows = this.$parent.csvFilter()
      let csvRows = this.$parent.customFilter.map((xrow) => {
        let row = cloneDeep(xrow)
        for (var key in row) {
          if (row.hasOwnProperty(key)) {
            var col = row[key]
            if (typeof col === 'string') {
              if (col.indexOf('<img src ="') > -1) {
                // console.log('col.match(/"([^"]+)"/)[1]')
                // console.log(col.match(/"([^"]+)"/)[1])
                row[key] = col.match(/"([^"]+)"/)[1]
              } else if (col.indexOf('<a href ="') > -1) {
                row.id = col.match(/"([^"]+)"/)[1]
                row.name = col.match(/>([^<]+)</)[1]
              } else {
                row[key] = `"${col}"`
              }
            } else {
              row[key] = `"${col}"`
            }
          }
        }
        return row
      })
      converter.json2csv(csvRows, (err, converted) => {
        if (err) {
          console.log(err)
        } else {
          // console.log('converted:: ')
          // console.log(converted)
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
      }, {
        delimiter: {
          field: ','
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
      var Vue = require('vue')
      const filterCountry = document.getElementById('dc-filters').options[document.getElementById('dc-filters').selectedIndex].value
      const filterType = document.getElementById('dc-filter-type').options[document.getElementById('dc-filter-type').selectedIndex].value
      const si = document.getElementById('dc-filters').selectedIndex
      const sc = document.getElementById('dc-filter-type').selectedIndex
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

      // let lbl = document.createElement('LABEL')
      // let slct = document.createElement('SELECT')
      // let inpt = document.createElement('INPUT')
      // lbl.setAttribute('for', `noperator${this.$parent.nbf}`)
      // lbl.textContent = `${filterCountry} ${filterType}`
      // inpt.setAttribute('type', 'text')
      // inpt.setAttribute('id', `id${this.$parent.nbf}`)
      // // inpt.setAttribute('v-model', `$parent.arr[${this.$parent.nbf}][0]`)
      // inpt.setAttribute('v-model', `$parent.v${si}`)
      // // inpt.setAttribute('v-on:change', 'alert("ch")')
      // inpt.setAttribute('class', 'form-control')
      // inpt.setAttribute('placeholder', 'A positive number')
      // let opGreater = document.createElement('option')
      // opGreater.text = 'greater than'
      // opGreater.setAttribute('value', '>')
      // opGreater.setAttribute('selected', 'true')
      // let opLess = document.createElement('option')
      // opLess.text = 'less than'
      // opLess.setAttribute('value', '<')
      // let opEqual = document.createElement('option')
      // opEqual.text = 'equal to'
      // opEqual.setAttribute('value', '=')
      // slct.setAttribute('v-model', `$parent.o${si}`)
      // slct.setAttribute('class', 'form-control')
      // slct.setAttribute('name', `noperator${this.$parent.nbf}`)
      // slct.add(opGreater)
      // slct.add(opLess)
      // slct.add(opEqual)
      // let filterDiv = document.createElement('div')
      // filterDiv.appendChild(lbl)
      // filterDiv.appendChild(slct)
      // filterDiv.appendChild(inpt)
      // let $element = this.$parent.$el.append(filterDiv)
      // console.log(Vue)
      // console.log(this.$parent.c0)
      // console.log(this.x.c0)
      // console.log(v1)

      // let x = this.$parent
      // with(this){return _c('div',[_c('label',{attrs:{"for":"noperator1"}},[_v("AE Likes")]),_c('select',{directives:[{name:"model",rawName:"v-model"}],staticClass:"form-control",attrs:{"name":"noperator1"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); =$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":">"}},[_v("greater than")]),_c('option',{attrs:{"value":"<"}},[_v("less than")]),_c('option',{attrs:{"value":"="}},[_v("equal to")])]),_c('input',{directives:[{name:"model",rawName:"v-model",value:($parent.v0),expression:"$parent.v0"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"A positive number"},domProps:{"value":($parent.v0)},on:{"input":function($event){if($event.target.composing)return;$set($parent, "v0", $event.target.value)}}})])}
      // let res = Vue.default.compile(`<div><label for="noperator${this.$parent.nbf}">${filterCountry} ${filterType}</label><select v-model="$parent['o${si}']" class="form-control" name="noperator${this.$parent.nbf}"><option value=">">greater than</option><option value="<">less than</option><option value="=">equal to</option></select><input type="text"  v-model="$parent['v${si}']" class="form-control" placeholder="A positive number"></div>`)

      if (this.$parent[`t${si}_${sc}`] === '' && this.$parent[`c${si}_${sc}`] === '') {
        this.$parent[`v${si}_${sc}`] = ''
        this.$parent[`o${si}_${sc}`] = '>'
        this.$parent[`t${si}_${sc}`] = filterType
        this.$parent[`c${si}_${sc}`] = filterCountry

        var self = this

        /* let res = Vue.default.compile(`<div><div class="bg-light" ><label for="noperator${this.$parent.nbf}">${filterCountry} ${filterType}</label><form class="form-inline" > <div style="float:none;margin: 0 auto;"><select v-model="parent2.$parent['o${si}_${sc}']" class="form-control mb-1 mr-sm-1 mb-sm-1 ml-sm-1" style="font-size:10px;" name="noperator${this.$parent.nbf}"><option  value=">" >greater than</option><option value="<">less than</option><option value="=">equal to</option></select><input type="number" v-model="parent2.$parent['v${si}_${sc}']" style="font-size:10px;" class="form-control mb-1 mr-sm-1 mb-sm-1 " placeholder="A positive number"></div></form></div><div id="added-filters${this.$parent.nbf + 1}" ></div></div>`) */
		let res = Vue.default.compile(`<div><div class="bg-light"><label style="margin-top: .9rem;margin-bottom: .2rem;" for="noperator${this.$parent.nbf}">${filterCountry} ${filterType}</label><form class="form-inline" ><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><select v-model="parent2.$parent['o${si}_${sc}']" class="form-control" style="width:100%;font-size:12px;padding-left:5px;" name="noperator${this.$parent.nbf}"><option  value=">" >greater than</option><option value="<">less than</option><option value="=">equal to</option></select></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><input type="number" v-model="parent2.$parent['v${si}_${sc}']" class="form-control" style="width:100%;font-size:12px;padding-left:5px;" placeholder="A positive number"></div></div></form></div><div id="added-filters${this.$parent.nbf + 1}" ></div></div>`)
        new Vue.default({
          el: `#added-filters${this.$parent.nbf}`,
          data: {
            parent2: self
          },
          render: res.render,
          staticRenderFns: res.staticRenderFns
        })
        // document.getElementById('fltrdiv').insertBefore(res, document.getElementById('add-filter'))
        // document.getElementById('fltrdiv').insertBefore(filterDiv, document.getElementById('add-filter'))
        document.getElementsByName(`noperator${this.$parent.nbf}`)[0].value = '>'
        this.$parent.nbf++
      }
    }
  }
}
</script>