# SAPage

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

The "Speedout" page is a reusable React component that can be employed in various projects.

## Installation:

```bash
npm i sapage
```

## Usage :

Add `SAPage` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SAPage } from "sapage"
import packageJson from './package.json'
import changeLogs from './changelog.json'
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

```

[Full example](https://github.com/biplobsd/SAPage/tree/main/example)

[npm-url]: https://www.npmjs.com/package/sapage
[npm-image]: https://img.shields.io/npm/v/sapage
[github-license]: https://img.shields.io/github/license/biplobsd/sapage
[github-license-url]: https://github.com/biplobsd/sapage/blob/master/LICENSE
[github-build]: https://github.com/biplobsd/sapage/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/biplobsd/sapage/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/sapage
