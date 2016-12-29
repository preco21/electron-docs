import 'babel-polyfill';
import clean from './utils/clean';
import copy from './utils/copy';
import processElectronDocs from './processElectronDocs';
import copyConfig from './config/copy';
import renameConfig from './config/rename';
import contentConfig from './config/content';
import sharedConfig from './config/shared';

(async () => {
  try {
    // Clean output directory
    await clean(sharedConfig.cleanTarget);

    // Process Electron docs (currenty only Korean)
    await processElectronDocs(sharedConfig.repo, copyConfig.target, renameConfig.target);

    // Copy extra content
    await copy(process.cwd(), contentConfig.target);
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  }
})();
