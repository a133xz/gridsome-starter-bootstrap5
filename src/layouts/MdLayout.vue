<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="md-page__title">{{ title }}</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <slot />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  metaInfo() {
    return {
      title: this.title
    };
  }
};
</script>

<style lang="scss" scoped>
.md-page__title {
  font-size: 2rem;
  line-height: 1.1;
  padding: 15px;
  padding-left: 0;
}
</style>
