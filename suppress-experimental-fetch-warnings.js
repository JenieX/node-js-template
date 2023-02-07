// Suppress Node.js warning about experimental fetch API
// Ref: https://github.com/nodejs/node/issues/30810#issuecomment-1383184769

const originalEmit = process.emit;
process.emit = function callback(event, error) {
  if (
    event === 'warning' &&
    error.name === 'ExperimentalWarning' &&
    error.message.includes('The Fetch API is an experimental feature.')
  ) {
    return false;
  }

  // eslint-disable-next-line prefer-rest-params
  return originalEmit.apply(process, arguments);
};
