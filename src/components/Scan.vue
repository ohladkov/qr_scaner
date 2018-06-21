<template>
  <div>
    <Scanner @scan="onScan" @error="onError" />
  </div>
</template>

<script>
import Scanner from '@/components/ui/Scanner';

export default {
  name: 'Scan',
  data() {
    return {
    };
  },
  components: {
    Scanner,
  },
  methods: {
    onScan(result) {
      this.$router.push({ name: 'Result' });
      this.$store.dispatch('qr/setCode', result);
    },
    onError(error) {
      // eslint-disable-next-line
      alert(error);
      throw new Error(error);
    },
  },
};
</script>
