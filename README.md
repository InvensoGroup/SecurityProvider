# 🛡️ @invenso/security-provider

A lightweight React library for managing role- and permission-based access control (RBAC) in your React applications.

It provides two key components:
* SecurityProvider — sets up the security context with available permissions and roles.
* SecureComponent — conditionally renders children based on the user’s permissions or roles.

<br />

[![NPM](https://img.shields.io/npm/v/@invenso/security-provider.svg)](https://www.npmjs.com/package/@invenso/security-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## 📦 Installation

```bash
npm install @invenso/security-provider
# or
yarn add @invenso/security-provider
```

## ⚙️ Basic Usage

```tsx
import React, { Component } from 'react'
import { SecureComponent, SecurityProvider } from '@invenso/security-provider'

const permissions = ['CREATE_USER', 'DELETE_USER']
const roles = ['ROLE_USER', 'ROLE_ADMIN']

class App extends Component {
  render() {
    return (
      <SecurityProvider permissions={permissions} roles={roles}>
        <Example />
        <ExampleForRole />
      </SecurityProvider>
    )
  }
}

class Example extends Component {
  render() {
    return (
      <SecureComponent permissions={['CREATE_USER']}>
        This is only visible when the user has permission <b>'CREATE_USER'</b>.
      </SecureComponent>
    )
  }
}

class ExampleForRole extends Component {
  render() {
    return (
      <SecureComponent roles={['ROLE_ADMIN']}>
        This is only visible when the user has role <b>'ROLE_ADMIN'</b>.
      </SecureComponent>
    )
  }
}

export default App
```

## License

MIT © [Invenso](https://github.com/Invenso)
