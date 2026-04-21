Description

---

<img src="./assets/basic.png" style:"center" height="auto" width="833">

---
## Terminal

1. Open terminal
2. `ssh root@{ip address}`
3. Enter Password

- Now we are in the terminal of server

---
## FileZilla 

- install [Download](https://filezilla-project.org/)
- Insert
- Port: 22?  ∵ To transfer file via SFTP
- Click Yes

<img src="./assets/filezilla.png" height="auto" width="833">

---
## Inserting a Node.js App

### Filezilla

1. Click on '/'  → dbl clk at Home folder
2. Create Directory `nodejsapp`

### Offline Folder

```
Root
└─ src/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── views/
    └── index.js
```

- index.js
```
npm init -y
npm i express@4
```

- Select `src/`   `package.json`     `package-lock.json`
- Paste at `nodejsapp` Directory on Filezilla

---
