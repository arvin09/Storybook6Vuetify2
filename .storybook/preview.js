// .storybook/preview.js now looks like this

import vuetify from './vuetify_storybook';

export const parameters = {};

export const decorators = [
  (Story) => ({
    vuetify,
    template: `
    <v-app>
      <v-main>
        <v-container fluid >
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `,
  }),
];