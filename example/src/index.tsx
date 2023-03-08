import React from 'react'
import ReactDOM from 'react-dom/client'
import { SAPage } from 'sapage'
import 'sapage/dist/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <SAPage
      app={{
        name: 'Test',
        url: 'https://test.com',
      }}
      devCompany={{
        name: 'Test company',
        url: 'https://test-company.com',
        year: 2023,
      }}
      mainImg={{
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg',
        alt: 'Npm log',
      }}
      reportUrl='https://github.com/biplobsd/SAPage/issues'
      devs={[
        {
          name: 'Biplob Kumar Sutradhar',
          imgUrl: 'https://avatars.githubusercontent.com/u/43641536',
          role: 'Developer',
          url: 'https://github.com/biplobsd',
        },
      ]}
    />
  </React.StrictMode>,
)
