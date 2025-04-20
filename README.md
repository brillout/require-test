Showcase that the following isn't equivalent:
1. `createRequire(cwd); require.resolve(importPath, { paths: ['/'] })`
2. `createRequire('/'); require.resolve(importPath, { paths: [cwd] })`

Run `$ node ./test.js` to see the difference.

## Theory


> My theory is it was introduced along with `package.json#exports`  
> Maybe to enable packages to self reference  
> So it's just a little "feature"  
