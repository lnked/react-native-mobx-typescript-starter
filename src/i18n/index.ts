import RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'

import en from './locales/en'
import ru from './locales/ru'

i18n.locale = RNLocalize.language
i18n.fallbacks = true
i18n.translations = { en, ru }

export default i18n
