<script>
import EffectDisplay from "@/components/EffectDisplay";

export default {
  name: "GalacticPowerRow",
  components: {
    EffectDisplay
  },
  props: {
    getPower: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isUnlocked: false
    };
  },
  computed: {
    power() {
      return this.getPower();
    },
    config() {
      return this.power.config;
    },
    description() {
      return this.config.reward;
    },
    reward() {
      const reward = this.config.effect;
      return typeof reward === "function" ? reward() : reward;
    },
    title() {
      return `Galactic Power ${this.config.id}:`;
    }
  },
  methods: {
    update() {
      this.isUnlocked = this.power.isUnlocked;
    }
  }
};
</script>

<template>
  <div v-show="isUnlocked">
    {{ title }} {{ description }}.
    <br>
    <EffectDisplay
      :config="config"
    />
  </div>
</template>

<style scoped>

</style>
