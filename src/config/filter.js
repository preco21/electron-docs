const filter = {
  target: [
    {
      target: 'out/README.md',
      replace: 'out/SUMMARY.md',
    },
    {
      target: 'README.md',
      replace: 'out/README.md',
    },
  ],
};

export {
  filter as default,
};
