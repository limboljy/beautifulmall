<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <div>
        <a :href="item.link"> <img :src="item.image" alt="" /></a>
      </div>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  border-bottom: 6px solid rgb(235, 228, 228);
}

.recommend-item {
  flex: 1;
  margin: 10px 0 10px;
}

.recommend img {
  width: 68px;
  height: 68px;
  margin-bottom: 7px;
}
</style>