pipeline {
    agent {
        docker {
            image 'node:alpine'
        }
    }

    environment {
        EMAIL = 'emilsoleymani.2002@gmail.com'
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your/repo.git'
            }
        }
        
        stage('Build React App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
            
            post {
                failure {
                    mail body: "Failed to build most recent commit of portfolio website for Emil Soleymani. See more at ${env.BUILD_URL}",
                        subject: "Pipeline Failed: Build Portfolio",
                        to: "${env.EMAIL}"
                }
            }
        }
        
        stage('Upload to S3') {
            steps {
                /*
                withAWS(credentials: 'your-aws-credentials') {
                    sh 'aws s3 sync build/ s3://your-s3-bucket'
                }
                */
                echo "Uploaded to S3"
            }
            
            post {
                failure {
                    mail body: "Failed to upload most recent commit of portfolio website to S3 for Emil Soleymani. See more at ${env.BUILD_URL}",
                        subject: "Pipeline Failed: Upload Portfolio to S3",
                        to: "${env.EMAIL}"
                }
            }
        }
    }
}