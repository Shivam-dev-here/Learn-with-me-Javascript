# Project Overview

## File Root
- templates/
  - index.html   (Bootstrap demo)
- main.js        (EJS template logic)
- Notes.md       (this file)

---

## Bootstrap Usage
- Template → index.html
- Source → getbootstrap.com
  - Docs → copy CSS, JS links
  - Components → Nav, Button (copy–paste)

---

## main.js Steps
1. Basic commands
2. npm install ejs
3. Learn EJS with Express → [Github](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)

---

## What is EJS
- Embedded JavaScript
- Template engine
- Connects **Server → HTML**

---

## Why EJS (Idea)

### Example
Show **100 student names** from server to HTML.

### Method 1 (No EJS)
- Type names manually in HTML
- Change in server → manually change HTML ❌

### Method 2 (With EJS)
- Server sends data
- HTML auto-updates via EJS ✅
- Better, faster, scalable
