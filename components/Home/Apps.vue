<template>
  <section :class="$style.css_home_apps" id="apps">
    <div :class="$style.css_home_apps_content">
      <Title text="Aplicativos" center="true"/>
      <div :class="$style.css_home_apps_items">
        <a v-for="($, i) in $store.state.lists.apps" :href="$.to" :key="i" target="_blank">
          <div :class="$style.css_home_apps_item">
            <i :class="[`uil-${$.icon}`]"/>
            <h4>{{ $.title }}</h4>
            <Link text="Ver planes" style="pointer-events: none" :to="$.to"/>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style module>
.css_home_apps {
  padding: 48px 24px;
}
.css_home_apps_content {
  max-width: 1024px;
  margin: 0 auto;
}

.css_home_apps_items {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 480px), 1fr));
}

.css_home_apps_item {
  display: grid;
  border: 1px solid var(--graylight);
  cursor: pointer;
  padding: 24px;
  text-align: center;
  transition: background-color .3s, border-color .3s;
}

.css_home_apps_item i {
  font-size: 24px;
  padding: 8px;
}

.css_home_apps_item:hover {
  background-color: var(--accent);
  border-color: var(--blue);
}
</style>
