<template>
  <div class="flex flex-wrap py-2">
    <div class="w-full px-4">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 rounded">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <router-link @click.prevent="reload" to="/" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" :key="reloadMenu">
              LOGO
            </router-link>
            <button v-if="menuShow === 'close'" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar('open')">
              <i class="fas fa-bars"></i> MENU
            </button>
            <button v-if="menuShow === 'open'" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar('close')">
              <i class="fas fa-bars"></i> CLOSE
            </button>
          </div>
          <div :class="{'hidden': menuShow === 'close', 'flex': menuShow === 'open'}" class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <span class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <Navlink to="/">Home</Navlink>
                </span>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  About
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  Settings
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import store from './store'
import {useRouter} from 'vue-router'
import Navlink from "@/components/Navlink.vue"

export default defineComponent({
  name: 'App',
  components: { Navlink },
  setup () {
    const reloadMenu = ref(1)
    const router = useRouter()
    const menuShow = computed(() => store.state.showMenu)
    const toggleNavbar = (value: string) => {
      store.UPDATE_MENU(value)
    }

    const reload = () => ++reloadMenu.value

    return {menuShow, toggleNavbar, reload, reloadMenu}
  }
})
</script>
