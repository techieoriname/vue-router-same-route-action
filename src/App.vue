<template>
  <div class="flex flex-wrap py-2">
    <div class="w-full px-4">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 rounded">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <Navlink to="Home" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              LOGO
            </Navlink>
            <button v-if="menuShow === 'close'" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar('open')">
              <i class="fas fa-bars"></i> MENU
            </button>
            <button v-if="menuShow === 'open'" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar('close')">
              <i class="fas fa-bars"></i> CLOSE
            </button>
          </div>
          <div :class="{'hidden': menuShow === 'close', 'flex': menuShow === 'open'}" class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item" v-for="(route, index) in routes" :key="index">
                <span class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <Navlink :to="route.routeName">{{ route.title }}</Navlink>
                </span>
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
import Navlink from "@/components/Navlink.vue"

export default defineComponent({
  name: 'App',
  components: { Navlink },
  setup () {
    const reloadMenu = ref(1)
    const menuShow = computed(() => store.state.showMenu)
    const toggleNavbar = (value: string) => {
      store.UPDATE_MENU(value)
    }

    const reload = () => ++reloadMenu.value

    const routes = [
      {
        routeName: 'Home',
        title: 'Home page'
      },
      {
        routeName: 'About',
        title: 'About Us'
      },
      {
        routeName: 'Service',
        title: 'Our Services'
      },
      {
        routeName: 'Contact',
        title: 'Contact Us'
      },
    ];

    return {menuShow, toggleNavbar, reload, reloadMenu, routes}
  }
})
</script>
