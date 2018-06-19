<template>
  <div>
    <h2>{{ $t('scanner.msg') }}</h2>
    <video v-show="showVideo"
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
      showVideo: true,
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
            this.$emit('throwError', 'No cameras found');
          }
        })
        .catch((e) => {
          this.$emit('throwError', e);
        });
    },
  },
  mounted() {
    this.initScanner();
  },
};
</script>
