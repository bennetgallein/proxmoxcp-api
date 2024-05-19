# ProxmoxCP API Wrapper for TypeScript/JavaScript

This is a fully typed javascript client for the Proxmox Control Panel.

## Getting started
Create a new instance:

```js
// init base
const instance = new ProxmoxCpApi(
  "http://localhost:8888"
);

// get instance for working with packages
const packages = instance.packages();

// list all packages
const allPackages = packages.list();
```
