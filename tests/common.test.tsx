import * as React from 'react'
import { render } from '@testing-library/react'
// @ts-ignore
import packageJson from '../package.json'
// @ts-ignore
import changeLogs from '../changelog.json'
import 'jest-canvas-mock'

import { SAPage } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <SAPage
        app={{
          title: packageJson.title,
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
      />,
    )
  })
})
