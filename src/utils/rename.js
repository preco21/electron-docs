import {rename as _rename} from 'fs';
import pify from 'pify';

const renameAsync = pify(_rename);

function rename(pick) {
  return Promise.all(pick.map(({target, replace}) => renameAsync(target, replace)));
}

export {
  rename as default,
};
