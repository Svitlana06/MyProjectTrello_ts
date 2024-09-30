pipeline {
    agent {
        docker {
            image 'selenium/standalone-chrome'
            args '-p 5900:5900 -v /c/ProgramData/Jenkins/.jenkins/workspace/test12:/test'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Svitlana06/MyProjectTrello.git', branch: 'my-branch'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run UI Tests') {
            steps {
                bat 'npm run test:cucumber'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
