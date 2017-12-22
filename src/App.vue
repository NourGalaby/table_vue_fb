<template>
  <div id="app">
    <!-- <img src="./assets/fb-art.png">
    <br> -->
    <div class="filterbar" id="filters">
      <label for="">Filter by : </label>
      <select v-model="$parent.f">
        <option value="fans_count">Fans Count</option>
        <option value="US_Total">US Total Fans</option>
      
      </select>
      <select v-model="$parent.op">
        <option value=">">greater than</option>
        <option value="<">less than</option>
        <option value="=">equal to</option>
      </select>
      <input type="text" v-model="$parent.q" placeholder="A positive number">
    </div>
    <!-- <router-view/> -->
    <!-- <dts v-if="$parent.flag" :flag='$parent.flag' :prows='$parent.rows' :pcolumns='$parent.columns'></dts> -->
    <div v-if="$parent.flag" class="table">
      <vue-good-table
        title="Basic Statistics"
        :columns="$parent.columns"
        :rows="$parent.customFilter"
        :paginate="true"
        :lineNumbers="true"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table {
  margin: auto;
  width: 75%;
}
.filterbar {
  overflow: hidden;
  background-color: #e9e9e9;
  margin: auto;
  width: 75%;
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
