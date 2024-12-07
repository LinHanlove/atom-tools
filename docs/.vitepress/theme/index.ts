import DefaultTheme from 'vitepress/theme'
import { HomeUnderline } from '@theojs/lumen'
import '@theojs/lumen/icon'
import '../../src/public/style/theme.css'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Home', HomeUnderline)
  }
}
