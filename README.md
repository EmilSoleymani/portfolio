# Emil Soleymani Portfolio

My personal portfolio.
## Design

### Tech Stack

The website is built using React for the front-end. Page content is loaded straight from `Markdown` files into `jsx` using a React plugin.

### Architecture

The website is hosted on a public S3 Bucket. Git and GitHub are used for version control. Jenkins is used for CI/CD by detecting pushes to GitHub, building the React application into a static website, and uploading to the S3 bucket. The Jenkins is run on an EC2 instance.

## Setup

### Setting up S3

### Setting up EC2 instance
- Amazon Linux 2
- Expose port 8080

### Installing Jenkins on EC2
```
sudo yum update

sudo yum install docker

sudo usermod -a -G docker ec2-user
id ec2-user
newgrp docker

sudo yum install python3-pip
sudo pip3 install docker-compose

sudo systemctl enable docker.service
sudo systemctl start docker.service

docker pull jenkins/jenkins:lts-jdk11

cat /var/jenkins_home/secrets/initialAdminPassword

docker run -u root -p 8080:8080 -v jenkins_home:/var/jenkins_home -v $(which docker):/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -d --name jenkins jenkins/jenkins:lts-jdk11
```

Jenkins plugins to install:

* AWS Steps
* Docker
* Docker Pipeline

> Note: assuming you pressed install recommended plugins so Git related plugins are already present