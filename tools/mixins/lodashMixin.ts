import {isEmpty} from 'lodash';

export const lodashMixin = {
    methods: {
        isEmpty(data?: any) {
            return isEmpty(data)
        },
        isNotEmpty(data?: any) {
            return !isEmpty(data)
        }
    }
}
