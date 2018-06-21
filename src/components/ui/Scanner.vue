<template>
  <div>
    <h2>{{ $t('scanner.msg') }}</h2>
    <video v-show="isVideoVisible"
           :width="width"
           :height="height"
           ref="video"></video>
  </div>
</template>

<script>
const Instascan = require('instascan');

export default {
  name: 'Scanner',
  props: {
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 160,
    },
  },
  data() {
    return {
      isVideoVisible: true,
    };
  },
  methods: {
    initScanner() {
      const scanner = new Instascan.Scanner({ video: this.$refs.video });
      scanner.addListener('scan', (content) => {
        this.$emit('scan', content);
      });
      Instascan.Camera.getCameras()
        .then((cameras) => {
          if (cameras.length > 0) {
            scanner.start(cameras[0]);
          } else {
            // eslint-disable-next-line
            alert(this.$t('scanner.noCamera'));
          }
        })
        .catch(() => {
          this.$emit('error', new Error(this.$t('scanner.failedCamera')));
        });
    },
  },
  mounted() {
    this.initScanner();
  },
};
</script>
