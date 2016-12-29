import del from 'del';

function clean(cleanTarget) {
  return del(cleanTarget);
}

export {
  clean as default,
};
