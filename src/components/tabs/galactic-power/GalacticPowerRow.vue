<script>
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";

export default {
  name: "GalacticPowerRow",
  components: {
    DescriptionDisplay,
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
    reward() {
      const reward = this.config.effect;
      return typeof reward === "function" ? reward() : reward;
    },
    title() {
      return `Galactic Power ${this.config.id}`;
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
    <DescriptionDisplay
      :config="reward"
      title="title"
    />
    <EffectDisplay
      :config="reward"
    />
  </div>
</template>

<style scoped>

</style>
