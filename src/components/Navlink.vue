<template>
  <div @click="close">
    <router-link :to="to"><slot></slot></router-link>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import store from "../store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Navlink",
  props: {
    to: String
  },
  setup(props) {

    const close = () => {
      store.UPDATE_MENU('close')
    }

    return {close, to: props.to}
  },
})
</script>

<style scoped>

</style>
