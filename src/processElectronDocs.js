import {join} from 'path';
import getTemp from './utils/getTemp';
import fetch from './utils/fetch';
import copy from './utils/copy';
import rename from './utils/rename';

async function processElectronDocs(repo, copyTarget, renameTarget) {
  const {path: tempPath, cleanup} = await getTemp();

  try {
    const [{path: targetPath}] = await fetch(repo, tempPath);

    await copy(join(tempPath, targetPath), copyTarget);
    await rename(renameTarget);
  } finally {
    cleanup();
  }
}

export {
  processElectronDocs as default,
};
