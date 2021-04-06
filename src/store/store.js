import { createStore } from 'vuex'
import { ADD_TASK, CLEAR_TASK, MARK_AS_DONE, MARK_AS_UNDONE, REFRESH_FROM_LOCAL_STORE, REMOVE_TASK, UPDATE_TASK } from './mutation-types';
import { FETCH_FROM_STORE, UPDATE_STORE } from './action-types'

export default createStore({
    state: {
        tasks: []
    },
    mutations: {
        [REFRESH_FROM_LOCAL_STORE](state, tasks) {
            state.tasks = tasks
        },
        [ADD_TASK](state, task) {
            state.tasks.unshift(task)
        },
        [CLEAR_TASK](state) {
            state.tasks.length = 0
        },
        [REMOVE_TASK](state, task) {
            state.tasks = state.tasks.filter(it => it.id !== task.id)
        },
        [MARK_AS_DONE](state, task) {
            state.tasks = state.tasks
                .map(it => {
                    if (it.id === task.id) 
                        it.done = true
                    return it;
            })
        },
        [MARK_AS_UNDONE](state, task) {
            state.tasks = state.tasks
            .map(it => {
                if (it.id === task.id) 
                    it.done = false
                return it
        })},
        [UPDATE_TASK](state, task) {
            const index = state.tasks.findIndex(it => it.id == task.id);
            state.tasks[index] = task;
        }
    },
    actions: {
        [FETCH_FROM_STORE]({ commit }) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            commit(REFRESH_FROM_LOCAL_STORE, tasks);
        },
        [UPDATE_STORE]({ state }) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    }
});