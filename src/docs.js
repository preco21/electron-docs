import {join} from 'path';
import getTemp from './utils/getTemp';
import fetch from './utils/fetch';
import copy from './utils/copy';
import rename from './utils/rename';

async function docs(repo, copyTarget, filterTarget) {
  const {path: tempPath, cleanup} = await getTemp();

  try {
    const [{path: targetPath}] = await fetch(repo, tempPath);

    await copy(join(tempPath, targetPath), copyTarget);
    await rename(filterTarget);
  } finally {
    cleanup();
  }
}

export {
  docs as default,
};
