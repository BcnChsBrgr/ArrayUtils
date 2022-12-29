pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'step 1 - git pull'
        sh '''ls
pwd'''
        sleep 1
        sh '''curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm --version
nvm install node
nvm use node
nvm install --lts
nvm use --lts
'''
        sh 'npm install -g typescript && npm run build'
      }
    }

  }
}