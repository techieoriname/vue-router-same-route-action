<template>
    <router-link :to="url" @click.prevent="close"><slot></slot></router-link>
</template>

<script>
import {defineComponent} from "vue";
import store from "../store";
import {useRouter, useRoute} from "vue-router";

export default defineComponent({
  name: "Navlink",
  props: {
    to: String
  },
  setup(props) {
    const router = useRouter()

    const url = router.resolve({name: props.to}).fullPath

    const close = () => {
        store.UPDATE_LOADING()
        setTimeout(() => {
          store.UPDATE_MENU('close')
          store.UPDATE_LOADING()
          router.push({name: props.to})
        }, 1000) // Adjust time to your taste.
    }

    return {close, url}
  },
})
</script>

<style scoped>

</style>
