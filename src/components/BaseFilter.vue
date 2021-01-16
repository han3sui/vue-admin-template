<template>
  <div class="filter-wrapper">
    <el-form  :inline="true">
      <template v-for="(item,index) in data">
        <el-form-item :key="index" :label="item.label">
          <el-input :placeholder="item.placeholder"/>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BaseFilter',
  props: {
    /**
     * 筛选数组
     * type：支持input,select,datepicker
     * label，为空不显示
     * placeholder，为空不显示
     */
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
