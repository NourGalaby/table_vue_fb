webpackJsonp([1],{0:function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n={name:"app",data:function(){return{f:6}},methods:{tggleacc:function(t){var e=document.getElementById("fltrdiv"),r=document.getElementById("cntrydiv");"none"!==e.style.display?(e.style.display="none",r.style.display="block"):(e.style.display="block",r.style.display="none")},csv:function(){r("Q0Wf").json2csv(this.$parent.rows2,function(t,e){if(t)console.log(t);else{console.log(e);var r="data:text/csv;charset=utf-8,";r+=e;var a=encodeURI(r),n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download","statistics.csv"),document.body.appendChild(n),n.click()}})},addFilters:function(){var t=document.getElementById("dc-filters").options[document.getElementById("dc-filters").selectedIndex].value;this.f++;var e=this.f;this.$parent.qarr[this.f-7]=[null,null,null,null,t],this.$parent.oparr[this.f-7]=[null,null,null,null];var r=document.createElement("LABEL"),a=document.createElement("SELECT"),n=document.createElement("INPUT");r.setAttribute("for","operator"+e),r.textContent=t+" Likes",n.setAttribute("type","text"),n.setAttribute("v-model","$parent.qarr["+(this.f-7)+"][0]"),n.setAttribute("class","form-control"),n.setAttribute("placeholder","A positive number");var o=document.createElement("option");o.text="greater than",o.setAttribute("value",">");var s=document.createElement("option");s.text="less than",s.setAttribute("value","<");var l=document.createElement("option");l.text="equal to",l.setAttribute("value","="),a.setAttribute("v-model","$parent.oparr["+(this.f-7)+"][0]"),a.setAttribute("class","form-control"),a.setAttribute("name","operator"+e),a.add(o),a.add(s),a.add(l);var i=document.createElement("div");i.appendChild(r),i.appendChild(a),i.appendChild(n),e++;var u=document.createElement("LABEL"),c=document.createElement("SELECT"),p=document.createElement("INPUT");u.setAttribute("for","operator"+e),u.textContent=t+" Likes Percent",p.setAttribute("type","text"),p.setAttribute("v-model","$parent.qarr["+(this.f-7)+"][1]"),p.setAttribute("class","form-control"),p.setAttribute("placeholder","e.g. 50.5");var d=document.createElement("option");d.text="greater than",d.setAttribute("value",">");var v=document.createElement("option");v.text="less than",v.setAttribute("value","<");var h=document.createElement("option");h.text="equal to",h.setAttribute("value","="),c.setAttribute("v-model","$parent.oparr["+(this.f-7)+"][1]"),c.setAttribute("class","form-control"),c.setAttribute("name","operator"+e),c.add(d),c.add(v),c.add(h);var f=document.createElement("div");f.appendChild(u),f.appendChild(c),f.appendChild(p),e++;var m=document.createElement("LABEL"),g=document.createElement("SELECT"),_=document.createElement("INPUT");m.setAttribute("for","operator"+e),m.textContent=t+" Talking About",_.setAttribute("type","text"),_.setAttribute("v-model","$parent.qarr["+(this.f-7)+"][2]"),_.setAttribute("class","form-control"),_.setAttribute("placeholder","A positive number");var b=document.createElement("option");b.text="greater than",b.setAttribute("value",">");var y=document.createElement("option");y.text="less than",y.setAttribute("value","<");var P=document.createElement("option");P.text="equal to",P.setAttribute("value","="),g.setAttribute("v-model","$parent.oparr["+(this.f-7)+"][2]"),g.setAttribute("class","form-control"),g.setAttribute("name","operator"+e),g.add(b),g.add(y),g.add(P);var C=document.createElement("div");C.appendChild(m),C.appendChild(g),C.appendChild(_),e++;var w=document.createElement("LABEL"),x=document.createElement("SELECT"),T=document.createElement("INPUT");w.setAttribute("for","operator"+e),w.textContent=t+" Talking About Percent",T.setAttribute("type","text"),T.setAttribute("v-model","$parent.qarr["+(this.f-7)+"][3]"),T.setAttribute("class","form-control"),T.setAttribute("placeholder","e.g. 50.5");var q=document.createElement("option");q.text="greater than",q.setAttribute("value",">");var A=document.createElement("option");A.text="less than",A.setAttribute("value","<");var S=document.createElement("option");S.text="equal to",S.setAttribute("value","="),x.setAttribute("v-model","$parent.oparr["+(this.f-7)+"][3]"),x.setAttribute("class","form-control"),x.setAttribute("name","operator"+e),x.add(q),x.add(A),x.add(S);var E=document.createElement("div");E.appendChild(w),E.appendChild(x),E.appendChild(T),document.getElementById("fltrdiv").insertBefore(i,document.getElementById("add-filter")),document.getElementById("fltrdiv").insertBefore(f,document.getElementById("add-filter")),document.getElementById("fltrdiv").insertBefore(C,document.getElementById("add-filter")),document.getElementById("fltrdiv").insertBefore(E,document.getElementById("add-filter"))}}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"w3-sidebar w3-collapse w3-light-grey w3-animate-left",staticStyle:{"z-index":"3",width:"300px",height:"60%",overflow:"hidden"},attrs:{id:"mySidebar"}},[r("div",{staticStyle:{height:"100%"},attrs:{id:"fltrprnt"}},[r("button",{staticClass:"accordion2 w3-bar-item w3-button w3-padding w3-dark-grey"},[t._v("Advanced Filters")]),t._v(" "),r("div",{staticClass:"panel w3-light-grey",attrs:{id:"fltrdiv"}},[r("div",{staticClass:"filterbar w3-light-grey",attrs:{id:"filter1"}},[r("label",{attrs:{for:"operator1"}},[t._v("Fans Count")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$parent.op1,expression:"$parent.op1"}],staticClass:"form-control",attrs:{name:"operator1"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$parent,"op1",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:">"}},[t._v("greater than")]),t._v(" "),r("option",{attrs:{value:"<"}},[t._v("less than")]),t._v(" "),r("option",{attrs:{value:"="}},[t._v("equal to")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.q1,expression:"$parent.q1"}],staticClass:"form-control",attrs:{type:"number",placeholder:"A positive number"},domProps:{value:t.$parent.q1},on:{input:function(e){e.target.composing||t.$set(t.$parent,"q1",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"filterbar w3-light-grey",attrs:{id:"filter4"}},[r("label",{attrs:{for:"operator4"}},[t._v("Last Post Date")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$parent.op4,expression:"$parent.op4"}],staticClass:"form-control",attrs:{name:"operator4"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$parent,"op4",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:">"}},[t._v("greater than")]),t._v(" "),r("option",{attrs:{value:"<"}},[t._v("less than")]),t._v(" "),r("option",{attrs:{value:"="}},[t._v("equal to")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.q4,expression:"$parent.q4"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Date"},domProps:{value:t.$parent.q4},on:{input:function(e){e.target.composing||t.$set(t.$parent,"q4",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"filterbar w3-light-grey",attrs:{id:"filter2"}},[r("label",{attrs:{for:"operator2"}},[t._v("US Total Fans")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$parent.op2,expression:"$parent.op2"}],staticClass:"form-control",attrs:{name:"operator2"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$parent,"op2",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:">"}},[t._v("greater than")]),t._v(" "),r("option",{attrs:{value:"<"}},[t._v("less than")]),t._v(" "),r("option",{attrs:{value:"="}},[t._v("equal to")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.q2,expression:"$parent.q2"}],staticClass:"form-control",attrs:{type:"number",placeholder:"A positive number"},domProps:{value:t.$parent.q2},on:{input:function(e){e.target.composing||t.$set(t.$parent,"q2",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"filterbar w3-light-grey",attrs:{id:"filter3"}},[r("label",{attrs:{for:"operator3"}},[t._v("US Likes Percent")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$parent.op3,expression:"$parent.op3"}],staticClass:"form-control",attrs:{name:"operator3"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$parent,"op3",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:">"}},[t._v("greater than")]),t._v(" "),r("option",{attrs:{value:"<"}},[t._v("less than")]),t._v(" "),r("option",{attrs:{value:"="}},[t._v("equal to")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.q3,expression:"$parent.q3"}],staticClass:"form-control",attrs:{type:"text",placeholder:"e.g. 50.5"},domProps:{value:t.$parent.q3},on:{input:function(e){e.target.composing||t.$set(t.$parent,"q3",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"filterbar w3-light-grey",attrs:{id:"filter6"}},[r("label",{attrs:{for:"operator6"}},[t._v("US Talking About")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$parent.op6,expression:"$parent.op6"}],staticClass:"form-control",attrs:{name:"operator6"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$parent,"op6",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:">"}},[t._v("greater than")]),t._v(" "),r("option",{attrs:{value:"<"}},[t._v("less than")]),t._v(" "),r("option",{attrs:{value:"="}},[t._v("equal to")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.q6,expression:"$parent.q6"}],staticClass:"form-control",attrs:{type:"text",placeholder:"A positive number"},domProps:{value:t.$parent.q6},on:{input:function(e){e.target.composing||t.$set(t.$parent,"q6",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"filterbar w3-light-grey",attrs:{id:"filter5"}},[r("label",{attrs:{for:"operator5"}},[t._v("US Talking About Percent")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.$parent.op5,expression:"$parent.op5"}],staticClass:"form-control",attrs:{name:"operator5"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$parent,"op5",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:">"}},[t._v("greater than")]),t._v(" "),r("option",{attrs:{value:"<"}},[t._v("less than")]),t._v(" "),r("option",{attrs:{value:"="}},[t._v("equal to")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.q5,expression:"$parent.q5"}],staticClass:"form-control",attrs:{type:"text",placeholder:"e.g. 50.5"},domProps:{value:t.$parent.q5},on:{input:function(e){e.target.composing||t.$set(t.$parent,"q5",e.target.value)}}})]),t._v(" "),r("div",{attrs:{id:"add-filter"}},[r("label",{attrs:{for:"operator4"}},[t._v("Choose a country to filter with")]),t._v(" "),t._m(0),t._v(" "),r("button",{on:{click:t.addFilters}},[t._v("Add Filters")])]),t._v(" "),r("div",{staticClass:"btn-right"},[r("button",{staticClass:"btn w3-dark-grey",attrs:{id:"csv-btn"},on:{click:t.csv}},[t._v("Save as CSV")])])])])]),t._v(" "),r("div",{staticClass:"sub-body w3-main",staticStyle:{"margin-left":"300px","margin-top":"43px","padding-left":"20px"}},[t.$parent.flag?r("div",{staticClass:"w3-light-grey"},[r("vue-good-table",{attrs:{title:"",styleClass:"table table-bordered w3-light-grey",columns:t.$parent.columns,rows:t.$parent.customFilter,paginate:!0,lineNumbers:!0}})],1):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("select",{staticClass:"form-control",attrs:{name:"countries",id:"dc-filters"}},[e("option",{attrs:{value:"AE"}},[this._v("AE")]),this._v(" "),e("option",{attrs:{value:"AR"}},[this._v("AR")]),this._v(" "),e("option",{attrs:{value:"AU"}},[this._v("AU")]),this._v(" "),e("option",{attrs:{value:"BD"}},[this._v("BD")]),this._v(" "),e("option",{attrs:{value:"BE"}},[this._v("BE")]),this._v(" "),e("option",{attrs:{value:"BR"}},[this._v("BR")]),this._v(" "),e("option",{attrs:{value:"CA"}},[this._v("CA")]),this._v(" "),e("option",{attrs:{value:"CL"}},[this._v("CL")]),this._v(" "),e("option",{attrs:{value:"CO"}},[this._v("CO")]),this._v(" "),e("option",{attrs:{value:"DE"}},[this._v("DE")]),this._v(" "),e("option",{attrs:{value:"DZ"}},[this._v("DZ")]),this._v(" "),e("option",{attrs:{value:"EC"}},[this._v("EC")]),this._v(" "),e("option",{attrs:{value:"EG"}},[this._v("EG")]),this._v(" "),e("option",{attrs:{value:"ES"}},[this._v("ES")]),this._v(" "),e("option",{attrs:{value:"FR"}},[this._v("FR")]),this._v(" "),e("option",{attrs:{value:"GB"}},[this._v("GB")]),this._v(" "),e("option",{attrs:{value:"HK"}},[this._v("HK")]),this._v(" "),e("option",{attrs:{value:"ID"}},[this._v("ID")]),this._v(" "),e("option",{attrs:{value:"IN"}},[this._v("IN")]),this._v(" "),e("option",{attrs:{value:"IQ"}},[this._v("IQ")]),this._v(" "),e("option",{attrs:{value:"IR"}},[this._v("IR")]),this._v(" "),e("option",{attrs:{value:"IT"}},[this._v("IT")]),this._v(" "),e("option",{attrs:{value:"JP"}},[this._v("JP")]),this._v(" "),e("option",{attrs:{value:"KH"}},[this._v("KH")]),this._v(" "),e("option",{attrs:{value:"KR"}},[this._v("KR")]),this._v(" "),e("option",{attrs:{value:"LK"}},[this._v("LK")]),this._v(" "),e("option",{attrs:{value:"MA"}},[this._v("MA")]),this._v(" "),e("option",{attrs:{value:"MM"}},[this._v("MM")]),this._v(" "),e("option",{attrs:{value:"MX"}},[this._v("MX")]),this._v(" "),e("option",{attrs:{value:"MY"}},[this._v("MY")]),this._v(" "),e("option",{attrs:{value:"PE"}},[this._v("PE")]),this._v(" "),e("option",{attrs:{value:"PH"}},[this._v("PH")]),this._v(" "),e("option",{attrs:{value:"PK"}},[this._v("PK")]),this._v(" "),e("option",{attrs:{value:"PL"}},[this._v("PL")]),this._v(" "),e("option",{attrs:{value:"RO"}},[this._v("RO")]),this._v(" "),e("option",{attrs:{value:"SA"}},[this._v("SA")]),this._v(" "),e("option",{attrs:{value:"SG"}},[this._v("SG")]),this._v(" "),e("option",{attrs:{value:"SY"}},[this._v("SY")]),this._v(" "),e("option",{attrs:{value:"TH"}},[this._v("TH")]),this._v(" "),e("option",{attrs:{value:"TN"}},[this._v("TN")]),this._v(" "),e("option",{attrs:{value:"TR"}},[this._v("TR")]),this._v(" "),e("option",{attrs:{value:"TW"}},[this._v("TW")]),this._v(" "),e("option",{attrs:{value:"US"}},[this._v("US")]),this._v(" "),e("option",{attrs:{value:"VE"}},[this._v("VE")]),this._v(" "),e("option",{attrs:{value:"VN"}},[this._v("VN")])])}]},s=r("VU/8")(n,o,!1,function(t){r("oUDs")},null,null).exports,l=r("rKEe"),i=r("ORbq"),u=(r("Jmt5"),r("9M+g"),{name:"test",props:["flag","prows","pcolumns"],data:function(){return{columns:[{label:"Name",field:"name",filterable:!0},{label:"Age",field:"age",type:"number",html:!1,filterable:!0},{label:"Created On",field:"createdAt",type:"date",inputFormat:"YYYYMMDD",outputFormat:"MMM Do YY"},{label:"Percent",field:"score",type:"percentage",html:!1}],rows:[{id:1,name:"John",age:20,createdAt:"20111031 9:35 am",score:.03343},{id:2,name:"Jane",age:24,createdAt:"20111031",score:.03343},{id:3,name:"Susan",age:16,createdAt:"20111030",score:.03343},{id:4,name:"Chris",age:55,createdAt:"20111011",score:.03343},{id:5,name:"Dan",age:40,createdAt:"20111021",score:.03343},{id:6,name:"John",age:20,createdAt:"20111031",score:.03343},{id:7,name:"Jane",age:24,createdAt:"20111031"},{id:8,name:"Susan",age:16,createdAt:"20131031",score:.03343},{id:9,name:"Chris",age:55,createdAt:"20121031",score:.03343},{id:10,name:"Dan",age:40,createdAt:"20111031",score:.03343},{id:11,name:"John",age:20,createdAt:"20111031",score:.03343},{id:12,name:"Jane",age:24,createdAt:"20110731",score:.03343},{id:13,name:"Susan",age:16,createdAt:"20170228",score:.03343},{id:14,name:"Chris",age:55,createdAt:"",score:.03343},{id:15,name:"Dan",age:40,createdAt:"20111031",score:.03343},{id:19,name:"Chris",age:55,createdAt:"20111031",score:.03343},{id:20,name:"Dan",age:40,createdAt:"20111031",score:.03343}]}},created:function(){},watch:{flag:function(){console.log("flag"),this.rows=this.prows,this.columns=this.pcolumns}}}),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vue-good-table",{attrs:{title:"Basic Statistics",columns:this.columns,rows:this.rows,paginate:!0,lineNumbers:!0}})],1)},staticRenderFns:[]},p=r("VU/8")(u,c,!1,null,null,null).exports,d=r("Q0Wf");a.a.component("dts",p),a.a.use(l.a),a.a.use(i.a),a.a.config.delimiters=["${","}"],a.a.config.productionTip=!1;var v=new a.a({el:"#app",data:{flag:!0,rows:[],rows2:[],columns:[],q1:"",op1:">",q2:"",op2:">",q3:"",op3:">",q4:"",op4:">",q5:"",op5:">",q6:"",op6:">",qarr:[],oparr:[],converter:d},template:"<App/>",components:{App:s},computed:{customFilter:function(){var t=this,e={">":function(t,e){return t>e},"<":function(t,e){return t<e},"=":function(t,e){return t==e}};return this.rows2=this.rows2.filter(function(r){var a=new Date(t.q4);a.setHours(0,0,0,0),a.setTime(a.getTime()+60*a.getTimezoneOffset()*1e3);var n=new Date(r.last_post_date);if(n.setHours(0,0,0,0),n.setTime(n.getTime()+60*n.getTimezoneOffset()*1e3),t.qarr.length)for(var o=0;o<t.qarr.length;o++)for(var s=t.qarr[o],l=s[4],i=0;i<s.length-1;i++){var u=s[i];if(null!==u&&""!==u&&void 0!==u)switch(i){case 0:if(t.oparr[o][i]&&r[l+"_Total"]&&!e[t.oparr[o][i]](r[l+"_Total"],u))return!1;break;case 1:if(t.oparr[o][i]&&r[l+"_fans_percent"]&&!e[t.oparr[o][i]](r[l+"_fans_percent"],u))return!1;break;case 2:if(t.oparr[o][i]&&r[l+"_people_talking"]&&!e[t.oparr[o][i]](r[l+"_people_talking"],u))return!1;break;case 3:if(t.oparr[o][i]&&r[l+"_talking_percent"]&&!e[t.oparr[o][i]](r[l+"_talking_percent"],u))return!1}}return!(t.q1||t.q2||null!==t.q3&&""!==t.q3&&t.q3>=0||t.q4||null!==t.q5&&""!==t.q5&&t.q5>=0||t.q6)||(!t.q1||e[t.op1](r.fans_count,t.q1))&&(!t.q2||e[t.op2](r.US_Total,t.q2))&&(!t.q6||e[t.op6](r.US_people_talking,t.q6))&&(null!==r["US percent"]&&void 0!==r["US percent"]?!(null!==t.q3&&""!==t.q3&&t.q3>=0)||e[t.op3](parseFloat(r["US percent"]),t.q3/100):null!==r.US_fans_percent&&void 0!==r.US_fans_percent?!(null!==t.q3&&""!==t.q3&&t.q3>=0)||e[t.op3](parseFloat(r.US_fans_percent),t.q3/100):!(null!==t.q3&&""!==t.q3&&t.q3>=0))&&(!t.q4||e[t.op4](n.getTime(),a.getTime()))&&(!(null!==t.q5&&""!==t.q5&&t.q5>=0)||e[t.op5](parseFloat(r.US_talking_percent),t.q5/100))}),this.rows.filter(function(r){var a=new Date(t.q4);a.setHours(0,0,0,0),a.setTime(a.getTime()+60*a.getTimezoneOffset()*1e3);var n=new Date(r.last_post_date);if(n.setHours(0,0,0,0),n.setTime(n.getTime()+60*n.getTimezoneOffset()*1e3),t.qarr.length)for(var o=0;o<t.qarr.length;o++)for(var s=t.qarr[o],l=s[4],i=0;i<s.length-1;i++){var u=s[i];if(null!==u&&""!==u&&void 0!==u)switch(i){case 0:if(t.oparr[o][i]&&r[l+"_Total"]&&!e[t.oparr[o][i]](r[l+"_Total"],u))return!1;break;case 1:if(t.oparr[o][i]&&r[l+"_fans_percent"]&&!e[t.oparr[o][i]](r[l+"_fans_percent"],u))return!1;break;case 2:if(t.oparr[o][i]&&r[l+"_people_talking"]&&!e[t.oparr[o][i]](r[l+"_people_talking"],u))return!1;break;case 3:if(t.oparr[o][i]&&r[l+"_talking_percent"]&&!e[t.oparr[o][i]](r[l+"_talking_percent"],u))return!1}}return!(t.q1||t.q2||null!==t.q3&&""!==t.q3&&t.q3>=0||t.q4||null!==t.q5&&""!==t.q5&&t.q5>=0||t.q6)||(!t.q1||e[t.op1](r.fans_count,t.q1))&&(!t.q2||e[t.op2](r.US_Total,t.q2))&&(!t.q6||e[t.op6](r.US_people_talking,t.q6))&&(null!==r["US percent"]&&void 0!==r["US percent"]?!(null!==t.q3&&""!==t.q3&&t.q3>=0)||e[t.op3](parseFloat(r["US percent"]),t.q3/100):null!==r.US_fans_percent&&void 0!==r.US_fans_percent?!(null!==t.q3&&""!==t.q3&&t.q3>=0)||e[t.op3](parseFloat(r.US_fans_percent),t.q3/100):!(null!==t.q3&&""!==t.q3&&t.q3>=0))&&(!t.q4||e[t.op4](n.getTime(),a.getTime()))&&(!(null!==t.q5&&""!==t.q5&&t.q5>=0)||e[t.op5](parseFloat(r.US_talking_percent),t.q5/100))})}}});new a.a({el:"#nav",methods:{search:function(){this.$http.get("http://localhost:5000/search?token="+document.getElementById("token").value+"&search_term="+document.getElementById("search").value).then(function(t){console.log(t.body);var e=JSON.parse(t.body),r=[],a=[],n=[];for(var o in e)if(e.hasOwnProperty(o)){"picture"===o?n.push({label:"Picture",field:o,html:!0}):"US percent"===o?n.push({label:"US Percent",field:o,type:"percentage"}):"fans_count"===o?n.push({label:"Fans Count",field:o,type:"number"}):"US_Total"===o?n.push({label:"US Total Fans",field:o,type:"number"}):"last_post_date"===o?n.push({label:"Last Post Date",field:o,type:"date",inputFormat:"YYYY-MM-DD",outputFormat:"MMM Do YY"}):"id"===o?n.push({label:"Page Link",field:o,html:!0}):"name"===o?n.push({label:"Page Name",field:o,filterable:!0}):o.toLowerCase().indexOf("percent")>-1?n.push({label:o,field:o,type:"percentage"}):n.push({label:o,field:o,filterable:!0});var s=e[o];for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];r[l]||(r[l]={id:l},a[l]={id:l}),a[l][o]=i,r[l][o]="picture"===o?'<img src ="'+i+'" />':"id"===o?'<a href ="'+i+'" />'+i:i}}v.rows=r,v.rows2=a,v.columns=n}).catch(function(t){console.log(t)})},enter:function(t){13===t.keyCode&&this.search()},postCountries:function(){var t=document.querySelectorAll("input[type=checkbox]:checked").map(function(t){return t.value});this.$http.post("http://localhost:5000/countries",{countries:t}).then(function(t,e,r){}).catch(function(t){console.log(t)})}},created:function(){this.$http.get("http://localhost:5000/sample").then(function(t){var e=JSON.parse(t.body),r=[],a=[],n=[];for(var o in e)if(e.hasOwnProperty(o)){"picture"===o?n.push({label:"Picture",field:o,html:!0}):"US percent"===o?n.push({label:"US Percent",field:o,type:"percentage"}):"fans_count"===o?n.push({label:"Fans Count",field:o,type:"number"}):"US_Total"===o?n.push({label:"US Total Fans",field:o,type:"number"}):"last_post_date"===o?n.push({label:"Last Post Date",field:o,type:"date",inputFormat:"YYYY-MM-DD",outputFormat:"MMM Do YY"}):"id"===o?n.push({label:"Page Link",field:o,html:!0}):"name"===o?n.push({label:"Page Name",field:o,filterable:!0}):o.toLowerCase().indexOf("percent")>-1?n.push({label:o,field:o,type:"percentage"}):n.push({label:o,field:o,filterable:!0});var s=e[o];for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];r[l]||(r[l]={id:l},a[l]={id:l}),a[l][o]=i,r[l][o]="picture"===o?'<img src ="'+i+'" />':"id"===o?'<a href ="'+i+'" />'+i:i}}v.columns=n,v.rows=r,v.rows2=a}).catch(function(t){console.log(t)})}})},dCXY:function(t,e){t.exports={Errors:{delimitersMustDiffer:"The field and array delimiters must differ.",callbackRequired:"A callback is required!",optionsRequired:"Options were not passed and are required.",json2csv:{cannotCallJson2CsvOn:"Cannot call json2csv on ",dataNotArrayOfDocuments:"Data provided was not an array of documents.",notSameSchema:"Not all documents have the same schema."},csv2json:{cannotCallCsv2JsonOn:"Cannot call csv2json on ",csvNotString:"CSV is not a string.",noDataRetrieveHeading:"No data provided to retrieve heading."}},DefaultOptions:{DELIMITER:{FIELD:",",ARRAY:";",WRAP:"",EOL:"\n"},PREPEND_HEADER:!0,TRIM_HEADER_FIELDS:!1,TRIM_FIELD_VALUES:!1,SORT_HEADER:!1,PARSE_CSV_NUMBERS:!1,KEYS:null,CHECK_SCHEMA_DIFFERENCES:!0,EMPTY_FIELD_VALUE:"null"}}},h9aj:function(t,e){},jW3l:function(t,e,r){"use strict";var a=r("d7EF"),n=r.n(a),o=r("mvHQ"),s=r.n(o),l=r("bOdI"),i=r.n(l),u=r("woOf"),c=r.n(u),p=r("BO1k"),d=r.n(p),v=r("8wyc"),h={name:"vue-good-pagination",props:{styleClass:{default:"table table-bordered"},total:{default:null},perPage:{},rtl:{default:!1},nextText:{default:"Next"},prevText:{default:"Prev"},rowsPerPageText:{default:"Rows per page:"},ofText:{default:"of"},allText:{default:"All"}},data:function(){return{currentPage:1,currentPerPage:10}},methods:{nextPage:function(){-1!==this.currentPerPage&&(this.nextIsPossible&&++this.currentPage,this.pageChanged())},previousPage:function(){this.currentPage>1&&--this.currentPage,this.pageChanged()},pageChanged:function(){this.$emit("page-changed",{currentPage:this.currentPage})},perPageChanged:function(t){t&&(this.currentPerPage=parseInt(t.target.value)),this.$emit("per-page-changed",{currentPerPage:this.currentPerPage})}},watch:{perPage:function(){this.perPage?this.currentPerPage=this.perPage:this.currentPerPage=10,this.perPageChanged()}},computed:{paginatedInfo:function(){if(-1===this.currentPerPage)return"1 - "+this.total+" "+this.ofText+" "+this.total;return((this.currentPage-1)*this.currentPerPage?(this.currentPage-1)*this.currentPerPage:1)+" - "+Math.min(this.total,this.currentPerPage*this.currentPage)+" "+this.ofText+" "+this.total},nextIsPossible:function(){return this.total>this.currentPerPage*this.currentPage},prevIsPossible:function(){return this.currentPage>1}},mounted:function(){this.perPage&&(this.currentPerPage=this.perPage)}},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-footer clearfix"},[r("div",{staticClass:"datatable-length pull-left"},[r("label",[r("span",[t._v(t._s(t.rowsPerPageText))]),t._v(" "),r("select",{staticClass:"browser-default",on:{change:t.perPageChanged}},[t.perPage?r("option",{domProps:{value:t.perPage}},[t._v(t._s(t.perPage))]):t._e(),t._v(" "),r("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),r("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),r("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),r("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),r("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),r("option",{attrs:{value:"-1"}},[t._v(t._s(t.allText))])])])]),t._v(" "),r("div",{staticClass:"pagination-controls pull-right"},[r("a",{staticClass:"page-btn",class:{disabled:!t.prevIsPossible},attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.previousPage(e)}}},[r("span",{staticClass:"chevron",class:{left:!t.rtl,right:t.rtl}}),t._v(" "),r("span",[t._v(t._s(t.prevText))])]),t._v(" "),r("div",{staticClass:"info"},[t._v(t._s(t.paginatedInfo))]),t._v(" "),r("a",{staticClass:"page-btn",class:{disabled:!t.nextIsPossible},attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.nextPage(e)}}},[r("span",[t._v(t._s(t.nextText))]),t._v(" "),r("span",{staticClass:"chevron",class:{right:!t.rtl,left:t.rtl}})])])])},staticRenderFns:[]},m={name:"vue-good-table",components:{VueGoodPagination:r("VU/8")(h,f,!1,function(t){r("h9aj")},"data-v-5d417566",null).exports},props:{styleClass:{default:"table table-bordered"},title:"",columns:{},rows:{},onClick:{},perPage:{},sortable:{default:!0},paginate:{default:!1},paginateOnTop:{default:!1},lineNumbers:{default:!1},defaultSortBy:{default:null},responsive:{default:!0},rtl:{default:!1},rowStyleClass:{default:null,type:[Function,String]},globalSearch:{default:!1},searchTrigger:{default:null},externalSearchQuery:{default:null},globalSearchPlaceholder:{default:"Search Table"},nextText:{default:"Next"},prevText:{default:"Prev"},rowsPerPageText:{default:"Rows per page:"},ofText:{default:"of"},allText:{default:"All"}},data:function(){return{currentPage:1,currentPerPage:10,sortColumn:-1,sortType:"asc",globalSearchTerm:"",columnFilters:{},filteredRows:[],timer:null,forceSearch:!1,sortChanged:!1}},methods:{pageChanged:function(t){this.currentPage=t.currentPage,this.$emit("pageChanged",{currentPage:this.currentPage,total:Math.floor(this.rows.length/this.currentPerPage)})},perPageChanged:function(t){this.currentPerPage=t.currentPerPage},sort:function(t){this.isSortableColumn(t)&&(this.sortColumn===t?this.sortType="asc"===this.sortType?"desc":"asc":(this.sortType="asc",this.sortColumn=t),this.sortChanged=!0)},click:function(t,e){this.onClick&&this.onClick(t,e)},searchTable:function(){"enter"==this.searchTrigger&&(this.forceSearch=!0,this.sortChanged=!0)},collect:function(t,e){return"function"==typeof e?e(t):"string"==typeof e?function(t,e){for(var r=t,a=e.split("."),n=0;n<a.length;n++){if(void 0===r)return;r=r[a[n]]}return r}(t,e):void 0},collectFormatted:function(t,e){var r=this.collect(t,e.field);if(void 0===r)return"";switch(e.type){case"decimal":return function(t){return parseFloat(Math.round(100*t)/100).toFixed(2)}(r);case"percentage":return function(t){return parseFloat(100*t).toFixed(2)+"%"}(r);case"date":return function(t){return Object(v.b)(Object(v.d)(t,e.inputFormat,new Date),e.outputFormat)}(r);default:return r}},formattedRow:function(t){var e={},r=!0,a=!1,n=void 0;try{for(var o,s=d()(this.columns);!(r=(o=s.next()).done);r=!0){var l=o.value;l.field&&(e[l.field]=this.collectFormatted(t,l))}}catch(t){a=!0,n=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw n}}return e},isSortableColumn:function(t){var e=this.columns[t].sortable;return"boolean"==typeof e?e:this.sortable},getHeaderClasses:function(t,e){var r=this.isSortableColumn(e);return c()({},this.getClasses(e,"th"),{sorting:r,"sorting-desc":r&&this.sortColumn===e&&"desc"===this.sortType,"sorting-asc":r&&this.sortColumn===e&&"asc"===this.sortType})},getClasses:function(t,e){var r=this.columns[t],a=r.type,n=r[e+"Class"],o=["number","percentage","decimal","date"].includes(a);this.rtl&&(o=!0);return i()({"right-align":o,"left-align":!o},n,!!n)},updateFilters:function(t,e){var r=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){r.$set(r.columnFilters,t.field,e)},400)},filterRows:function(){var t=this,e=this.originalRows;if(this.hasFilterRow){var r=!0,a=!1,n=void 0;try{for(var o,s=d()(this.columns);!(r=(o=s.next()).done);r=!0){var l=o.value;l.filterable&&this.columnFilters[l.field]&&(e=e.filter(function(e){if(l.filter)return l.filter(t.collect(e,l.field),t.columnFilters[l.field]);switch(l.type){case"number":case"percentage":case"decimal":return t.collect(e,l.field)==t.columnFilters[l.field];default:return t.collect(e,l.field).toLowerCase().includes(t.columnFilters[l.field].toLowerCase())}}))}}catch(t){a=!0,n=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw n}}}this.filteredRows=e},getPlaceholder:function(t){return t.placeholder||"Filter "+t.label},getCurrentIndex:function(t){return(this.currentPage-1)*this.currentPerPage+t+1},getRowStyleClass:function(t){var e="";this.onClick&&(e+="clickable");var r=void 0;return(r="function"==typeof this.rowStyleClass?this.rowStyleClass(t):this.rowStyleClass)&&(e+=" "+r),e}},watch:{columnFilters:{handler:function(t){this.filterRows()},deep:!0},rows:{handler:function(t){this.filterRows()},deep:!0}},computed:{searchTerm:function(){return null!=this.externalSearchQuery?this.externalSearchQuery:this.globalSearchTerm},globalSearchAllowed:function(){return!(!this.globalSearch||!this.globalSearchTerm||"enter"==this.searchTrigger)||(null!=this.externalSearchQuery&&"enter"!=this.searchTrigger||!!this.forceSearch&&(this.forceSearch=!1,!0))},hasFilterRow:function(){if(!this.globalSearch){var t=!0,e=!1,r=void 0;try{for(var a,n=d()(this.columns);!(t=(a=n.next()).done);t=!0){if(a.value.filterable)return!0}}catch(t){e=!0,r=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw r}}}return!1},processedRows:function(){var t=this,e=this.filteredRows;if(this.globalSearchAllowed){var r=[],a=!0,n=!1,o=void 0;try{for(var s,l=d()(this.originalRows);!(a=(s=l.next()).done);a=!0){var i=s.value,u=!0,c=!1,p=void 0;try{for(var h,f=d()(this.columns);!(u=(h=f.next()).done);u=!0){var m=h.value;if(String(this.collectFormatted(i,m)).toLowerCase().search(this.searchTerm.toLowerCase())>-1){r.push(i);break}}}catch(t){c=!0,p=t}finally{try{!u&&f.return&&f.return()}finally{if(c)throw p}}}}catch(t){n=!0,o=t}finally{try{!a&&l.return&&l.return()}finally{if(n)throw o}}e=r}return-1!==this.sortColumn&&this.isSortableColumn(this.sortColumn)&&("enter"!==this.searchTrigger||this.sortChanged)&&(this.sortChanged=!1,e=e.sort(function(e,r){if(!t.columns[t.sortColumn])return 0;var a=function(e){return e=t.collect(e,t.columns[t.sortColumn].field),"date"===t.columns[t.sortColumn].type?e=Object(v.d)(e+"",t.columns[t.sortColumn].inputFormat,new Date):"string"==typeof e&&(e=e.toLowerCase(),"number"===t.columns[t.sortColumn].type&&(e=e.indexOf(".")>=0?parseFloat(e):parseInt(e))),e};return e=a(e),r=a(r),"date"===t.columns[t.sortColumn].type?Object(v.c)(e)?Object(v.c)(r)?Object(v.a)(e,r)*("desc"===t.sortType?-1:1):"desc"===t.sortType?-1:1:-1*("desc"===t.sortType?-1:1):(e<r?-1:e>r?1:0)*("desc"===t.sortType?-1:1)})),"enter"===this.searchTrigger&&(this.filteredRows=e),e},paginated:function(){var t=this.processedRows;if(this.paginate){var e=(this.currentPage-1)*this.currentPerPage;(e>=this.processedRows.length||-1===this.currentPerPage)&&(this.currentPage=1,e=0);var r=t.length+1;-1!==this.currentPerPage&&(r=this.currentPage*this.currentPerPage),t=t.slice(e,r)}return t},originalRows:function(){var t=JSON.parse(s()(this.rows)),e=!0,r=!1,a=void 0;try{for(var o,l=d()(t.entries());!(e=(o=l.next()).done);e=!0){var i=o.value,u=n()(i,2),c=u[0];u[1].originalIndex=c}}catch(t){r=!0,a=t}finally{try{!e&&l.return&&l.return()}finally{if(r)throw a}}return t}},mounted:function(){if(this.filteredRows=this.originalRows,this.perPage&&(this.currentPerPage=this.perPage),this.defaultSortBy){var t=!0,e=!1,r=void 0;try{for(var a,o=d()(this.columns.entries());!(t=(a=o.next()).done);t=!0){var s=a.value,l=n()(s,2),i=l[0];if(l[1].field===this.defaultSortBy.field){this.sortColumn=i,this.sortType=this.defaultSortBy.type||"asc",this.sortChanged=!0;break}}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}}}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"good-table",class:{rtl:t.rtl}},[r("div",{class:{responsive:t.responsive}},[t.title||t.$slots["table-actions"]?r("div",{staticClass:"table-header clearfix"},[r("h2",{staticClass:"table-title pull-left"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"actions pull-right"},[t._t("table-actions")],2)]):t._e(),t._v(" "),t.paginate&&t.paginateOnTop?r("vue-good-pagination",{attrs:{perPage:t.perPage,rtl:t.rtl,total:t.processedRows.length,nextText:t.nextText,prevText:t.prevText,rowsPerPageText:t.rowsPerPageText,ofText:t.ofText,allText:t.allText},on:{"page-changed":t.pageChanged,"per-page-changed":t.perPageChanged}}):t._e(),t._v(" "),r("table",{ref:"table",class:t.styleClass},[r("thead",[t.globalSearch&&null==t.externalSearchQuery?r("tr",[r("td",{attrs:{colspan:t.lineNumbers?t.columns.length+1:t.columns.length}},[r("div",{staticClass:"global-search"},[t._m(0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.globalSearchTerm,expression:"globalSearchTerm"}],staticClass:"form-control global-search-input",attrs:{type:"text",placeholder:t.globalSearchPlaceholder},domProps:{value:t.globalSearchTerm},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchTable()},input:function(e){e.target.composing||(t.globalSearchTerm=e.target.value)}}})])])]):t._e(),t._v(" "),r("tr",[t.lineNumbers?r("th",{staticClass:"line-numbers"}):t._e(),t._v(" "),t._l(t.columns,function(e,a){return e.hidden?t._e():r("th",{key:e.field,class:t.getHeaderClasses(e,a),style:{width:e.width?e.width:"auto"},on:{click:function(e){t.sort(a)}}},[t._t("table-column",[r("span",[t._v(t._s(e.label))])],{column:e})],2)}),t._v(" "),t._t("thead-tr")],2),t._v(" "),t.hasFilterRow?r("tr",[t.lineNumbers?r("th"):t._e(),t._v(" "),t._l(t.columns,function(e,a){return e.hidden?t._e():r("th",{key:e.field},[e.filterable?r("div",{class:t.getHeaderClasses(e,a)},[e.filterDropdown?t._e():r("input",{attrs:{type:"text",placeholder:t.getPlaceholder(e)},domProps:{value:t.columnFilters[e.field]},on:{input:function(r){t.updateFilters(e,r.target.value)}}}),t._v(" "),e.filterDropdown&&"object"!=typeof e.filterOptions[0]?r("select",{domProps:{value:t.columnFilters[e.field]},on:{input:function(r){t.updateFilters(e,r.target.value)}}},[r("option",{attrs:{value:""}},[t._v(t._s(t.getPlaceholder(e)))]),t._v(" "),t._l(e.filterOptions,function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n                    "+t._s(e)+"\n                  ")])})],2):t._e(),t._v(" "),e.filterDropdown&&"object"==typeof e.filterOptions[0]?r("select",{domProps:{value:t.columnFilters[e.field]},on:{input:function(r){t.updateFilters(e,r.target.value)}}},[r("option",{attrs:{value:""}},[t._v(t._s(t.getPlaceholder(e)))]),t._v(" "),t._l(e.filterOptions,function(e){return r("option",{key:e,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2):t._e()]):t._e()])})],2):t._e()]),t._v(" "),r("tbody",[t._l(t.paginated,function(e,a){return r("tr",{key:a,class:t.getRowStyleClass(e),on:{click:function(r){t.click(e,a)}}},[t.lineNumbers?r("th",{staticClass:"line-numbers"},[t._v(t._s(t.getCurrentIndex(a)))]):t._e(),t._v(" "),t._t("table-row-before",null,{row:e,index:a}),t._v(" "),t._t("table-row",t._l(t.columns,function(a,n){return!a.hidden&&a.field?r("td",{key:a.field,class:t.getClasses(n,"td")},[a.html?t._e():r("span",[t._v(t._s(t.collectFormatted(e,a)))]),t._v(" "),a.html?r("span",{domProps:{innerHTML:t._s(t.collect(e,a.field))}}):t._e()]):t._e()}),{row:e,formattedRow:t.formattedRow(e),index:a}),t._v(" "),t._t("table-row-after",null,{row:e,index:a})],2)}),t._v(" "),0===t.processedRows.length?r("tr",[r("td",{attrs:{colspan:t.columns.length}},[t._t("emptystate",[r("div",{staticClass:"center-align text-disabled"},[t._v("\n                No data for table.\n              ")])])],2)]):t._e()],2)]),t._v(" "),t.paginate&&!t.paginateOnTop?r("vue-good-pagination",{attrs:{perPage:t.perPage,rtl:t.rtl,total:t.processedRows.length,nextText:t.nextText,prevText:t.prevText,rowsPerPageText:t.rowsPerPageText,ofText:t.ofText,allText:t.allText},on:{"page-changed":t.pageChanged,"per-page-changed":t.perPageChanged}}):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"global-search-icon"},[e("img",{attrs:{src:r("s1ZF"),alt:"Search Icon"}})])}]},_=r("VU/8")(m,g,!1,function(t){r("vrhf")},"data-v-128b57ce",null);e.a=_.exports},oUDs:function(t,e){},s1ZF:function(t,e,r){t.exports=r.p+"static/img/search_icon.6cf060d.png"},vrhf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9352507007c10486880a.js.map