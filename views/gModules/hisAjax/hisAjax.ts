import { setPageSize } from "./fun/ajax"

that.setJqMode('')
that.setAjaxContentType('application/x-www-form-urlencoded')
that.dealAjaxData = GLOBAL$AJAX$.dealAjaxData
that.setPageSize = setPageSize