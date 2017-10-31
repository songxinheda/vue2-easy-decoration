import axios from 'axios';

export default function getDiscList() {
  const url = 'http://idc02-pre-decorateapi-vip00//wd/shop/decorate/getCustomShopInfo?param={"adActionId":"","adAdsk":"","adPlatform":"weex","adProductId":"0","adShopId":1197728501,"adUserId":"","adCuid":"","adGuid":"","adVersion":"","adsk":""}';

  return axios.get(url).then(res => Promise.resolve(res.data));
}
