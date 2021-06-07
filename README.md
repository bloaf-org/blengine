# blengine

## Installation

```bash
npm install blengine
```

## Usage

### Inside of a React application

All that is needed to quickly bootstrap a single page React/THREE.js app with blengine is to import the `<AppContainer />` component:
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from "blengine";

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
```
