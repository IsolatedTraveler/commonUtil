export function getJyjl() {
  return Promise.resolve([].map(() => {
    return {
      test_inspect_id: '',
      app_department_id: '',
      app_date: '',
      report_id: '',
      report_department_id: '',
      report_date: '',
      check_date: '',
      test_inspect_name: '',
      test_inspect_code: '',
      result_value: '',
      unit: ''
    }
  }))
}