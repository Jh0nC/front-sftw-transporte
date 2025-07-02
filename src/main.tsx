import '@/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Windmill } from '@windmill/react-ui'

import { App } from '@/app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <SidebarProvider> */}
    <Windmill usePreferences>
      <App />
    </Windmill>
    {/* </SidebarProvider> */}
  </React.StrictMode>,
)
