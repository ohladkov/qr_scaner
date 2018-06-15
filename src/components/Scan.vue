<template>
  <div>
    <Scanner @scan="onScan" />
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
      this.$router.push('/result');
      this.$store.dispatch('qr/setCode', result);
    },
  },
};
</script>
