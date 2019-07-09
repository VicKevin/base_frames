import Vue from 'vue'

import {
  LocaleProvider,
  Notification,
  Layout,
  Icon,
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Col,
  Row,
  message,
  Modal,
  Radio,
  Table,
  Spin,
  Checkbox,
  Carousel,
  Upload,
  Cascader
} from 'ant-design-vue'

Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm

Vue.use(LocaleProvider)
Vue.use(Notification)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(InputNumber)
Vue.use(Col)
Vue.use(Row)
Vue.use(Modal)
Vue.use(Radio)
Vue.use(Table)
Vue.use(Spin)
Vue.use(Checkbox)
Vue.use(Carousel)
Vue.use(Upload)
Vue.use(Cascader)
