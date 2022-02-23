<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col">{{ $t('home.desc') }}</div>
        <section class="space">
          <h4>IconLoader component</h4>
          <p>Very useful to load the page faster. Explore the component!</p>
          <li v-for="(listItem, listIndex) in $t('socialIcons')" :key="listIndex">
            <a :href="`${listItem.link}`" rel="noopener noreferrer" target="_blank">
              <Icon :name="`${listItem.icon}`" />
              <span class="visually-hidden-focusable">{{ listItem.icon }}</span>
            </a>
          </li>
        </section>
        <section class="space">
          <h4>Bootstrap 5 Plugins</h4>
          <p>
            This is an example to illustrate how can you load a javascript plugin from Bootstrap 5
            into Vuejs/Gridsome. In this case we're using Collapse
          </p>
          <div id="accordionExample" class="accordion">
            <div class="accordion-item">
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default,
                  until the collapse plugin adds the appropriate classes that we use to style each
                  element. These classes control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingTwo" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any of this with custom CSS
                  or overriding our default variables. It's also worth noting that just about any
                  HTML can go within the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingThree" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default,
                  until the collapse plugin adds the appropriate classes that we use to style each
                  element. These classes control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<script>
import Icon from '@/components/IconLoader';

export default {
  name: 'HomePage',
  components: {
    Icon
  },
  metaInfo: {
    title: 'Home'
  },
  mounted() {
    require('bootstrap').Collapse;
  }
};
</script>

<style scoped>
.space {
  margin: 2em 0;
}

svg {
  color: black;
}
</style>
