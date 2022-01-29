import {HasModel, Model} from '@/entities/interfaces/HasModel';
import {QuizBlockModule} from '@/store/modules/quizBlock';

export interface IQuestion extends HasModel {
    id?: number
    title: string
    description?: string
    question_id?: number
    sort?: number
    question_type_id?: number
    quiz_id: number
    quiz_block_id?: number
}

export class Question extends Model implements IQuestion {
    description?: string = ''
    id?: number
    question_id?: number
    quiz_block_id?: number
    question_type_id?: number
    quiz_id: number = QuizBlockModule.block.quizId
    sort: number | undefined
    title: string = ''

    constructor(data) {
        super()
        Object.assign(this, data);
    }
}
