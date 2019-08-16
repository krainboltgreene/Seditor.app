module.exports = {
  setupTestFrameworkScriptFile: ".jest/setup.js",
  snapshotSerializers: ["jest-emotion"],
  collectCoverage: true,
  collectCoverageFrom: [
    "./source/**/index.js"
  ]
}
