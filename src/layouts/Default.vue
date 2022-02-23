<template>
  <div id="app">
    <SpriteIcons />
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import SpriteIcons from '@/components/Icons';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'DetaultTemplate',
  components: {
    SpriteIcons,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
main {
  margin: 2rem 0;
}
</style>
