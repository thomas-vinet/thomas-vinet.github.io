<script setup lang="ts"></script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">

    </div>
    <div class="drawer-side">
      <label for="app-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="flex menu bg-base-200 min-h-full w-80 p-4">
      <span class="text-3xl"> Thomas VINET </span>
      <hr>
      <ul>
        <li>
          <div class="flex">
            <font-awesome-icon icon="fa-solid fa-house"/>
            <RouterLink to="/">Home</RouterLink>
          </div>
        </li>
        <li>
          <div class="flex">
            <font-awesome-icon icon="fa-solid fa-house"/>
            <RouterLink to="/">Publications</RouterLink>
          </div>
        </li>
        <li>
          <div class="flex">
            <font-awesome-icon icon="fa-solid fa-house"/>
            <RouterLink to="/">Teaching</RouterLink>
          </div>
        </li>
        <li>
          <div class="flex">
            <font-awesome-icon icon="fa-solid fa-globe"/>
            <RouterLink to="/">Contact</RouterLink>
          </div>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
