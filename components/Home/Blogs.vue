<template lang="pug">
section.i-home__blogs(id="blogs")
  //- div.i-home__blogs__content
  //-   Title(text="últimos blogs" center="true")
  //-   main.i-home__blogs__main
  //-     article(v-for="($, i) in blogs" :key="i")
  //-       img(:src="$.banner")
  //-       h4 {{ $.title }}
  //-       p(v-html="$.body.split('<!-- /wp:paragraph -->')[0]")
  //-       Link(text="Seguir leyendo" :to="$.to")
</template>

<script>
export default {
  name: 'ComponentHome__blogs',

  data() {
    return {
      blogs: []
    }
  },

  // async fetch() {
  //   const { data } = await this.$axios.get('/api/v1/top-blogs')
  //   data.blogs.forEach($ => {
  //     $.banner = (data.banners.find(_ => _.idBlog === $.id ) || {}).url || '/icon.png'
  //   })

  //   this.blogs = data.blogs
  // },

  fetchOnServer: false,

  methods: {
    open(URL) {
      // window.open(URL, '_blank')
    }
  }
}
</script>

<style>
.i-home__blogs {
  background-color: var(--white);
  padding: 48px 24px;
}
.i-home__blogs__content {
  max-width: 1024px;
  margin: 0 auto;
}
.i-home__blogs__main {
  display: grid;
  gap: 24px;
}
.i-home__blogs__main article {
  background-color: var(--white);
  display: block;
  padding: 0 0 24px;
  transition: background-color 0.3s;
}
.i-home__blogs__main article img,
.i-home__blogs__main article h4,
.i-home__blogs__main article p {
  pointer-events: none;
}
.i-home__blogs__main article img {
  background-color: var(--graylight);
  height: 144px;
  margin-bottom: 16px;
  object-fit: cover;
  width: 100%;
}
.i-home__blogs__main article p {
  display: -webkit-box;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 24px;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
@media screen and (min-width: 768px) {
  .i-home__blogs__main {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
