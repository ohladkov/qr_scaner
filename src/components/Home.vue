<template>
  <div class="hello">
    <h1>{{ $t('default.title') }}</h1>
    <router-link :to="{ name: 'Scan' }">{{ $t('scanner.link') }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
