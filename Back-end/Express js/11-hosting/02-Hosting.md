Description: Hosting a Node.js app on Ubuntu

---

PART A: HOSTING
	not a good way.
	
PART B: HOSTING
	pm2 and nginx
	
PART C: IP to Domain

---
# HOSTINGER Setup

#### Website

- Purchase a plan [click me](https://hpanel.hostinger.com/?redirect_back_url=https://auth.hostinger.com/in/login&_gl=1*1pfypw1*_up*MQ..*_gs*MQ..)
- Choose `Plain OS`
- Choose `Obuntu`
- Continue
- Add a Root Password
- Save & Continue 
- Go to Overview and copy IP Address

#### Terminal: SERVER

```
ssh root@{ip address}
{PASSWORD}
```

- Now We are using a terminal of server

---
# ==Part A: HOSTING== 

---
#### Documentation

- Read and understand: How to host a NodeJS website using pm2 and nginx [click me](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04#step-1-installing-node-js)

### ==Step 1: Install==

1. Install Node.js
	- `setup_18.x`: tells version to be installed

```
curl -sL https://deb.nodesource.com/setup_19.x -o nodesource_setup.sh
nodejs --version        //Verification
```

2. Build Essentials

```
sudo apt-get install build-essential
y
```

### ==Step 2: Create a Sample App==

#### Offline

```
Root
├── index.js
└── Install & Apply.md
```

- Terminal: OFFLINE

```
npm init -y
npm i express @4
```

`index.js`

```
//Express Hello World Server         let it be xa1
```
#### Terminal: SERVER

```
ls
mkdir sample
cd sample/
npm init -y
npm i express@4
ls
vim index.js
{PASTE xa1}
Esc :wq
node index.js         // Says: Example.....port 3000
```

#### Browser: Verification

- Browser
- URL: {IP Address}:3000
- Output: Our index.js

---
