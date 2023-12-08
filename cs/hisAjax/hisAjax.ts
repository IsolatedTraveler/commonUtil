import { setPageSize } from "./fun/ajax"
import { dealAjaxData } from "./fun/reWrite"

GLOBAL$AJAX$.setJqMode('')
GLOBAL$AJAX$.setAjaxContentType('application/x-www-form-urlencoded')
that.getAjax = GLOBAL$AJAX$.getAjax
that.getAjaxSync = GLOBAL$AJAX$.getAjaxSync
that.commonHttppost = GLOBAL$AJAX$.commonHttppost
that.commonQueryAsyncHttppost_callback = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback
that.upload = GLOBAL$AJAX$.upload
that.dealAjaxData = dealAjaxData
that.setPageSize = setPageSize