# Kubernetes 
popular container orchestrator. It runs on top of docker as a set of APIs in containers
Container orchestrator - make many servers act like one. Kubernetes becomes the operating system for your cluster.

## The Problem Kubernetes Solves
Imagine you have:
- 50 microservices
- Multiple environments (dev, staging, prod)
- Several servers
- High availability requirements
- Automatic recovery from failures
- Rolling deployments

With Docker alone, you must manage:
- Which server runs which container
- Restarting failed containers
- Scaling up/down
- Service discovery
- Networking
- Load balancing
- Deployments and rollbacks

## The Mental Model
Think of Kubernetes as:
```text
Kubernetes Cluster
│
├── Control Plane (The Brain)
│   │
│   ├── API Server / kube-apiserver (The communication hub & API entry point)
│   ├── Scheduler  / kube-scheduler (Assigns pods to healthy worker nodes)
|   ├── etcd (The cluster's source-of-truth database)
│   └── Controller Manager / kube-controller-manager (Runs background control loops)
│       ├── Node Controller (Monitors node health)
|       ├── Job Controller (Runs one-off tasks)
|       ├── EndpointSlice Controller (Links Services to Pods)
|       └── ServiceAccount Controller (Creates default accounts)
│
├── Nodes (The Workers)
│   │
│   ├── kubelet (The node agent that talks to the Control Plane)
|   ├── kube-proxy (Manages network rules and traffic routing)
|   └── 📦 Container Runtime Layer (The CRI Middlemen)
|       ├── containerd (OR) CRI-O
|       │   └── 🛠️ Low-Level OCI Runtime (The OS Process Creator)
|       │       └── runc (OR) crun
|       │           └── 🌐 Isolated Linux Namespaces / Cgroups (The actual Container)
|       └── 🗂️ Pods (The smallest deployable units containing the containers)
|              ├── ConfigMap
|              ├── Secret
|              ├── PVC
|              ├── Probes
|              └── Resource Requests/Limits           
│
├── Workloads
│   │
│   ├── Pod
│   │   └── Containers
│   │
│   ├── ReplicaSet
│   │   └── Manages Pods
│   │
│   ├── Deployment
│   │   └── Manages ReplicaSets
│   │
│   ├── StatefulSet
│   ├── DaemonSet
│   ├── Job
│   └── CronJob
│
├── Networking
|   ├── CNI (Container Network Interface) <-- BASE LAYER (Pod-to-Pod & Pod-to-Node)
│   │   ├── Calico, Cilium, Flannel, weavenet, etc.
│   │
│   ├── Service
│   │   ├── ClusterIP
│   │   ├── NodePort
│   │   └── LoadBalancer
│   │
│   ├── Ingress
│   │   └── Ingress Controller
│   │
│   ├── Gateway API
│   └── Network Policies
│
├── Configuration
│   │
│   ├── ConfigMap
│   └── Secret
│
├── Storage
│   │
│   ├── PersistentVolume (PV)
│   ├── PersistentVolumeClaim (PVC)
│   └── StorageClass
│
├── Scaling & Health
│   │
│   ├── Readiness Probe
│   ├── Liveness Probe
│   ├── Startup Probe
│   ├── Horizontal Pod Autoscaler (HPA)
│   └── Vertical Pod Autoscaler (VPA)
│
├── Security
│   │
│   ├── Namespace
│   ├── Service Account
│   ├── RBAC
│   │   ├── Role
│   │   ├── ClusterRole
│   │   ├── RoleBinding
│   │   └── ClusterRoleBinding
│   │
│   └── Network Policies
│
└── Extensions
    │
    ├── Custom Resource Definitions (CRDs)
    └── Operators
```
But Kubernetes doesn't manage containers directly.
It manages Pods.

# Control Plane / Master Node 
The control plane is the "brain" of Kubernetes.
- responsible for maintaining the desired state for your cluster
- kubectl - command-line interface, you're communicating with your cluster's Kubernetes master
- refers to a collection of processes managing the cluster state
- master can also be replicated for availability and redundancy
- Components: You rarely interact with these directly.
    - API Server - Rest operation and front end where user interact
    - Controller Management - Application Controller, endpoint Controller and namespace Controller
        - Namespce: Filtered group of objects in cluster
        - Controller: For creatin/updating pods and other objects
            - Many types of Controllers inc. Deployment, replicaSet, statefulset, daemonset, job, cronjob, etc. 
    - Scheduler - Policy and Topology aware and schedule containers 
    - Etcd
        - etcd is a consistent and highly-available key value store used as Kubernetes' backing store for all cluster data. It stores configuration data
    - Cloud Controller 
    - Core DNS
    - Addons - extends functionality of master node
- $ kubectl create -f pod.yaml

# Nodes
A Node is a machine running Kubernetes workloads. A single server in the kubernetes cluster
Can be:
- VM
- Physical server
- Cloud instance
Example:
```text
Node 1
├── Pod A
├── Pod B
└── Pod C
```
Kubernetes decides where pods run. You usually don't.
## Worker node
- Kubelet - kubernetes agent running on node. It is also a primary node communicates with master api server, creates Pods, reports status of each pods to api server
- Kube-proxy - communicates with master api server and network proxy on each node, filtering and traffic redirection using ip tables
- Pod - one or more containers running together on one node; Basic unit of deployment. Containers are always in pods   
- Service: network endpoint to connect to a pod 
- Addons - extends functionality of workers
- Data Plane
    - Run containers and applications
    - Rare user interaction
```text
┌────────────────────────────────────────────────────────┐
│                      WORKER NODE                       │
│                                                        │
│   ┌────────────────────────────────────────────────┐   │
│   │                   Data Plane                   │   │
│   │                                                │   │
│   │  ┌───────────┐  ┌───────────┐  ┌────────────┐  │   │
│   │  │   Pod A   │  │   Pod B   │  │ kube-proxy │  │   │
│   │  └─────┬─────┘  └─────┬─────┘  └─────┬──────┘  │   │
│   │        │              │              │         │   │
│   │  ┌─────┴──────────────┴──────────────┴──────┐  │   │
│   │  │        CNI Network / Linux Kernel        │  │   │
│   │  └────────────────────┬─────────────────────┘  │   │
│   └───────────────────────┼────────────────────────┘   │
│                           │                            │
│                  ┌────────┴────────┐                   │
│                  │     Kubelet     │ (Control Plane    │
│                  └─────────────────┘  Agent)           │
└────────────────────────────────────────────────────────┘

```


# Pods
Pods are the smallest deployable units in Kubernetes. A pod consists of one or more Docker containers that
together perform a single task.
```text
Pod
├── Container A
└── Container B (optional)
```
Most pods contain a single container.
Example:
```yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx
```
## Why Pods exist:
- Shared networking
- Shared storage
- Lifecycle management

Every Pod gets:
- One IP address
- One hostname
- Shared localhost

Inside a pod:
```text
Container A --> localhost:8080
Container B --> localhost:8081
```


# Cluster
A Cluster is a collection of nodes.
```text
Cluster
├── Node 1
├── Node 2
└── Node 3
```
The cluster is the thing Kubernetes manages.



### API Server
Everything goes through the API Server. Rest operation and front end where user interact
When you run:
```bash
kubectl apply -f app.yaml
```
You are talking to:
```text
kubectl
    ↓
API Server
```
The API server stores desired state.

### etcd
Kubernetes database.
Stores:
- Deployments
- Pods
- Services
- Secrets
- ConfigMaps
Think:
```text
etcd = source of truth
```
### Scheduler
Decides: Which node should run this pod?
Example:
```text
Pod needs:
- 2 CPUs
- 4 GB RAM
Scheduler finds:
Node 3
```
and places it there.

### Controllers
Continuously ensure reality matches desired state.
You say:
```yml
replicas: 3
```
Controller sees:
```text
Desired = 3
Actual = 2
```
Creates another pod.
This reconciliation loop is a core Kubernetes concept.
#### Desired State
This is arguably the biggest conceptual shift.
- You don't tell Kubernetes: Start container now
- You tell Kubernetes: I want 3 replicas running forever
Kubernetes constantly works to make reality match that declaration.

#### Deployment
Usually you create Deployments, not Pods directly.
Deployment manages:
- Pods
- Scaling
- Rolling updates
- Rollbacks

Think: 
```text
Deployment
    ↓
ReplicaSet
    ↓
Pods
```
Deployment Example
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
```

#### ReplicaSet
Ensures a certain number of Pods exist.
Example:
```text
Desired = 3
Pod dies
ReplicaSet creates replacement
```
Usually hidden behind Deployments.

# Service
Pods are ephemeral. You can't depend on pod IPs. A Service provides a stable endpoint. 
- Today: Pod IP = 10.0.1.4
- Tomorrow: Pod IP = 10.0.1.9
```text
Client
   ↓
Service
   ↓
Pods
```
Example:
```yml
kind: Service
```
Think: Kubernetes Service ≈ Load Balancer + DNS

## Service Discovery
Every service gets DNS.
- Example: user-service.default.svc.cluster.local
Most applications simply use: http://user-service
No hardcoded IPs.

# Ingress
Services expose traffic inside the cluster. Ingress exposes traffic from outside.
```text
Internet
    ↓
Ingress
    ↓
Service
    ↓
Pods
```
Example:
```text
app.company.com → web-service
api.company.com → api-service
```
Ingress is effectively HTTP routing for the cluster.

Modern Kubernetes often uses:
- NGINX Ingress
- Traefik
- HAProxy
- Gateway API (newer model)

# ConfigMap
Externalized configuration.
Instead of: `ENV DATABASE_URL=...`
Store config separately.
```yml
kind: ConfigMap
```
Inject into pods as:
- Environment variables
- Files

# Secret
Like ConfigMap but intended for sensitive data.
Examples:
- API keys
- Passwords
- Certificates
```yml
kind: Secret
```
Kubernetes Secrets are not encrypted by default in all configurations; they are primarily an API object for handling sensitive data. Production clusters typically add encryption at rest and external secret management.

# Persistent Volumes
Containers are disposable.
If a pod dies: `Filesystem disappears`
Persistent storage solves that.
Objects:
```text
PersistentVolume (PV)
PersistentVolumeClaim (PVC)
```
Think:
```text
Pod
  ↓
PVC
  ↓
Storage
```

Examples:
- EBS
- Azure Disk
- GCE Persistent Disk
- NFS
- Ceph

# Namespaces 
Virtual clusters inside one cluster.
Example:
- default
- dev
- staging
- prod
- monitoring
Resources are isolated logically.
- dev/web
- prod/web
can both exist.

# Requests and Limits
Critical production concept.
Example:
```yml
resources:
  requests:
    cpu: "500m"
    memory: "512Mi"

  limits:
    cpu: "1"
    memory: "1Gi"
```
Requests: What the scheduler reserves.
Limits: Maximum allowed.
Without these, clusters become unstable.

# Liveness and Readiness Probes
Kubernetes needs to know if your app is healthy.
Readiness: Can this pod receive traffic?
Liveness: Should this pod be restarted?
Example: `readinessProbe:`
Without probes, Kubernetes is mostly guessing.

# Horizontal Pod Autoscaler (HPA)
Automatically scales pods.
CPU > 70%
Scale: `3 → 10 replicas`
Then scale back down.

# What Actually Happens During a Deployment?
You run: `kubectl apply -f deployment.yaml`
Flow:
```text
kubectl
   ↓
API Server
   ↓
Deployment created
   ↓
ReplicaSet created
   ↓
Pods created
   ↓
Scheduler assigns nodes
   ↓
Kubelet starts containers
   ↓
Service routes traffic
```

# Kubernets in a browser
- https://playwith-k8s.com, katakoda.com 
Docker dashboard - includes kubernetes
Toolbox - minikube 
Linux - microk8s 

# Running First pod 
- $ `kubectl version`
- Two ways to deploy pods 
    - Via Command
        - $ `kubectl run <deploymentname> --image=<imagename>`  //Deploys a pod ,  create a pod, and a replica set (So, you can scale (duplicate) the pod)
        - $ `kubectl get pods` //list the pods
        - $ `kubectl get all` // list all the objects 
        - $ `kubectl delete deployment <deploymentname>` - deletes the pods a the replica sets of the that deployment 
        - $ `kubectl scale deploy/<deploymentname>` --replicas 2 // scaling replica 
            - $ `kubectl scale deployment <deploymentname>` --replicas 2 //another way of writing scaling replica 
            - The control Plane
                - Just Deployed 2 replicas
                - Replicasets controller sets pod count to 2
                - controle plane assigns node to pod
                - kubelet sees pod is need starts container 
        - Inspecting kubernetes objects
            - $ `kubectl get pods`
            - $ `kubectl logs deployment/<deploymentname>` // you'll see your deployment log 
                - $ `kubectl logs deployment/<deploymentname>`  --follow --tail 1
            - $ `kubectl logs - l run=<deploymentname>` // specify which label of log to check 
            - $ `kubectl describe pod/<exactpodname>` // to check the status of the pod
            - $ `kubectl get pods -w` // so, you can watch the pods in a separate terminal 
                - $ `kubectl describe pod/<exactpodname>` //This is run in a separate terminal and you see the -w commands deleting the pods 
            - $ `kubectl delete deployment/<deploymentname>`  //To delete the deployment      

    - YAML 
        - `kubectl create` (create some resources via CLI or YAML)
        - `Kubectl apply` (create/update anything via YAML): Good for learning and simple deployments.
            - `kubectl apply -f drupal-stack.yaml`
                ```text
                Drupal Deployment
                Drupal Service
                MariaDB Deployment
                MariaDB Service
                Database Secret
                Drupal files PVC
                MariaDB PVC
                ```
        - Using Kustomize: Good when dev/staging/prod are mostly the same.
            - `kubectl apply -k k8s/overlays/dev`
            - `kubectl apply -k k8s/overlays/prod`
        - Using Helm: Good when you want reusable, configurable application packaging.
            - Install: `helm install my-drupal ./drupal-chart`
            - Upgrade later: `helm upgrade my-drupal ./drupal-chart`

# Exposing Kubernetes Ports
- $ `kubectl expose` // creates a Service for existing pods
    - a service is a stable address for pod(s)
    - if we want to connect to pod(s), we need a service 
    - CoreDNS allows us to resolve services by name 
    - There are different types of services
        - ClusterIP (default) 
            - Single, internal vitrual IP allocated
            - Only reachable from within clustr(nodes, and pods)
            - pods can reach service on apps port number
            - $ `kubectl get pods -w` // so, you can watch the pods in a separate terminal 
            - $ `kubectl run httpeenv` --image=bretfisher/httpenv 
            - $ `kubcetl scale deployment/httpenv` --replicas=5
            - $ `kubcetl expose deployment/httpenv` --port 8888
            - $ `kubectl get service` //You'll see the cluster IP and Ports
            - $ `kubectl run --generator=run-pod/V1 tmp-shell --rm -it --image bretfisher/netshoot -- bash` //create a pod for curling 
                - curl httpenv:8888 or curl <ip>:<port> 
        - NodePort
            - High port allocated each node
            - Port is open on every node's IP
            - Anyone can connect (if they can reach node)
            - Other pods need to be updated to this port
            //Creating a NodePort Service
            - $ `kubectl get all` 
            - $ `kubectl expose deployment/httpenv --port 8888 --name httpenv-np --type NodePort` //So, you can access cluster by IP - notice httpenv-np it is a <deplymentname>-np 
                - $ `kubectl get services` 
                    - you'll notice NodePort got created <internalport>:<extenalport> which is opposite of how docker port is displayed. These ports are higher ports and are generated automatically
                - $ `curl localhost:32334` // Your host can now access the pods 
        - LoadBalancer
            - Control a LN endpoint external to the cluster 
            - Only available when infra provider gives you a LB(AWS ELB, etc)
            - Create NodePort+ClusterIP services, tells BL to send to NodePort
            - $ `kubectl expose deployment/httpenv --port 8888 --name httpenv-lb --type LoadBalancer`
                - $ `kubectl get services`
                - $ `curl localhost:8888` //what's weird is that the LoadBalancer will still show random port
        - ExternalName 
            - Adds CNAME CNS record to CoreDNS only 
            - Not used for pods, but for giving pods a DNS name to use for something outside kubernetes
        - Ingress 
    
    - These 3 service types are additive, each one create the onse above it:
        - ClusterIP
        - NodePort
        - LoadBalancer 
# Cleanup
- $ `kubectl get all`
- $ `kubectl delete <resouce type><resoucrce name>`
- $ `Kubectl delete service/httpenv service/httpenv-np` 
- $ `Kubectl delete service/httpenv-lb deployment/httpenv`

# Kubernetes DNS 
CoreDNS - like swarm, this is DNS-Baed service discovery
- $ `kubectl get namespaces` 
You can curl services FQDN 
- $ `curl <hostname>.<namespace>.scv.cluster.local` 
- $ `kubectl get namespaces` 

# Kubernetes Management Technique 
Run, create, and Expose Generators(Helper Templates)
- Every resouce in Kubernetes has a psicification or "spec" 
    - $ `kubectl create deployment sample --image nginx --dry-run -o yaml` //it dry runs and create a yaml file
    - $ `kubectl create job test --mage nginx --dry-run -o yaml`
    - $ `kubectl expose deployment/test --port 80 --dry-run -o yaml` //This will error out if no deployment exist 
- Using Dry-run so we can see which generators are used 
    - $ `kubectl run test --image nginx --dry-run`
    - $ `kubectl run test --image nginx --port 80 --expose --dry-run` 
    - $ `kubectl run test --image nginx --restart OnFaulure --dry-run` 
    - $ `kubectl run test --image nginx --restart Never --dry-run` 
    - $ `kubectl run test --image nginx --schedule "*/1 * * * *" --dry-run` 
- More YAML templates https://github.com/dennyzhang/kubernetes-yaml-templates 

# Imperative vs Declarative (Don't mix these approaches)
## Impereative
Impereative: Focus on how a program operates; You make it. Best way when learning or testing
- $ `kubectl run`
- $ `kubect create deployment`
- $ `kubectl update` 
- It is easier when you know the state, it is easiser to get started, it is easier for cli, it is hard to automate
- Impreative commands: run, expose, scale, edit, create deployment
Imperative Objects: Good for prod of small environments, single file per command, store your changes in git-based yaml files, still hard to automate
- $ `create -f file.yml`
- $ `replace -f file.yml` 
- $ `delete -f file.yml` 
## Declarative
Declarative: Focus on what a program should accomplish; You just order. Best for production
- $ `kubectl apply -f my-resources.yaml`
- Best for prod, easier to automate
- Harder to undestand and predict changes 
- YAML way
- $ `kubectl apply -f filename.yml` 
- Create/update resources in a file 
    - $ `kubectl apply -f myfile.yaml`
- Create/update a whole directory of yml 
    - `$kubectl apply -f ymlfolder/`
- Create update from a URL
    - $ `kubectl apply -f https://bret.run/pod.yml` 
- Be careful, lets look at first (browser or curl)
    - `curl -L https://bret.run/pod` 

# Kubernetes Configuration YAML
- kubernetes configuration file (YAML or JSON)
- Each file contains one or more manifests 
- Each manifest describes an API object (deployment, job, secret)
- Required Fields
    In the .yaml file for the Kubernetes object you want to create, you'll need to set values for the following fields:
    apiVersion - Which version of the Kubernetes API you're using to create this object
        - $ `kubectl api-versions` //This gives the list of all api versions
    kind - What kind of object you want to create
        - $ `kubectl api-resources` //This is where you can see the kind which you can use as a parameter
    metadata - Data that helps uniquely identify the object, including a name string, UID, and optional namespace
    spec - What state you desire for the object; where all the action is at 
        - $ `kubectl explain services` --recursive //show all the keys each kind  supports by the yml file 
        - $ `kubectl explain services.spec` //shows more detail about the keys for services spec
        - $ `kubectl explain services.spec.type` //you can drill down
        - $ `kubectl explain deployment.spect.template.spec.volumes.nfs.server` //spec can have sub spec
https://kubernetes.io/docs/reference/#api-reference
# Dry Run
- dry-run a create (client side only)
    - $ `kubectl apply -f app.yml --dry-run `
- dry-run a create/update on server 
    - $ `kubectl apply -f app.yml --server-dry-run` //you can see if there's a change
- see a diff visually
    - $ `kubectl diff -f app.yml` // you can see changes in details

# Labels
    - Labels goes under metadata: in your YAML; meant to discribe resouce 
    - Simple list of key: value for identifying your resource later by
    selecting, grouping, or filtering for it
    - Common examples include tier: frontend, app: api, env: prod,
    customer: acme.co
    - Not meant to hold complex, large, or non- identifying info
# Annotations
    - Meant to hold complex, large, or identifying info, more for configuration
    - filter a get command
     - $ `kubectl get pods -l app=nginx` 
    - apply only matching labels
     - $ `kubectl apply -f myfile.yaml -l app=nginx` //only apply changes on specific label
## Label Selectors
Label Selectors https://dzone.com/articles/setting-kubernetes-labels-and-annotations
- The "glue" telling Services and Deployments which pods are theirs
- Many resources use Label Selectors to "link" resource dependencies - You'll see these match up in the Service and Deployment YAML
```yml
    kind: Deployment
    metadata:
        name: nginx-deployment
    spec:
    selector:
        matchLabels:
        app: nginx
```
- Use Labels and Selectors to control which pods go to which nodes
- Taints and Tolerations also control node placement

# Storage in Kubernetes
- Storage and stateful workloads are harder in all systems
- Containers make it both harder and easier than before
- StatefulSets is a new resource type, making Pods more sticky
- Bret's recommendation: avoid stateful workloads for first few deployments until you're good at the basics
    - Use db-as-a-service whenever you can

# Volumes in Kubernetes
- Creating and connecting Volumes: 2 types 
- Volumes
    - Tied to lifecycle of a Pod
    - All containers in a single Pod can share them 
- PersistentVolumes
    - Created at the cluster level, outlives a Pod 
    - Separates storage config from Pod using it 
    - Multiple Pods can share them
- CSI plugins are the new way to connect to storage

# Ingress
- None of our Service types work at OSI Layer 7 (HTTP)
- How do we route outside connections based on hostname or URL? 
- Ingress Controllers (optional) do this with 3rd party proxies
- Nginx is popular, but Traefik, HAProxy, F5, Envoy, Istio, etc.
- Note this is still beta (in 1.15) and becoming popular
- Implementation is specific to Controller chosen

# CRD's and The Operator Pattern
- You can add 3rd party Resources and Controllers
- This extends Kubernetes API and CLI
- A pattern is starting to emerge of using these together
- Operator: automate deployment and management of complex apps 
- e.g. Databases, monitoring tools, backups, and custom ingresses

# Higher Deployment Abstractions
- All our kubectl commands just talk to the Kubernetes API
- Kubernetes has limited built-in templating, versioning, tracking, and management of your apps
- There are now over 60 3rd party tools to do that, but many are defunct
- Helm is the most popular
- "Compose on Kubernetes" comes with Docker Desktop
- Remember these are optional, and your distro may have a preference
- Most distros support Helm

# Templating YAML
- Many of the deployment tools have templating options
- You'll need a solution as the number of environments/apps grow 
- Helm was the first "winner" in this space, but can be complex
- Official Kustomize feature works out-of-the-box (as of 1.14)
- docker app and compose-on-kubernetes are Docker's way

# Kubernetes Dashboard
- Default GUI for "upstream" Kubernetes 
- github.com/kubernetes/dashboard
- Some distributions have their own GUI (Rancher, Docker Ent, OpenShift)
- Clouds don't have it by default
- Let's you view resources and upload YAML
- Safety first!

# Kubectl Namespaces and Context
- Namespaces limit scope, aka "virtual clusters"
- Not related to Docker/Linux namespaces
- Won't need them in small clusters
- There are some built-in, to hide system stuff from kubectl "users"
    > `kubectl get namespaces`
    > `kubectl get all --all-namespaces`
- Context changes kubectl cluster and namespace
- See ~/.kube/config file 
    > `kubectl config get-contexts` 
    > `kubectl config set*`

# Future of Kubernetes
    - More focus on stability and security
        - 1.14, 1.15, largely dull releases (a good thing!) 
        - Recent security audit has created backlog
    - Clearing away deprecated features like kubectl run generators
    - Improving features like server-side dry-run
    - More and improved Operators
    - Helm 3.0 (easier deployment, chart repos, libs)
    - More declarative-style features
    - Better Windows Server support
    - More edge cases, kubeadm HA clusters

# Related Projects
- Kubernetes has become the "differencing and scheduling engine backbone" for so many new projects
- Knative - Serverless workloads on Kubernetes
- k3s - mini, simple Kubernetes
- k3OS - Minimal Linux OS for k3s
- Service Mesh - New layer in distributed app traffic for better control, security, and monitoring