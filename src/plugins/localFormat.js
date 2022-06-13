import { localNumberFormat, localDateFormat } from '@/utils';

export default {
  install(Vue) {
    Vue.$localNumberFormat = localNumberFormat;
    Vue.prototype.$localNumberFormat = localNumberFormat;

    Vue.$localDateFormat = localDateFormat;
    Vue.prototype.$localDateFormat = localDateFormat;
  },
};
