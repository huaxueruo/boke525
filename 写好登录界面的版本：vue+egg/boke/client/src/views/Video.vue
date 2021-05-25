<template>
<div>
    <el-button @click="addbook">添加视频</el-button>

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="序号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="封面"
      width="180">
    </el-table-column>
    <el-table-column
      prop="province"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="详情">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">浏览视频</el-button>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      addbook(){
          alert("xixix tian")
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
