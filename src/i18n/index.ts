import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import memoize from 'lodash.memoize';
import i18n from 'i18n-js';

const translationGetters: any = {
  en: () => require('./translations/en.json'),
  ru: () => require('./translations/ru.json'),
};

const translate = memoize(
  (key: string, config: any) => i18n.t(key, config),
  (key: string, config: any) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache && translate.cache.clear && translate.cache.clear();

  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag; // RNLocalize.language;

  i18n.fallbacks = true;
};

export default i18n;
