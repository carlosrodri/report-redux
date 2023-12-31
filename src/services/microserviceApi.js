import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ENDPOINT, TAG_TYPES } from '../config/config'

const baseQuery = fetchBaseQuery({
  baseUrl: API_ENDPOINT,
  extraOptions: { timeout: 30000 },
  prepareHeaders: (headers) => {
    headers.set('content-type', 'application/json')
    headers.set('access-control-allow-origin', '*')
    headers.set('accept', '/')
    const token = 'eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyUGVybWlzc2lvbiI6WyJDUkVBVEVfRVZFTlRfRUxBU1RJQ1NFQVJDSCIsIkNSRUFURV9OT1RJRklDQVRJT05TIiwiQ1JFQVRFX05PVElGSUNBVElPTlNfUFVTSCIsIkNSVURfRU1QTE9ZRUVTIiwiR0VUX0FUVEFDSE1FTlRTIiwiR0VUX0xJU1RfRVNQRUNJRklDIiwiTElTVF9OT1RJRklDQVRJT05fQ09NUEFOWSIsIkxJU1RfTk9USUZJQ0FUSU9OX1VTRVIiLCJMSVNUX1VTRVJTIiwiUkVBRF9SRUNJUElFTlQiLCJVUERBVEVfU1RBUlJFRF9OT1RJRklDQVRJT04iLCJWQUxJREFURV9GSUxFX01BU1NJVkUiLCJXRUJfTElTVF9OT1RJRklDQVRJT04iLCJDUlVEX0JBR1MiLCJNT1ZJTF9MSVNUX05PVElGSUNBVElPTiIsIkdFVF9SRVBPUlRfTk9USUZJQ0FUSU9OIiwiUk9MRV9SRUFEIiwiRklORF9VU0VSUyIsIlVTRVJTX0RPQ1VNRU5UU19OT1RJRklDQVRJT05TIiwiREFTSEJPQVJEIiwiTElTVF9BR1JFRU1FTlRTIiwiUkVBRF9BR1JFRU1FTlQiLCJEQVNIQk9BUkRfTElTVCIsIkNPTlNVTFRfU0VSVklDRVNfQUdSRUVNRU5UIiwiR0VUX1NJR05FUlNfRE9DVU1FTlQiLCJMSVNUX0NPTVBBTllfQ0xJRU5UIiwiTElTVF9DT01QQU5ZX1BST1ZJREVSIiwiUFJFX0NSRUFURV9VU0VSIiwiQ1JFQVRFX1VTRVIiLCJDT05TVUxUX0NPTVBBTllfQ0VSVElGSUNBVEUiLCJQUk9DRVNTX0ZJTEVfTUFTU0lWRSIsIkNSRUFURV9OT1RJRklDQVRJT05TX01BU1NJVkUiLCJXRUJfTElTVF9SRUNJUElFTlRTX01BU1NJVkUiLCJTVEFNUF9ET0NVTUVOVCIsIlNFTkRfTUFTU0lWRV9GSUxFIiwiR0VUX1NQRUNJRklDX0JBRyIsIlJFQ09SRFNfRklMRV9NQVNTSVZFIiwiQ09OU1VMVF9SRVBPUlRfRklMRV9NQVNTSVZFIiwiRFJBRlRTX05PVElGSUNBVElPTlMiLCJDUkVBVEVfRFJBRlRfTk9USUZJQ0FUSU9OIiwiRklORF9EUkFGVF9OT1RJRklDQVRJT04iLCJERUxFVEVfRFJBRlRfTk9USUZJQ0FUSU9OIiwiUkVBRF9EUkFGVCIsIlNFTkRfTUFTU0lWRSIsIkxJU1RfVEFHX1VTRVMiLCJDQU5DRUxfTUFTU0lWRV9GSUxFIiwiQ0hBTkdFX1ZJU0lCSUxJVFlfRklMRSJdLCJyb2xlTmFtZSI6Ik5vdGlmaWNhZG9yIiwicm9sZSI6IjYyYWI2Nzg1NzNiODAwZjNiMmYwYWJlZSIsImlkIjoiNjUwODgyMDE2NzgxNmI1ZGMyNDVmMzNmIiwiZXhwIjoxNjk1MTQ1MjU1LCJjb21wYW55SUQiOnsiZGVsZXRlQXQiOmZhbHNlLCJfaWQiOiI2NTA4ODE0OTY3ODE2YjVkYzI0NWU4YzYiLCJuYW1lIjoiTWluaXN0ZXJpbyBkZSBEZWZlbnNhIiwibml0IjoiODAwMTk3MjY4NC0xIn0sImZpcnN0TmFtZSI6IkRhbmllbGEiLCJsYXN0TmFtZSI6IlF1aXJvZ2EiLCJkb2N1bWVudE51bWJlciI6IjEwMDA2NjYwMDMiLCJjaGFuZ2VQYXNzd29yZCI6ZmFsc2UsImVtYWlsIjoiZGFuaWVsYS5xdWlyb2dhQGdtYWlsLmNvbSIsImlhdCI6MTY5NTE0NDk1NiwiaXNzIjoidXJuOmV4YW1wbGU6aXNzdWVyIiwiYXVkIjoidXJuOmV4YW1wbGU6YXVkaWVuY2UifQ.dQZp-iKc7xmYHRQTKyimH1smkscBFDXb7hQ1h_5VJvcWpHdnTgQVd7xti0XMyOK-0wa1_-BhXwuwYYh8YJ1S0WBOjbUH7DoLNiD7UW7kHgFo_cmygVkVbCvOl6sc8WDXHGIq2UPFue00qCjxBXvRsB-l1ZGJoQaYek_0iexLTKIkXtfEqd_J30OpMr89xxlLjtcpzcZeqGCdrhy8b1-_1bIusrqmztWHIrU3xYNOkaeibqtRujCQnlaRVEfFA6V-IXPan4IjYqJadR8HPJC9hV6H4MjjKRAtw-My7_tKFMH4Zww_mewkN9jW1g3o6AL5xlf2USmmvJLFCtWFOSQbhQ'
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  }
})

export const microserviceApi = createApi({
  reducerPath: 'microserviceApi',
  baseQuery,
  tagTypes: Object.values(TAG_TYPES),
  endpoints: () => ({})
})