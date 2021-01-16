<template>
  <div>
    <base-filter :data="filterData"/>
  </div>
</template>

<script>
import BaseFilter from '@/components/BaseFilter'

export default {
  name: 'index',
  components: { BaseFilter },
  data () {
    return {
      filterData: [
        {
          type: 'input',
          label: '卡号',
          placeholder: '请输入卡号'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
