<template>
  <div class="form-group">
    <label :for="vaId" class="control-label">{{ title }}</label>
    <select @input="handleSelect($event)" class="form-control" :disabled="isDisabled" :multiple="isMultiple">
      <option selected disabled>Тип вопроса</option>
      <option v-for="(item,index) in list" :value="getValueData(item)" :key="index">
        {{ getNameData(item) }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'va-select',
  props: {
    vaId: {
      type: String
    },
    list: {
      type: Array,
      default: []
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    valueKey: {
      type: String,
      default: null
    },
    valueName: {
      type: String,
      default: null
    }
  },
  methods: {
    handleSelect(event) {
      let selectedType = event.target.value;

      if (this.valueName && this.valueKey) {
        selectedType = this.list.find((type) => type[this.valueKey] == selectedType)
      }
      return this.$emit('input', selectedType)
    },
    getValueData(item) {
      if (this.valueName && this.valueKey) {
        return item[this.valueKey]
      }
      return item
    },
    getNameData(item) {
      if (this.valueName && this.valueKey) {
        return item[this.valueName]
      }
      return item
    }
  }
}
</script>
