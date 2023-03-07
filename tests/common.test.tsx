import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { SAPage } from '../src'
import { DevRole } from '../src/app/enums'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
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
            role: DevRole.leadDev,
            url: 'https://github.com/biplobsd',
          },
        ]}
      />
    )
  })
})
