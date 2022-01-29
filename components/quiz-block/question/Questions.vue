<template>
  <div class="mb-4 border-top mt-2 pt-2">
    <div class="text-bold mb-2">Список вопросов</div>
    <template v-if="questions.length">
      <QuestionItem
        v-for="(question ,key) in questions"
        :question="question"
        :types="types"
        :key="key"
        :order="key" />
    </template>
    <template v-else>
      <div class="mb-2">Вы не добавили еще ни одного вопроса</div>
    </template>
    <IconPlus title="Добавить вопрос" @click="addEmptyQuestion" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {QuizBlockModule} from '@/store/modules/quizBlock';
import VaButton from '@/components/lte/VAButton.vue';
import VaInput from '@/components/lte/VAInput.vue';
import QuestionItem from '@/components/quiz-block/question/QuestionItem.vue';
import {QuestionTypeModule} from '@/store/modules/questionType';
import IconPlus from '@/components/icons/IconPlus.vue';

@Component({
  components: {IconPlus, QuestionItem, VaInput, VaButton}
})
export default class Questions extends Vue {
  get questions() {
    return QuizBlockModule.questions
  }

  get types() {
    return QuestionTypeModule.types
  }

  public addEmptyQuestion() {
    QuizBlockModule.addQuestion()
  }
}
</script>

<style scoped>

</style>
