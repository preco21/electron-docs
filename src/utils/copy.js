import {join} from 'path';
import pify from 'pify';
import ncp from 'ncp';

const ncpAsync = pify(ncp);

function copy(basePath, target) {
  return Promise.all(target.map(({src, dest}) => ncpAsync(join(basePath, src), dest)));
}

export {
  copy as default,
};
