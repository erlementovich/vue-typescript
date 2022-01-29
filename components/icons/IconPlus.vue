<template>
  <div class="icon btn btn-dark" @click="handleClick">
    <i :style="{color: iColor}" class="icon__i far fa-plus"></i>
  </div>
</template>

<script>
export default {
  name: "IconPlus",
  props: {
    iColor: {
      type: String,
      default: 'var(--white)'
    }
  },
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
