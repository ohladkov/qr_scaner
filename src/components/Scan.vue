<template>
  <div>
    <router-link :to="{name: 'HelloWorld'}">Go Home</router-link>
    <Scanner @scan="onScan" />
    <div v-if="scanResult" id="result">
      <h2>Result:</h2>
      <mark>{{ scanResult }}</mark>
      <button @click.prevent="reset"
              type="button"
              class="btn-reset">reset</button>
    </div>
  </div>
</template>

<script>
import Scanner from '@/components/ui/Scanner';

export default {
  name: 'Scan',
  data() {
    return {
      scanResult: '',
    };
  },
  components: {
    Scanner,
  },
  methods: {
    onScan(result) {
      this.scanResult = result;
    },
    reset() {
      this.scanResult = '';
    },
  },
};
</script>

<style scoped>
  #result {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  .btn-reset {
    min-width: 140px;
    max-width: 160px;
    margin: 20px 0;
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 20px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: #fff;
    background-color: blueviolet;
  }
</style>

