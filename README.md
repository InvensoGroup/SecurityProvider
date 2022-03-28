# @invenso/security-provider

> React security component for roles and permissions

[![NPM](https://img.shields.io/npm/v/@invenso/security-provider.svg)](https://www.npmjs.com/package/@invenso/security-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @invenso/security-provider
```

## Usage

```tsx
import React, { Component } from 'react'

import { SecureComponent, SecurityProvider} from '@invenso/security-provider'

class Example extends Component {
  render() {
    return <SecurityProvider permissions={permissions} roles={roles} />
  }
}

class Example extends Component {
  render() {
    return <SecureComponent permissions={['CREATE_USER']} />
  }
}
```

## License

MIT © [Invenso](https://github.com/Invenso)
