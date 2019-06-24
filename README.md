# GTJLCARS

## Project setup
```
git clone git@github.com:Xiphoseer/htmlcars.git
git clone git@github.com:Xiphoseer/gtjlcars.git
cd gtjlcars
yarn install
```

INFO: While I figure out how to properly turn htmlcars into a library, the package.json requires it at `../htmlcars`

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

#### Publish Build to GH pages
```
git push origin (git subtree split --prefix dist gh-pages):gh-pages --force
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
