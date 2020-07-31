declare class ah {
  static proxy: ({ onRequest, onError, onResponse }: {
    onRequest?: (config: XHROptions, handler: { next: (config: XHROptions) => void }) => void,
    onError?: (err: Error, handler: { next: (err: Error) => void }) => void,
    onResponse?: (response: { config: XHROptions, response: string }, handler: { next: ({ config, response }: { config: XHROptions, response: string }) => void }) => void
  }) => XMLHttpRequest
  static unProxy: () => void
}
// 设置信息
interface config {
  version: number
  menu: configMenu
}
interface configMenu {
  [index: string]: configMenuData
  noKanBanMusume: configMenuData
  noGuardIcon: configMenuData
  // noHDIcon: configMenuData
  noVIPIcon: configMenuData
  noMedalIcon: configMenuData
  noUserLevelIcon: configMenuData
  noLiveTitleIcon: configMenuData
  noSystemMsg: configMenuData
  noGiftMsg: configMenuData
  noRaffle: configMenuData
  noBBChat: configMenuData
  noBBDanmaku: configMenuData
  invisible: configMenuData
  // fixTreasure: configMenuData
  // replaceDanmaku: configMenuData
  // popularWords: configMenuData
  // beatStorm: configMenuData
  // closeDanmaku: configMenuData
}
interface configMenuData {
  name: string
  enable: boolean
}
// 弹幕格式
interface danmuObject {
  text: string
  info: [
    any[],
    string,
    [
      number,
      string,
      number
    ]
  ]
  cmd: string
  color: number
}
// 特殊礼物消息
interface SPECIAL_GIFT {
  cmd: string
  data: SPECIAL_GIFT_Data
  roomid: number
}
interface SPECIAL_GIFT_Data {
  '39': SPECIAL_GIFT_Data_BeatStorm
}
interface SPECIAL_GIFT_Data_BeatStorm {
  id: string
  num: number
  time: number
  content: string
  hadJoin: number
  action: string
}
interface playerType {
  type: string
}
// 监听聊天窗口
// let chatObserver = new MutationObserver((res) => {
//   for (let y of res) {
//     let chatNodes = y.addedNodes
//     if (chatNodes.length !== 0) {
//       let chatMsg = <HTMLElement>chatNodes[0].firstChild
//       if (chatMsg.className === 'chat-msg') {
//         let danmuColor = 16777215
//         if (chatMsg.querySelector('.master') !== null) {
//           danmuColor = 6737151
//         }
//         else if (chatMsg.querySelector('.admin') !== null) {
//           danmuColor = 16750592
//         }
//         let chatText = (<HTMLElement>chatMsg.lastChild).innerText
//         let danmu = {
//           mode: 1,
//           text: chatText,
//           size: 0.25 * localStorage.getItem('danmuSize'),
//           color: danmuColor,
//           shadow: true
//         }
//         CM.send(danmu)
//       }
//     }
//   }
// })