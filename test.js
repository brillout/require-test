import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vikeReactDir = path.join(__dirname, "packages/vike-react/");
const uselessCwd = '/'

try {
  logSep()
  console.log(`createRequire('${uselessCwd}')`, {
    paths: vikeReactDir,
  });
  const require_ = createRequire(__dirname);
  const resolved = require_.resolve("vike-react/feature", {
    paths: [vikeReactDir],
  });

  console.log(resolved);
} catch (error) {
  console.log(error);
}

try {
  logSep()
  console.log(`createRequire('${vikeReactDir}')`, {
    paths: uselessCwd,
  });
  const require_ = createRequire(vikeReactDir);
  const resolved = require_.resolve("vike-react/feature", {
    paths: [uselessCwd],
  });

  console.log(resolved);
} catch (error) {
  console.log(error);
}

logSep()

function logSep() {
  console.log()
  console.log('=====')
  console.log()
}
