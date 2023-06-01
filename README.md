# AGRITECH

##Author: **Dominic Imbuga** ##Track: **Google Cloud Associate Engineer**

See the app in action here -> [https://Ongata Rongai Online.netlify.app]

## Design & Process #00aa13

####Introduction 
I'm Kenyan, a countrty in East Africa, food in my coundtry has been a big problem, protests are going on in different counties due to high food prices, a common citizen can't a proper meal baecause food prices have nearly doubled .1 kg of dry maize locally called gorogoro now retails at 190kg from Ksh 80 .

 Lack of latest farming equpipments,networth business networks, lack of latest agro processing and manufacturing innovations, lack of targetetd knowledge for farmers and agro processors stifle the efforts for a sustanable farming that can provide food security and  the app uses  mobile plaform, IoT technology, data analytics, and Cloud to  provide a solution that improve agricultural productivity, supply chain management, and food security.

### Brief description: Ongata Rongai Online - (**Ongata Rongai Online** is swahili word from a mentor)

An integrated smart farming platform that leverages Internet of Things (IoT) technology, data analytics, and mobile applications to empower farmers with real-time information and insights.

### List a few main features:

- Smallholder farmers,agricultural cooperatives,agribusinesses in Kenya can search for and match market prises of over 150 products in real time based on location, langauge,markets, goals, and county
- Pricing will be individualised based on organizations preference and demand , it will be free for not-for-profit and charity orgarnisations
- Strong social media interration with reviews, posts and analytics
- Smallholder farmers,agricultural can upload mentor and mentees in pdf, json or excell data formats

### List roles of typical users:

a. Smallholder farmer,
b. Agricultural cooperative
c. Agribusiness

## 2a. Writing user personas

Ibrahim is a busy Smallholder farmer who wants to access saina mobile app and make sure that he can see all farming activities of his farm project. He also saina to see engagement reports, detailed farm purchase lists, graphics, custom reports. He also uses the mobile app to automate meeting and calls with Agribusinesses and Agricultural cooperatives. Ibrahim wants to save time and money, and he wants a integrated smart farming  platform that gives his time back.

Saian Cereals is a Agribusinesses that wants to send direct messages or join video calls their customers and to explore tools that will save them time and learn in the process . Saian Cereals staff ikes to perform all operations on their phone.

## 2b. Writing user stories

Search for for Market prices and agribusinesses near them

As a Smallholder farmer , I want to search for Agribusinesses and Agricultural cooperative nearby , see engagement reports, detailed real-time market prices, graphics, custom reports of all farming activities.

Check useful graphics
As a Agribusiness, I want to create and upload  useful graphics to social media and measure my marketing program.

## 3. Defining SLIs and SLOs

#### userstory SLI

create and upload  useful graphics to social media

#### SLO

1. available 99.95%
2. 5% of requests complete in under 300 ms

#### SLI

1. Fraction of 200 vs 500 HTTP responses from
   API endpoint measured per day
2. Time to last byte GET requests measured
   every 10 seconds aggregated per minute

## 4. Design microservices for your application

A diagram showing your application's microservices and their connections.

# diagram here

## . Designing REST APIs

services and their resources and operations .

### Service name

Account Service

### Collections

marketprices

### Methods

search
list
stats
generateReport

## 6. Defining storage characteristics

### required storage features

#### Service

#### Structured or Unstructured

#### SQL or NoSQL

NoSQL & SQL

#### Strong or Eventual Consistency

Strong M

#### Amount of Data (MB, GB, TB, PB, ExB)

20GB

#### Read only or Read/Write

## 7. Choosing Google Cloud Storage and Data Services

#### Google Cloud storage products for each service

MongoDB Atlas

## 8a. Defining network characteristics for your services

### Service

Account

### Internet facing or Internal only

### HTTP

### TCP

Yes

### UDP

### Multiregional?

No

## 8b. Select the load balancers for your services

Google Cloud load balancer product(s) for each service.

### Service , http, TCP(yes), UDP

## 9. Diagramming your network

### diagram that depicts how your services will communicate over the network. Include regions, zones, load balancers, CDN, and DNS if applicable

# Newtwork Diagram here

## 10. Designing reliable, scalable applications

### Even if some service is down, we want the web frontend of our application to be available nearly all the time. We also want the website to be fast with very low latency to users all over the world. On the next slide, draw a diagram that depicts how we can achieve this using Google Cloud services.

## # Reliable, scalable Diagram here

## 11a. Disaster recovery scenario

### We've deployed for high availability by replicating resources in multiple zones. However, to meet regulatory requirements, We need a plan to recover from a disaster that brings down the entire region. The current architecture is depicted below.So we create a plan to bring up your application in another region if our main region is down.

# Disaster recovery scenario diagram

## 11b. Service disaster recovery scenarios

### Write a high-level list of possible scenarios on the next slide.

### Scenarion one

#### Service

Ratings Service

#### Scenario

Programmer deleted all ratings accidentally

#### Recovery Point Objective

24 hours

#### Recovery Time Objective

1 hour

#### Priority

Med

### Scenario two

#### Service

mentors Service

#### Scenario

mentors database crashes

#### Recovery Point Objective

0 (can’t lose any data)

#### Recovery Time Objective

2 minutes

#### Priority

High

## 11c. Resource disaster recovery plans

### For Scenarion one

### Resource

Ratings Database

### Backup Strategy

Daily automated backups

### Backup Location

Multi-Regional Cloud Storage Bucket

### Recovery Procedure

Run Restore Script

### For Scenarion two

### Resource

Orders Database

### Backup Strategy

Failover replica plus daily backups

### Backup Location

Multi-zone deployment

### Recovery Procedure

Automated

## 12. Modeling secure Google Cloud services

### A diagram that depicts how we will secure your services. Include firewalls, IAM roles, service accounts and network resources as appropriate.

# A diagram that depicts how you will secure your services

## 13. Cost estimating and planning

### We Use the pricing calculator to determine and record on the next slide the cost of your microservices.

### Service name

Accounts

### Google Cloud Resource

MongoDB Atlas + 2 VMs + Load balancer

### Cost

$574.71/month

week 1

- Ideation - to come up with a Project idea
- Breakdown your project into tasks
- Report the total number of tasks for the project
- Assign tasks to all te team members
- Plan and scedule stand ups within your team
- Plan a weekly Demo schedule with your Supervisor
- Set up your Github repo for te project

Other weeks

- Sprint planning
- Coding
- Code Review
- Deployment
- Sprint Review

  # Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

Project in Action - [Saina](https://www.jobify.live/)

Find the App Useful? [You can always buy me a coffee](paypal:imbugad@gmail.com)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/
