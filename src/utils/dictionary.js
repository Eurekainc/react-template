import es from '../../locales/es.json'
import browserStorage from '../helpers/local-storage-wrapper'

export default class Dictionary {
  /**
   * Gets message translation in user language
   * @param {String} messageId - Key of message to translate in en.json
   * @return {String} - String with the translated message
   */
  static t(messageId) {
    const messagesFromCurrentLocale = Dictionary.messagesFromCurrentLocale()

    let value
    try {
      value = messageId.split('.').reduce((a, b) => a[b], messagesFromCurrentLocale)
    } catch (e) {
      return ''
    }
    return value || ''
  }

  static messagesFromCurrentLocale() {
    const translations = {
      es
    }

    return translations[Dictionary.currentLocale()]
  }

  static currentLocale() {
    return browserStorage.get('locale') || 'es'
  }
}
