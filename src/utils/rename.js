import {rename as _rename} from 'fs';
import pify from 'pify';

const renameAsync = pify(_rename);

function rename(pick) {
  return Promise.all(pick.map(({src, dest}) => renameAsync(src, dest)));
}

export {
  rename as default,
};
