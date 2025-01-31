const footerKey = {
  foundation: 'foundation',
  aboutUs: 'about-us',
  influenceReport: 'influence-report',
  openLab: 'open-lab',
  member: 'member',
  myReading: 'myreading',
  bookmark: 'bookmark',
  history: 'history',
}

export const FOOTER_KEY = Object.freeze(footerKey)

export const FOOTER_PATH = {
  [footerKey.foundation]: '/categories/foundation',
  [footerKey.aboutUs]: '/about-us',
  [footerKey.influenceReport]: '/a/impact-and-annual-report',
  [footerKey.member]: '/account',
  [footerKey.myReading]: '/myreading',
  [footerKey.bookmark]: '/myreading/saved',
  [footerKey.history]: '/myreading/history',
}

export const FOOTER_LABEL = {
  [footerKey.foundation]: '基金會消息',
  [footerKey.aboutUs]: '關於我們',
  [footerKey.influenceReport]: '影響力報告',
  [footerKey.openLab]: '報導者開放實驗室',
  [footerKey.member]: '個人專區',
  [footerKey.myReading]: '我的閱讀',
  [footerKey.bookmark]: '已收藏',
  [footerKey.history]: '造訪紀錄',
}

export const FOOTER_ICON = {
  [footerKey.member]: 'member',
  [footerKey.myReading]: 'kid_star',
  [footerKey.bookmark]: 'bookmark_basic',
  [footerKey.history]: 'history',
}

export const FOOTER_ORDER = [
  footerKey.foundation,
  footerKey.aboutUs,
  footerKey.influenceReport,
  footerKey.openLab,
]

export const MEMBER_ORDER = [
  footerKey.member,
  footerKey.myReading,
  footerKey.bookmark,
  footerKey.history,
]
