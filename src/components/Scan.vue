<template>
  <div>
    <router-link :to="{name: 'Home'}">Go Home</router-link>
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
      this.$router.push({ name: 'Result', query: { data: result } });
    },
  },
};
</script>
