# ProxmoxCP API Wrapper for TypeScript/JavaScript

This is a fully typed javascript client for the Proxmox Control Panel.

> [!NOTE]  
> This is an API-Wrapper library for the ProxmoxCP, which is a self-developed product. It does NOT offer direct communication via API to Proxmox. Checkout the [ProxmoxCP](https://bennetgallein.de/shop/proxmox_control_panel-34) on my website.

## Getting started
Installation:
```
npm i @bennetgallein/proxmoxcp-api
```

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
