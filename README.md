# **POS System**
Our POS (point-of-sale) system helps restaurants manage their orders while simplifying the way customers order food and make payments
- [Live demo](https://nihouse.vercel.app/) | [video](https://www.youtube.com/watch?v=R6NiKv4RHxQ)


## Installation 

To setup dev environment, follow these document: 

- [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MongoDB](https://www.mongodb.com/try/download/community).
- [ReactJS](https://www.geeksforgeeks.org/how-to-install-reactjs-on-windows/)

We need to run 2 apps seperately:
- `node-server`: connect with MongoDB and support CRUD operations
- `frontend`: client React app

### to start node-server
you may want to change MongoDB config [here](node-server\app\config\db.config.js)

```console
cd node-server
npm install
npm start
```

The server will be listening on [localhost:8080](http://localhost:8080)

### to start React app
```console
cd frontend
npm install
npm start
```
The app will be available at [localhost:3000](http://localhost:3000)