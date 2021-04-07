[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/c-core-labs/docs)

# C-CORE Docs

https://docs.c-core.app

password is `caddyshack`

[![Netlify Status](https://api.netlify.com/api/v1/badges/91181782-5914-4b5c-b0bc-0dff868f1555/deploy-status)](https://app.netlify.com/sites/c-core-docs/deploys)

Deploys from Netlify: https://app.netlify.com/sites/c-core-docs/overview

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
@c-core-labs/docs auto deploys via Netlify when new commits are pushed to the master branch. To deploy your own docs site with GitHub pages, try:

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
