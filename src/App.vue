<script setup>
  import { ref, computed } from 'vue';
  function setTheme(cmptd) {
    document.querySelector("html").setAttribute("data-theme", cmptd.value);
  }

  let theme = ref(localStorage.getItem("theme") ?? "halloween");
  //setTheme(theme);

  const darkMode = computed(() => {
    const dark = theme.value == "halloween" ? "moon" : "sun";
    return `fa-solid fa-${dark}`;
  })

  function toggleDarkMode() {
    theme.value = (theme.value == "halloween") ? "caramellatte" : "halloween";
    localStorage.setItem("theme", theme.value);
    setTheme(theme)
  }
  
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="flex flex-col p-10">
        <RouterView />
      </div>
    </div>
    <div class="drawer-side">
      <label for="app-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="flex menu bg-base-200 min-h-full w-70 p-6">
        <img src="/profile.png" class="w-5/8 place-self-center"/>
        <span class="text-3xl pb-3 pt-5 font-bold text-primary"> Thomas VINET </span>
        <span class="italic">PhD Student</span>
        <span class="italic pb-3">Mocqua, INRIA Nancy</span>
        <hr class="pb-3">
        <ul>
          <li>
            <RouterLink class="py-2 hover:text-primary" to="/">
              <font-awesome-icon size="lg" icon="fa-solid fa-home"/>
              <span class="pl-2 text-lg">Home</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink class="py-2 hover:text-primary" to="/research">
              <font-awesome-icon size="lg" icon="fa-solid fa-newspaper"/>
              <span class="pl-2 text-lg">Research</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink class="py-2 hover:text-primary" to="/teaching">
              <font-awesome-icon size="lg" icon="fa-solid fa-pen-nib"/>
              <span class="pl-2 text-lg">Teaching</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink class="py-2 hover:text-primary" to="/misc">
              <font-awesome-icon size="lg" icon="fa-solid fa-flask"/>
              <span class="pl-2 text-lg">Miscellaneous</span>
            </RouterLink>
          </li>
        </ul>
        <div class="grow"/>
        <div class="flex items-center justify-center">
          <elink href="https://github.com/thomas-vinet" :hover="true">
            <font-awesome-icon size="lg" icon="fa-brands fa-github"/>
          </elink>
          <font-awesome-icon size="lg" class="px-5 hover:text-primary cursor-pointer" :icon="darkMode" @click="toggleDarkMode"/>
          <elink href="https://orcid.org/0009-0007-8547-6145" :hover="true">
            <font-awesome-icon size="lg" icon="fa-brands fa-orcid"/>
          </elink>
        </div>
      </div>
    </div>
  </div>
</template>
