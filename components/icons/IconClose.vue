<template>
  <div class="icon btn btn-light border rounded" @click="handleClick">
    <i class="icon__i far fa-times"></i>
  </div>
</template>

<script>
export default {
  name: "IconClose",
  methods: {
    handleClick() {
      return this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

