<template>
  <div class="form-group">
    <label :for="vaId" class="control-label">{{ title }}</label>
    <div>
      <input
        @input="$emit('input', $event.target.value)"
        :type="type"
        :class="[formControl, getSize]"
        :id="vaId"
        :placeholder="placeholder"
        :value="value"
        :step="step"
        :min="min"
        :max="max"
        :disabled="isDisabled" />
    </div>

  </div>
</template>

<script lang="js">
export default {
  name: 'va-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    vaId: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Enter Text...'
    },
    size: {
      type: String
    },
    value: {
      type: String | Number
    },
    isFormControl: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number | String,
      default: 1
    },
    min: {
      type: Number | String,
      default: 0
    },
    max: {
      type: Number | String,
      default: 10000
    }
  },
  computed: {
    getSize() {
      if (!this.size) {
        return ''
      }

      return 'input-' + this.size
    },
    formControl() {
      return this.isFormControl ? 'form-control' : ''
    }
  },
  created() {

  }
}
</script>
