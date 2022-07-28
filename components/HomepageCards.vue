<template>
  <a-card :loading="loading" hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template #actions>

    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
  </a-card>
</template>
<script>
export default {
  props: {
    cardIndex: {
      type: [String, Number],
      default: 1,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
