import Vue from 'vue'
import '@/plugins'
import store from '@/store'
import QuizBlock from '@/components/quiz-block/QuizBlock.vue'

Vue.config.productionTip = false

if (document.getElementById('quiz-block')) {
    new Vue({
        el: '#quiz-block',
        store,
        components: {QuizBlock}
    })
}
