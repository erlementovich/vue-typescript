<template>
  <div class="form-group">
    <label :for="vaId" class="control-label">{{ title }}</label>

    <textarea
      @input="$emit('input', $event.target.value)"
      class="form-control"
      :rows="rowCount"
      :placeholder="placeholder"
      :disabled="isDisabled"
    >{{ value }}</textarea>
  </div>
</template>

<script>
export default {
  name: 'va-textarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    rowCount: {
      type: Number,
      default: 3
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    title: {
      type: String
    },
    vaId: {
      type: String
    },
  },
  created() {

  }
}
</script>
