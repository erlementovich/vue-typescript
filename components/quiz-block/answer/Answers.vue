<template>
  <div class="answer-items bg-gray-light col-12 border rounded my-2 p-2 p-md-3">
    <template v-if="answers.length">
      <AnswerItem
        v-for="(answer, key) in answers"
        :answer="answer"
        :key="key"
        :order="key"
      />
    </template>
    <template v-else>
      <div class="mb-2">Вы не добавили еще ни одного ответа на данный вопрос</div>
    </template>
    <IconPlus title="Добавить ответ" @click="addEmptyAnswer" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import IconClose from '@/components/icons/IconClose.vue';
import {IQuestion} from '@/entities/quiz/Question';
import {QuizBlockModule} from '@/store/modules/quizBlock';
import AnswerItem from '@/components/quiz-block/answer/AnswerItem.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import VaFormGroup from '@/components/lte/VAFormGroup.vue';

@Component({
  components: {VaFormGroup, IconPlus, AnswerItem, IconClose}
})
export default class Answers extends Vue {
  @Prop({default: () => ({})}) question: IQuestion;

  addEmptyAnswer() {
    QuizBlockModule.addAnswer({questionTempId: this.question.tempId});
  }

  get answers() {
    return QuizBlockModule.answersByQuestionTempId(this.question.tempId)
  }
}
</script>
