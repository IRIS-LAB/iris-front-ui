#!groovy

@Library('gie') _

continuousIntegration(
    contextRoot: 'iris-ui-elements',
    builder: 'npm',
    authProvider: 'none',
    skipIntegrationTests: false,
    targetedMiddleware: 'APACHE',
    deployer: 'docker_ee',
    performRelease: true
)
