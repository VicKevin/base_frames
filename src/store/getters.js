const getters = {
  token: state => state.user.token, // 用户token
  userInfo: state => state.user.info, // 用户信息
  cardInfo: state => state.card.extractCard, // 选择提现银行卡的卡片信息
  wxInfo: state => state.home.wxInfo // 公众号信息
}

export default getters
