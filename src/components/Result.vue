<template>
  <div id="result">
    <h2>Result:
      <mark>
        {{result}}
      </mark>
    </h2>
    <button @click.prevent="reset"
            type="button"
            class="btn-reset">reset</button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      result: '',
    };
  },
  created() {
    const queryData = this.$route.query.data;
    if (queryData) {
      this.result = queryData;
      return;
    }
    this.reset();
  },
  methods: {
    reset() {
      this.$router.push('/scan');
    },
  },
};
</script>

<style scoped>
  #result {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  mark {
    text-decoration: underline;
  }

  .btn-reset {
    min-width: 140px;
    max-width: 160px;
    margin: 20px 0;
    padding: 10px 20px;
    border: 0;
    border-radius: 4px;
    font-size: 20px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    color: #fff;
    background-color: blueviolet;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  .btn-reset:hover {
    opacity: 0.8;
  }
</style>
