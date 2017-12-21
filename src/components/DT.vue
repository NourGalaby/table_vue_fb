<template>
  <div>
    <vue-good-table
      title="Basic Statistics"
      :columns="columns"
      :rows="rows"
      :paginate="true"
      :lineNumbers="true"/>
  </div>
</template>

<script>
// const dataPromise = new Promise((resolve, reject) => {
//   var xmlhttp = new XMLHttpRequest();
//   alert('Before');
//   xmlhttp.onreadystatechange = function() {
//     alert('state change');
//     if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
//       alert('Done');
//       if (xmlhttp.responseText) {
//         resolve(xmlhttp.responseText);
//       } else {
//         reject('status code = ' + xmlhttp.status + 'status text = ' + xmlhttp.statusText);
//       }
//       // if (xmlhttp.status == 200) {
//       //   alert('200');
//       //   resolve(xmlhttp.responseText);
//       // } else if (xmlhttp.status == 400) {
//       //   alert('400');
//       //     reject('There was an error 400 \n status text = ' + xmlhttp.statusText);
//       //   } else {
//       //     alert(xmlhttp.status);
//       //     reject('status code = ' + xmlhttp.status + 'status text = ' + xmlhttp.statusText);
//       //   }
//     }
//   };

//     xmlhttp.open("GET", "http://localhost:5000/sample", true);
//     xmlhttp.send();
// });
export default {
  name: 'test',
  props: ['flag', 'prows', 'pcolumns'],
  data () {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterable: true
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
          html: false,
          filterable: true
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          inputFormat: 'YYYYMMDD',
          outputFormat: 'MMM Do YY'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
          html: false
        }
      ],
      rows: [
        {id: 1, name: 'John', age: 20, createdAt: '20111031 9:35 am', score: 0.03343},
        {id: 2, name: 'Jane', age: 24, createdAt: '20111031', score: 0.03343},
        {id: 3, name: 'Susan', age: 16, createdAt: '20111030', score: 0.03343},
        {id: 4, name: 'Chris', age: 55, createdAt: '20111011', score: 0.03343},
        {id: 5, name: 'Dan', age: 40, createdAt: '20111021', score: 0.03343},
        {id: 6, name: 'John', age: 20, createdAt: '20111031', score: 0.03343},
        {id: 7, name: 'Jane', age: 24, createdAt: '20111031'},
        {id: 8, name: 'Susan', age: 16, createdAt: '20131031', score: 0.03343},
        {id: 9, name: 'Chris', age: 55, createdAt: '20121031', score: 0.03343},
        {id: 10, name: 'Dan', age: 40, createdAt: '20111031', score: 0.03343},
        {id: 11, name: 'John', age: 20, createdAt: '20111031', score: 0.03343},
        {id: 12, name: 'Jane', age: 24, createdAt: '20110731', score: 0.03343},
        {id: 13, name: 'Susan', age: 16, createdAt: '20170228', score: 0.03343},
        {id: 14, name: 'Chris', age: 55, createdAt: '', score: 0.03343},
        {id: 15, name: 'Dan', age: 40, createdAt: '20111031', score: 0.03343},
        {id: 19, name: 'Chris', age: 55, createdAt: '20111031', score: 0.03343},
        {id: 20, name: 'Dan', age: 40, createdAt: '20111031', score: 0.03343}
      ]
    }
  },
  created() {
    // this.$http.get('http://localhost:5000/sample').then((dataSample) => {
    //   // console.log(dataSample);
    //   let body = JSON.parse(dataSample.body);
    //   let rows = [];
    //   let columns = [];
    //   for (var colName in body) {
    //     if (body.hasOwnProperty(colName)) {
    //       if (colName === 'picture') {
    //         columns.push({label: 'Picture', field: colName, html: true});
    //       } else if (colName === 'US percent') {
    //         columns.push({label: 'US Percent', field: colName, filterable: true, type: 'percentage'});
    //       } else if (colName === 'fans_count') {
    //         columns.push({label: 'Fans Count', field: colName, filterable: true, type: 'number'});
    //       } else if (colName === 'US_Total') {
    //         columns.push({label: 'US Total Fans', field: colName, filterable: true, type: 'number'});
    //       } else if (colName === 'last_post_date') {
    //         columns.push({label: 'Last Post Date', field: colName, filterable: true, type: 'date', inputFormat: 'YYYY-MM-DD', outputFormat: 'MMM Do YY'});
    //       } else if (colName === 'id') {
    //         columns.push({label: 'Page Link', field: colName, html: true});
    //       } else if (colName === 'name') {
    //         columns.push({label: 'Page Name', field: colName, filterable: true});
    //       } else {
    //         columns.push({label: colName, field: colName, filterable: true});
    //       }
    //       var col = body[colName];
    //       for (var id in col) {
    //         if (col.hasOwnProperty(id)) {
    //           var val = col[id];
    //           if (!rows[id]) {
    //             rows[id] = {'id': id};
    //           }
    //           if (colName === 'picture') {
    //             rows[id][colName] = '<img src ="' + val + '" />';  
    //           } else if (colName === 'id') {
    //             rows[id][colName] = '<a href ="' + val + '" />' + val;  
    //           } else {
    //             rows[id][colName] = val;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   // console.log(rows);
    //   this.columns = columns;
    //   this.rows = rows;
    // }).catch((err) => {
    //   console.log(err);
    // });
    // console.log(flag);
    // console.log(this.flag);
  },
  watch: {
    flag: function () {
      console.log('flag');
      this.rows = this.prows;
      this.columns = this.pcolumns;
    }
  }
};
</script>