import React from 'react'
import ReactDOM from 'react-dom/client'
import { SAPage } from 'sapage'
import packageJson from '../package.json'
import changeLogs from '../changelog.json'
import 'sapage/dist/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <SAPage
      app={{
        title: 'Test App',
        codeName: packageJson.name,
        logo: {
          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg',
          alt: 'Npm log',
        },
        version: packageJson.version,
      }}
      devCompany={{
        name: 'Test company',
        url: 'https://test-company.com',
        year: 2023,
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
      poweredBy={{
        companyName: 'Test powered by company',
        url: 'https://test-powered-by-company.com',
      }}
      changeLogs={changeLogs}
    />
  </React.StrictMode>,
)
