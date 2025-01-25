# CI/CD Pipeline Using Jenkins, Kubernetes, Terraform, and ArgoCD

## Description
This project sets up a complete CI/CD pipeline for deploying a Node.js application on Kubernetes. It includes:

- **Build** : Installing npm dependencies and building the application.
- **Code Analysis** : Using SonarQube to assess code quality and Trivy for filesystem vulnerability scanning.
- **Image Build and Push**: Building the Docker image and pushing it to Docker Hub.
- **Security Scan** : Scanning the Docker image on Docker Hub using Trivy.
- **Deployment** : Automating deployment to a Kubernetes (EKS) cluster using ArgoCD and GitOps.

## Architecture
![Diagramme](Project-image.png)

## Prérequis
- Terraform
- AWS CLI
- Jenkins
- Git
- Docker & Docker Compose
- SonarQube
- Helm
- ArgoCD


## Pipeline Overview:
- **1. Infrastructure Creation:**

* Use Terraform to create EC2 instances for Jenkins, Docker, and SonarQube.
- **2. Jenkins Configuration:**

Install and configure Jenkins.
Set up SonarQube and integrate it with Jenkins.
- **3. CI Pipeline:**

Create a Jenkinsfile to define the CI process.
Perform the following steps in the CI job:
Trigger SonarQube for code analysis.
Install npm dependencies.
Use Trivy to scan the filesystem for vulnerabilities.
Build and push the Docker image to Docker Hub.
Scan the Docker image on Docker Hub using Trivy.
- **4. Triggering the CD Job:**

Once the CI job is completed, trigger the CD job remotely.
- **5. CD Pipeline:**

Push the Docker image to a GitOps repository.
Use GitOps to trigger ArgoCD.
ArgoCD deploys the application on the Kubernetes (EKS) cluster.
- **6. Cluster Configuration:**

Create an AWS EKS cluster.
Install Prometheus and Grafana using Helm for monitoring the Kubernetes cluster.
- **7. ArgoCD Setup:**

Install ArgoCD on the EKS cluster.
Add the AWS EKS cluster to ArgoCD.
Configure ArgoCD to deploy Pods on the EKS cluster.
Automate ArgoCD deployment using a GitOps GitHub repository.
- **8. Trigger Mechanism:**

Set up GitHub webhooks to trigger the CI/CD pipeline.
Verify the entire pipeline workflow.

