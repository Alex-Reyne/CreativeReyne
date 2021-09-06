<template>
  <v-footer
    padless
    class="footer pt-3"
    :class="site == 'creators' ? 'footer__creators' : 'footer__standard'"
  >
    <v-col class="text-center" cols="12">
      <Socials :site="site" />
      <v-card-text :class="site == 'creators' ? 'white--text' : 'black--text'">
        {{ new Date().getFullYear() }} —
        <strong
          >Design: Creative Reyne | Development:
          <a
            :class="
              site == 'creators'
                ? 'footer__creators--link'
                : 'footer__standard--link'
            "
            href="https://www.carmengoetz.ca"
            target="_blank"
            >Carmen Goetz</a
          ></strong
        >
      </v-card-text>
    </v-col>
  </v-footer>
</template>

<script>
import Socials from "./Socials.vue";

export default {
  name: "Footer",
  props: ["site"],
  components: {
    Socials
  }
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.footer {
  &__creators {
    background-color: $creator-primary !important;
    &--link {
      color: white;
    }
  }

  &__standard {
    background-color: white !important;
    &--link {
      color: black;
    }
  }
}
</style>
