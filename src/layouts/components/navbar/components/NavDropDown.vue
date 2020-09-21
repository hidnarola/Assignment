<template>
  <div class="dropdown-alignment">
    <vs-dropdown>
      <a class="flex items-center" href.prevent>
        <i class="material-icons">expand_more</i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item>Option 1</vs-dropdown-item>
        <vs-dropdown-item>Option 2</vs-dropdown-item>

        <vs-dropdown-group>
          <vs-dropdown-item>Option 1</vs-dropdown-item>
          <vs-dropdown-item>Option 2</vs-dropdown-item>

          <vs-dropdown-group>
            <vs-dropdown-item>sub Options 1</vs-dropdown-item>
            <vs-dropdown-item>sub Options 2</vs-dropdown-item>
          </vs-dropdown-group>
        </vs-dropdown-group>

        <vs-dropdown-item divider>Option 3</vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>
  
<style scoped>
.dropdown-alignment {
  padding-top: 1.2rem;
  padding-left: 0.5rem;
}
</style>