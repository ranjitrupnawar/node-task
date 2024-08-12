pipeline {
    agent any

    environment {
        APP_NAME = 'Nodejs'
        SOURCE_CODE_URL = 'https://github.com/ranjitrupnawar/node-webhook.git'
        BRANCH_NAME = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', 
                    userRemoteConfigs: [[url: "${env.SOURCE_CODE_URL}"]],
                    branches: [[name: "*/${env.BRANCH_NAME}"]]
                ])
                echo "Checked out branch: ${env.BRANCH_NAME}"
            }
        }

        stage('Build') {
            steps {
                script {
                    sh '''
                    #!/bin/bash
                    echo "Running build..."
                    npm install
                    npm run build
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Run deployment using bash shell
                    sh '''
                    #!/bin/bash
                    echo "Running deployment..."
                    npx tsc
                    sleep 30
                    pm2 start dist/server.js --name ${APP_NAME}
                    pm2 save
                    '''
                }
            }
        }
    }
}
