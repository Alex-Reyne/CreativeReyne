<template>
  <v-form ref="form" class="form" @submit.prevent="sendEmail">
    <v-row no-gutters>
      <v-col cols="6">
        <v-row no-gutters>
          <label
            for="form_first"
            class="form__label"
            :class="
              site == 'creators'
                ? 'form__label--creators'
                : 'form__label--standard'
            "
            >First Name:</label
          >
        </v-row>
        <v-row no-gutters>
          <input
            id="form_first"
            name="from_first"
            class="form__text form__text--name mb-4"
            type="text"
            required="required"
            placeholder="Required"
            v-model="form.first"
          />
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row no-gutters>
          <label
            for="form_last"
            class="form__label"
            :class="
              site == 'creators'
                ? 'form__label--creators'
                : 'form__label--standard'
            "
            >Last Name:</label
          >
        </v-row>
        <v-row no-gutters>
          <input
            id="form_last"
            name="from_last"
            class="form__text form__text--name mb-4"
            type="text"
            v-model="form.last"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <label
        for="form_email"
        class="form__label"
        :class="
          site == 'creators' ? 'form__label--creators' : 'form__label--standard'
        "
        >Email:</label
      >
    </v-row>
    <v-row no-gutters>
      <input
        id="form_email"
        name="from_email"
        class="form__text mb-4"
        type="email"
        required="required"
        placeholder="Required"
        v-model="form.email"
      />
    </v-row>
    <v-row no-gutters>
      <label
        for="form_message"
        class="form__label"
        :class="
          site == 'creators' ? 'form__label--creators' : 'form__label--standard'
        "
        >Message:</label
      >
    </v-row>
    <v-row no-gutters>
      <textarea
        id="form_message"
        name="from_message"
        class="form__text form__text--message mb-4"
        required="required"
        placeholder="Required"
        v-model="form.message"
      />
    </v-row>
    <input id="form_site" name="from_site" type="text" :value="site" hidden />
    <v-row no-gutters justify="end" class="ml-4 mr-n2 ml-sm-0 mr-sm-0">
      <v-btn
        :disabled="!formIsValid"
        large
        outlined
        tile
        type="submit"
        class="form__button white--text py-6 ma-4 ma-md-2"
        :class="
          site == 'creators'
            ? 'form__button--creators'
            : 'form__button--standard'
        "
        >SEND MESSAGE</v-btn
      ></v-row
    >
  </v-form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Form",
  props: ["site"],
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      email: "",
      message: ""
    });

    return {
      form: Object.assign({}, defaultForm),
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.email &&
        /.+@.+/.test(this.form.email) &&
        this.form.message
      );
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_9il80s6",
          "template_x0tre6e",
          e.target,
          "user_TizWSfwcrkb0j1KWkJu5c"
        )
        .then(
          result => {
            alert("Message Sent!");
            this.resetForm();
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            alert("There was a problem sending your message, please try again");
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 1000px;

  &__label {
    font-family: $Consolas;
    font-size: 20px;

    &--creators {
      color: $creator-secondary !important;
    }

    &--standard {
      color: $text-black;
    }
  }

  &__text {
    font-family: $Consolas;
    font-size: 20px;
    color: white;
    border-radius: 0;
    border: 4px solid white;
    background: rgba(255, 255, 255, 0.04);
    width: 98%;
    padding: 20px;
    z-index: 1;

    &--name {
      width: 96%;
    }

    &--message {
      height: 156px;
    }
  }

  &__button {
    font-family: $Consolas;
    font-size: 24px;
    width: 200px;

    &--creators {
      border: 4px solid $creator-secondary;

      &[disabled] {
        border: 4px solid rgba(213, 31, 38, 0.5);
        color: rgba(255, 255, 255, 0.5) !important;
      }
    }

    &--standard {
      border: 6px solid $text-white;
      color: $text-black !important;

      &[disabled] {
        border: 4px solid rgba(255, 255, 255, 0.5);
        color: rgba(26, 26, 26, 0.5) !important;
      }
    }

    @media (max-width: $xl) {
      font-size: 16px;
    }

    @media (max-width: $sm) {
      width: 100% !important;
    }

    &[disabled] {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
