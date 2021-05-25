<template>
<div class="book">
    <el-button @click="addbook">添加书本</el-button>
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
      label="详情"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

<el-dialog title="添加" :visible.sync="dialogVisible" width=30%>
  <div class="cover">
    <span class="cover_cover">上传封面:</span>
    <el-upload
                    :action="getUploadUrl()"
                    list-type="picture-card"
                    :on-preview="handleSuccess"
                    :on-remove="handleRemove"
                    :headers="headers"
                    :on-success="handleSuccess"
                    :file-list="fileList"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
  </div>
  <el-form :model="form">
    <el-form-item label="书籍名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="排序权重" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </div>
</el-dialog>

  
</div>

  
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      addbook(){
            this.dialogVisible = true;
            this.title = "";
            this.isEdit = false;
      },
      getUploadUrl() {
            return process.env.VUE_APP_UPLOAD_API;
        },

    },

    data() {
      return {
        fileList: [],
            bookList: [],
            orderby: "",
            dialogVisible: false,
            title: "",
            isEdit: false,
            updateId: 0,
            img: "",
            headers: {
                token: "",
            },

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
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //formLabelWidth: '120px'

      }
    }
  }
</script>

<style scoped>
.book .pic {
    width: 50px;
    height: 50px;
}
.book .cover{
  margin-top: 5px;
}
</style>