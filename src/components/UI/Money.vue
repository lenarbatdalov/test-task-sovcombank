<template>
  <div class="ui-money__container">
    <input
        type="text"
        ref="input"
        class="ui-money__input"
        v-model="valueInput"
        @input="handleInput"
    />
    <span
      v-if="valueInput.length > 0"
      class="ui-money__clear"
      @click="handleClearInput"
    >&#215;</span>
  </div>
</template>

<script>
import { localNumberFormat } from '@/utils';

export default {
  name: 'UiMoney',

  props: {
    value: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      valueInput: '',
    };
  },

  mounted() {
    this.$refs.input.focus();
  },

  methods: {
    handleInput(event) {
      let { value } = event.target;
      if (value[0] === '.' || value[0] === ',') {
        value = value.slice(1);
      }
      value = value
        .replace(/\s/g, '')
        .replace(/,/g, '.')
        .replace(/[^.\d]/g, '')
        .replace(/^([^\.]*\.)|\./g,'$1'); // eslint-disable-line
      if (value.length > 0) {
        if (value[value.length - 1] === '.') {
          this.valueInput = `${localNumberFormat(value, true)}.`;
        } else {
          this.valueInput = localNumberFormat(value, true);
        }
        this.$emit('input', Number(this.valueInput.replace(/\s+/g, '')));
        return this.$emit('input', Number(this.valueInput.replace(/\s+/g, '')));
      }
      this.valueInput = '';

      return this.$emit('input', undefined);
    },
    handleClearInput() {
      this.valueInput = '';
      this.$refs.input.focus();

      return this.$emit('input', undefined);
    },
  },
};
</script>
