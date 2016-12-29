import pify from 'pify';
import {dir} from 'tmp';

const dirAsync = pify(dir, {multiArgs: true});

async function getTemp() {
  const [path, cleanup] = await dirAsync({unsafeCleanup: true});
  
  return {
    path,
    cleanup,
  };
}

export {
  getTemp as default,
};
