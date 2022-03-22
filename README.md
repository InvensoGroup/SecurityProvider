# security-provider

> React security component for roles and permissions

[![NPM](https://img.shields.io/npm/v/security-provider.svg)](https://www.npmjs.com/package/security-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save security-provider
```

## Usage

```jsx
import React, { Component } from 'react'

import { SecureComponent, SecurityProvider} from 'security-provider'


class Example extends Component {
  render() {
    return <SecureComponent />
  }
}

Class Example extends Component {
  render() {
    return <SecurityProvider />
  }
}
```

## License

MIT © [Invenso](https://github.com/Invenso)
