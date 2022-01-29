import {request} from '@/tools/request';

class Api {
    getQuizBlockData(quizBlockId) {
        return request.get(`quizzes/${quizBlockId}`)
    }

    getQuestionTypes() {
        return request.get('admin/question-types')
    }
}

export const api = new Api();
