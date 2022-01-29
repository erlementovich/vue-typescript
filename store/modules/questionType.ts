import {VuexModule, Module, getModule, Action, Mutation} from 'vuex-module-decorators'
import store from '@/store'
import {api} from '@/tools/api';

export interface IQuestionType {
    types: Array<{
        id: number
        name: string
        code: string
        description?: string
    }>
}

@Module({dynamic: true, store, name: 'questionType'})
class QuestionType extends VuexModule implements IQuestionType {
    public types: Array<{ id: number; name: string; code: string; description?: string }> = [];

    @Mutation
    private seTypes(payload) {
        this.types = payload
    }

    @Action
    public async loadTypes() {
        try {
            const response = await api.getQuestionTypes()
            if (response.data.success) {
                if (response.data.content.types !== undefined) {
                    this.seTypes(response.data.content.types)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const QuestionTypeModule = getModule(QuestionType)
