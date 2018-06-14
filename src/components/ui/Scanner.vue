<template>
  <div>
    <h2>Scan your code here:</h2>
    <video v-show="showVideo === true"
           ref="video"
           width="200"
           height="160"
           id="video"></video>
  </div>
</template>

<script>
const Instascan = require('instascan');

export default {
  name: 'Scanner',
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
            // eslint-disable-next-line
            console.error('No cameras found.');
          }
        })
        .catch((e) => {
          // eslint-disable-next-line
          console.error(e);
        });
    },
  },
  mounted() {
    this.initScanner();
  },
};
</script>
