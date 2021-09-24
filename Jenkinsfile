pipeline {
  agent any

  tools { 
    nodejs 'Nodejs_14'
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm --version'
        sh 'npm install'
      }
    }
  }

}