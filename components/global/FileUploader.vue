<template>
  <file-pond
    class="file-iploader"
    ref="pond"
    :name="name"
    :label-idle="label"
    :accepted-file-types="acceptedTypes.join(', ')"
    :files="files"
    :init="handleFilePondInit"
    imageCropAspectRatio="1:1"
    maxFileSize="3MB"
    labelMaxFileSizeExceeded="Файл слишком большой"
    labelMaxFileSize="Максимальный размер файла {filesize}"
    allow-multiple="true"
    allow-image-preview="true"
    allow-reorder="true"
    data-style-panel-layout="compact"
    credits="false"
  />
</template>

<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';


const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginFileValidateSize
);

export default {
  name: 'FileUploader',
  components: { FilePond },
  props: {
    label: {
      type: String,
      default: 'Прикрепить файлы',
    },
    files: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: 'files'
    },
    acceptedTypes: {
      type: Array,
      default: () => ['image/jpeg', 'image/jpg', 'image/png']
    },
    entity: {
      type: Object,
      default: () => ({
        id: 123,
        type: 'typeExample',
      })
    }
  },
  methods: {
    handleFilePondInit() {
      console.log('FilePond has initialized')
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 30em) {
  .filepond--item {
    width: calc(50% - 0.5em);
  }
}

@media (min-width: 50em) {
  .filepond--item {
    width: calc(33.33% - 0.5em);
  }
}
</style>
