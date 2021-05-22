import {reactive, readonly} from "vue"

const state = reactive({
    showMenu: 'close',
    loading: false
})

const UPDATE_MENU = (value: string) => {
    state.showMenu = value
}

const UPDATE_LOADING = () => {
    state.loading = !state.loading
}

export default {
    state: readonly(state),
    UPDATE_MENU,
    UPDATE_LOADING
}
