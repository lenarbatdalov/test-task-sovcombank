<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <div class="data-table__container">
      <div class="data-table__header">
        <div
          v-for="column in columns"
          :key="column.label"
          class="data-table__cell"
          :style="{ width: column.width }"
        >
          {{ column.label }}
        </div>
      </div>
      <div
        v-for="row in currentData"
        :key="row.id"
        class="data-table__row"
      >
        <div
          v-for="column in columns"
          :key="column.label"
          class="data-table__cell"
          :style="{ width: column.width }"
        >
          <div class="data-table__cell-title">{{ column.label }}</div>
          <div class="data-table__cell-content">{{ prepareDisplayValue(row[column.prop], column.prop) }}</div>
        </div>
      </div>
      <div
        v-if="filteredData.length === 0"
        class="data-table__row data-table__row-empty"
      >
        Нет данных
      </div>
    </div>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
        @input="setPage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: undefined,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.filteredData.length / this.pageSize);
    },
    currentData() {
      const startNumber = this.pageSize * (this.page - 1);
      const endNumber = (startNumber + this.pageSize) > this.filteredData.length
        ? this.filteredData.length
        : startNumber + this.pageSize;
      return this.filteredData.slice(startNumber, endNumber);
    },
    filteredData() {
      return this.moneyFilter !== undefined && this.moneyFilter >= 0
        ? this.rows.filter((item) => item.money <= this.moneyFilter)
        : this.rows;
    },
  },

  methods: {
    setPage(number) {
      this.page = number;
    },
    prepareDisplayValue(value, prop) {
      switch (prop) {
        case 'money':
          return this.$localNumberFormat(value, true);
        case 'date':
          return this.$localDateFormat(value);
        default:
          return value;
      }
    },
  },
};
</script>
