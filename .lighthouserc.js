module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      url: ['http://localhost:8080'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
