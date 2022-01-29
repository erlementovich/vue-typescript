import {HasModel, Model} from '@/entities/interfaces/HasModel';

export interface IAnswer extends HasModel {
    title: string
    questionTempId: string;
    id?: number
    sort?: number
    quiz_question_id?: number
}

export class Answer extends Model implements IAnswer {
    title: string = '';
    questionTempId: string
    id?: number;
    sort?: number;
    quiz_question_id?: number;

    constructor(data) {
        super();
        Object.assign(this, data);
    }
}
