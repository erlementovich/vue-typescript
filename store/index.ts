import Vue from 'vue'
import Vuex from 'vuex'
import {IQuizBlock} from '@/store/modules/quizBlock';
import {IQuestionType} from '@/store/modules/questionType';

Vue.use(Vuex)

export interface IRootState {
    quizBlock: IQuizBlock
    questionType: IQuestionType
}

export default new Vuex.Store<IRootState>({});
