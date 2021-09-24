pipeline {
  agent any

  tools { 
    nodejs "latest"
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