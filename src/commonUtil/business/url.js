import Class from '../core'
import { getFaceUrl, getImgUrl, dealsUrl, getBaseUrl, getHostUrl, getJsUrl, getTpUrl} from '../public/fun/url'
import { getServiceUrl } from '../reWrite/fun/url'
Class.prototype.dealsUrl = dealsUrl
Class.prototype.getBaseUrl = getBaseUrl
Class.prototype.getHostUrl = getHostUrl
Class.prototype.getJsUrl = getJsUrl
Class.prototype.getTpUrl = getTpUrl
Class.prototype.getServiceUrl = getServiceUrl
Class.prototype.getFaceUrl = getFaceUrl
Class.prototype.getImgUrl = getImgUrl
