// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { HomeUnderline } from '@theojs/lumen'
import '@theojs/lumen/icon'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Home', HomeUnderline)
  }
}
