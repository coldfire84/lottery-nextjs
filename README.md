# Hardhat Lottery UI

A simple UI, built on NextJS, React, Typescript, Wagmi, Viem, Tanstack Query, DaisyUI, and Tailwind.

Supports EVM-compatible networks, and MetaMask wallet integration.

Can operate as as a truly decentralised app (via Fleek.co/ similar decentralised storage) or, as a more traditionally hosted site (e.g. NextJS on AWS, Azure).

# Setup

## Update Contract ABI/ Addresses

Update `/src/constants/abi.ts` and `/src/constants/contract-deployments.json` with relevant network Lottery contract ABIs and addresses.

Contract should share the same ABI, but can be deployed to different networks hardhat, sepolia, mainnet etc.

## Deploy Static Site

> Fleek.co can be used to automate deployment of the static site to IPFS (including content pinning), using Git hooks.

Export the static site via:

```
yarn build
```

You can preview the static site using LiveServer (or 'serve'/ alternative local server). 

If using LiverServer, ensure you have the extension installed in VSCode, and the VSCode configured as below in the project `/.vscode/settings.json`:
```
{
    "liveServer.settings.port": 5501,
    "liveServer.settings.root": "/out"
}
```