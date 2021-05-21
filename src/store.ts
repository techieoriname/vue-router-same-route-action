import {reactive, readonly} from "vue"

const state = reactive({
    showMenu: 'close'
})

const UPDATE_MENU = (value: string) => {
    state.showMenu = value
}

export default {
    state: readonly(state),
    UPDATE_MENU
}
