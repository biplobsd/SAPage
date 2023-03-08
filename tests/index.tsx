
import { SAPage } from '../src/index'
//@ts-ignore
import packageJson from '../package.json'
//@ts-ignore
import changeLogs from '../changelog.json'
import '../dist/index.css'
//@ts-ignore
import ReactDOM from 'react-dom/client'
//@ts-ignore
import React from 'react'

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
