import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';
// import colors from 'vuetify/lib/util/colors';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#1FB7BA',
            secondary: '#F08100',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
