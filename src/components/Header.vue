<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-4">{{ $t('header.home') }}</span>
          </a>
          <ul class="nav nav-pills">
            <li v-for="(item, index) in $t('navigation')" :key="index" class="nav-item">
              <g-link class="nav-link" :to="`${item.link}`">{{ item.title }}</g-link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>
