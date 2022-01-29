import {v4 as uuid} from 'uuid';

export interface HasModel {
    tempId: string
}

export class Model implements HasModel {
    tempId: string = uuid()
}
