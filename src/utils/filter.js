import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('money', function (value) {
  if (!value) {
    return '0.00'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat + '.00'
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// 银行卡号过滤, 隐藏中间部分数字
Vue.filter('hid_num', function(value){
  value = value.toString();
  return value.substring(0,6) + '******' + value.substring(11)
})

// 银行卡号过滤, 显示尾部四个数字
Vue.filter('show_num', function(value){
  if(!value){
    return '请选择银行卡'
  }
  value = value.toString();
  return value.substring(15)
})