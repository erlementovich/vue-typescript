<template>
  <div class="answer-item mb-2">
    <IconClose
      title="Удалить вопрос"
      class="answer-item__close mt-1 mt-md-2"
      @click="removeQuestion" />
    <div class="text-bold text-gray">Ответ # {{ order + 1 }}</div>
    <div class="row">
      <VaInput
        v-model="form.title"
        name="title"
        class="col-12"
        title="Ответ на вопрос"
        :value="answer.title"
        placeholder="Введите ответ на вопрос" />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import IconClose from '@/components/icons/IconClose.vue';
import {IAnswer} from '@/entities/quiz/Answer';
import {QuizBlockModule} from '@/store/modules/quizBlock';
import VaInput from '@/components/lte/VAInput.vue';

@Component({
  components: {VaInput, IconClose}
})
export default class AnswerItem extends Vue {
  @Prop({default: () => ({})}) answer: IAnswer
  @Prop() order: number
  private form = {
    title: ''
  }

  removeQuestion() {
    QuizBlockModule.removeAnswerAction(this.answer.tempId)
  }
}

</script>

<style lang="scss" scoped>
.answer-item {
  position: relative;

  &__close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
