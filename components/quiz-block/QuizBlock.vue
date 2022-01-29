<template>
  <VACard body-classes="p-3 p-md-4">
    <form @submit.prevent="handleSubmit" action="" method="POST">
      <div class="row">
        <VaInput
          v-model="form.name"
          name="name"
          class="col-12 col-md-6"
          title="Название блока"
          :value="block.name"
          placeholder="Введите название блока" />

        <VaInput
          v-model="form.sort"
          name="sort"
          class="col-12 col-md-6"
          title="Сортировка"
          :value="block.sort"
          min="0"
          step="10"
          type="number"
          placeholder="Введите число" />
      </div>
      <FileUploader v-model="form.files" />

      <Questions />

      <VaButton type="submit" theme="dark" class="btn" name="Сохранить" />
    </form>
  </VACard>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VACard from '@/components/lte/VACard.vue';
import Questions from '@/components/quiz-block/question/Questions.vue';
import VaButton from '@/components/lte/VAButton.vue';
import {QuizBlockModule} from '@/store/modules/quizBlock';
import VaFormGroup from '@/components/lte/VAFormGroup.vue';
import VaInput from '@/components/lte/VAInput.vue';
import VaText from '@/components/lte/VAText.vue';
import {QuestionTypeModule} from '@/store/modules/questionType';
import FileUploader from '@/components/global/FileUploader.vue';

@Component({
  components: {FileUploader, VaText, VaInput, VaFormGroup, VaButton, Questions, VACard}
})
export default class QuizBlock extends Vue {
  @Prop(Number) readonly quizId: number | undefined

  private form: {} = {
    name: '',
    sort: 500,
    files: []
  }

  handleSubmit() {
    console.log('submitted')
  }

  beforeMount() {
    QuizBlockModule.setQuizId(this.quizId)
    QuestionTypeModule.loadTypes();
  }

  get block() {
    return QuizBlockModule.block
  }
}
</script>

<style scoped>

</style>
