<template>
  <div class="card">
    <div class="card-body" :class="[bodyClasses]">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop({default: ''}) bodyClasses?: '';
}
</script>

<style scoped>

</style>
