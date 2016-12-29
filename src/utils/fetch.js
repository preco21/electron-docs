import download from 'download';

function fetch(url, targetDir) {
  return download(url, targetDir, {extract: true});
}

export {
  fetch as default,
};
