import {VuexModule, Module, MutationAction, getModule, Mutation, Action} from 'vuex-module-decorators'
import store from '@/store'
import {IQuestion, Question} from '@/entities/quiz/Question';
import {Answer, IAnswer} from '@/entities/quiz/Answer';

export interface IQuizBlock {
    block: {}
    questions: IQuestion[] | []
    answers: IAnswer[] | []
}


@Module({namespaced: true, dynamic: true, store, name: 'quizBlock'})
class QuizBlock extends VuexModule implements IQuizBlock {
    public block = {
        name: '',
        sort: 500,
        quizId: 0
    }
    public questions: IQuestion[] = [];
    public answers: IAnswer[] = [];

    @Mutation
    setQuizId(payload) {
        this.block.quizId = payload
    }

    @Mutation
    addQuestion(payload = {}) {
        this.questions.push(new Question(payload))
    }

    /**
     *
     * @param payload  => tempId
     */
    @Mutation
    removeQuestion(payload: string) {
        const index = this.questions.findIndex((question) => question.tempId === payload)
        this.questions.splice(index, 1)
    }

    /**
     *
     * @param data = {tempId: string, payload: {...}}
     */
    @Mutation
    updateQuestion(data) {
        const question = this.questions.find((question) => question.tempId === data.tempId)
        Object.assign(question, data.payload);
    }

    @Mutation
    addAnswer(payload = {}) {
        this.answers.push(new Answer(payload))
    }

    /**
     *
     * @param payload  => tempId
     */
    @Mutation
    removeAnswer(payload: string) {
        const index = this.answers.findIndex((answer) => answer.tempId === payload)
        this.answers.splice(index, 1)
    }

    /**
     *
     * @param data = {tempId: string, payload: {...}}
     */
    @Mutation
    updateAnswer(data) {
        const answer = this.answers.find((answer) => answer.tempId === data.tempId)
        Object.assign(answer, data.payload);
    }

    /**
     *
     * @param payload => questionTempId
     */
    @Mutation
    removeAnswers(payload: string) {
        const questionAnswers = this.answers.filter((answer) => answer.questionTempId === payload)
        questionAnswers.map((answer) => {
            const index = this.answers.indexOf(answer)
            this.answers.splice(index, 1)
        })
    }

    /**
     *
     * @param payload => questionTempId
     */
    @Action({rawError: true})
    removeQuestionAction(payload) {
        this.removeQuestion(payload)
        this.removeAnswers(payload)
    }

    /**
     *
     * @param payload => answerTempId
     */
    @Action({rawError: true})
    removeAnswerAction(payload) {
        this.removeAnswer(payload)
    }

    get answersByQuestionTempId() {
        return (questionTempId) => this.answers.filter((answer) => answer.questionTempId === questionTempId)
    }
}

export const QuizBlockModule = getModule(QuizBlock)
