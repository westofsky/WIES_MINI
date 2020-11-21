## 🔧 기술 스택 (Technique Used)
### Server(back-end)
 - Node.js
 - Express
 - MongoDB
 
### front-end
 -  Vue.js
 -  Bootstrap

## ⛏ 설치 안내 (Installation Process)
> MongoDB 및 node.js 설치는 되어 있다는 가정하에 진행합니다.

```bash
$ git clone https://github.com/westofsky/WIES_MINI.git
$ cd WIES_MINI
$ npm install
```

### Front-End
```bash
$ cd client/
$ npm install
```

### Back-End
```bash
$ cd server/
$ npm install
```

### Build / Test
```bash
$ (root) npm start
```

### 세팅시 유의 사항
1. [vue.config.js](https://github.com/westofsky/WIES_MINI/blob/master/client/vue.config.js) 안에 '/api' `target` 주소를 서버주소(로컬 환경시 서버포트)로 변경