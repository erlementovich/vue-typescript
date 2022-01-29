<template>
  <div class="collapse-card question-item border shadow py-1 px-2 py-md-2 px-md-3 my-4" v-if="types.length">
    <div class="collapse-card__top text-bold text-gray">
      <span>Вопрос # {{ order + 1 }}</span>
      <div>
        <IconClose
          title="Удалить вопрос"
          class="question-item__close mr-2 mr-md-3 mt-1 mt-md-2"
          @click="removeQuestion" />
      </div>
    </div>
    <div class="collapse-card__content">
      <VaSelect
        @input="handleSelect"
        v-model="form.currentType"
        title="Выберите тип вопроса"
        name="question_type"
        :list="types"
        valueKey="id"
        valueName="name"
      />
      <div class="row" v-if="isNotEmpty(form.currentType)">
        <VaInput
          v-model="form.title"
          name="title"
          class="col-12 col-md-6"
          title="Название вопроса"
          :value="question.title"
          placeholder="Введите название вопроса" />
        <VaTextarea
          v-model="form.description"
          class="col-12 col-md-6"
          title="Описание"
          name="description"
          :value="question.title"
        />
      </div>
      <FileUploader v-model="form.files" />
      <template v-if="isNotEmpty(form.currentType)">
        <div class="text-bold my-2 pb-2 pt-3 border-top">Список ответов на вопрос</div>
        <Answers :question="question" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VaSelect from '@/components/lte/VASelect.vue';
import {IQuestion} from '@/entities/quiz/Question';
import {IQuestionType} from '@/store/modules/questionType';
import VaInput from '@/components/lte/VAInput.vue';
import VaTextarea from '@/components/lte/VATextarea.vue';
import {lodashMixin} from '@/tools/mixins/lodashMixin';
import IconClose from '@/components/icons/IconClose.vue';
import {QuizBlockModule} from '@/store/modules/quizBlock';
import IconPlus from '@/components/icons/IconPlus.vue';
import Answers from '@/components/quiz-block/answer/Answers.vue';
import FileUploader from '@/components/global/FileUploader.vue';

@Component({
  components: {FileUploader, Answers, IconPlus, IconClose, VaTextarea, VaInput, VaSelect},
  mixins: [lodashMixin]
})
export default class QuestionItem extends Vue {
  @Prop({default: () => ([])}) readonly types: IQuestionType[];
  @Prop({default: () => ({})}) readonly question: IQuestion;
  @Prop({default: Number}) order?: number;

  private form = {
    currentType: {},
    title: '',
    description: ''
  }

  removeQuestion() {
    return QuizBlockModule.removeQuestionAction(this.question.tempId)
  }

  handleSelect() {
    const data = {
      tempId: this.question.tempId,
      payload: {
        question_type_id: (this.form.currentType as any)?.id
      }
    }
    QuizBlockModule.updateQuestion(data)
  }
}
</script>

<style lang="scss" scoped>
.question-item {
  border-radius: 8px;
  position: relative;

  &__close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
