import 'babel-polyfill';
import clean from './clean';
import docs from './docs';
import filterConfig from './config/filter';
import copyConfig from './config/copy';
import sharedConfig from './config/shared';

(async () => {
  try {
    await clean();
    await docs(sharedConfig.repo, copyConfig.target, filterConfig.target);
  } catch (err) {
    console.error(err);
  }
})();
