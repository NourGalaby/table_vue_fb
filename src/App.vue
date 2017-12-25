<template>
  <div id="app">
    <!-- <img src="./assets/fb-art.png">
    <br> -->
    <button class="accordion2 w3-bar-item w3-button w3-padding w3-blue" v-on:click="tggleacc">Advanced Filters</button>
    <div class="panel w3-khaki">
      <div class="filterbar w3-khaki" id="filter1">
        <!-- <label for="">Filter by : </label> -->
        <!-- <select v-model="$parent.f"> -->
          <label for="operator1">Fans Count</label>
          <!-- <option value="fans_count">Fans Count</option> -->
          <!-- <option value="US_Total">US Total Fans</option> -->
        
        <!-- </select> -->
        <select v-model="$parent.op1" name="operator1">
          <option value=">">greater than</option>
          <option value="<">less than</option>
          <option value="=">equal to</option>
        </select>
        <input type="number" v-model="$parent.q1" placeholder="A positive number">
      </div>
      <div class="filterbar w3-khaki" id="filter2">
        <label for="operator2">US Total Fans</label>
        <select v-model="$parent.op2" name="operator2">
          <option value=">">greater than</option>
          <option value="<">less than</option>
          <option value="=">equal to</option>
        </select>
        <input type="number" v-model="$parent.q2" placeholder="A positive number">
      </div>
      <div class="filterbar w3-khaki" id="filter3">
        <label for="operator3">US Percent</label>
        <select v-model="$parent.op3" name="operator3">
          <option value=">">greater than</option>
          <option value="<">less than</option>
          <option value="=">equal to</option>
        </select>
        <input type="text" v-model="$parent.q3" placeholder="e.g. 50.5">
      </div>
      <div class="filterbar w3-khaki" id="filter4">
        <label for="operator4">Last Post Date</label>
        <select v-model="$parent.op4" name="operator4">
          <option value=">">greater than</option>
          <option value="<">less than</option>
          <option value="=">equal to</option>
        </select>
        <input type="date" v-model="$parent.q4" placeholder="Date">
      </div>
    </div>
    <!-- <router-view/> -->
    <!-- <dts v-if="$parent.flag" :flag='$parent.flag' :prows='$parent.rows' :pcolumns='$parent.columns'></dts> -->
    <!-- <b-alert show variant="primary">Primary Alert</b-alert> -->
    <div v-if="$parent.flag" class="table w3-khaki">
      <vue-good-table
        title=""
        :columns="$parent.columns"
        :rows="$parent.customFilter"
        :paginate="true"
        :lineNumbers="true"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    tggleacc: function (event) {
      var panel = event.target.nextElementSibling;
      // console.log(panel.style.display);
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
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
    padding: 0 18px;
    background-color: #ddd;
    display: none;
    /* margin: auto;
    width: 75%; */
  }
  .filterbar {
    overflow: hidden;
    background-color: #e9e9e9;
    
  }
  .filterbar input, .filterbar select, .filterbar label {
    
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 16px;
    padding: 14px 16px;
    font-size: 17px;
  }
</style>
