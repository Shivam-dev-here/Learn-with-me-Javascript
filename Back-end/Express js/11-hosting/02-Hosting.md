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
# ==Part B: HOSTING== 

### ==Step 1: Using pm2==

- pm2: Process Manager for Node.js app
- Why: let us easily handle many NodeJS app host all together 
#### Terminal: SERVER/installing

```
sudo npm install -g pm2
pm2 start index.js
```

### ==Step 1: Using NGINX==

- NGINX: a web server using as a proxy/
#### Terminal: SERVER

- installing nginx

```
apt install nginx
y
```

- Updating file

```
sudo nano /etc/nginx/sites-available/default
```

- Find LOCATIONS
	1. Remove existing # etc.
	2. paste from L1 to L5 only
	3. update Port

```
    location / {
        proxy_pass http://localhost:3000;                L1
        proxy_http_version 1.1;                          L2
        proxy_set_header Upgrade $http_upgrade;          L3
        proxy_set_header Connection 'upgrade';           
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;                L5
    }
}
```

- Exit 

```
ctrl + x
y
```

- Run: test

```
sudo nginx -t
```

- Restart

```
sudo systemctl restart nginx
```

#### Browser: Output

- URL: {IP Address}
- Output: Our index.js

---
