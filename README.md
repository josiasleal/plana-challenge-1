
# Docker/Kubernetes Challenge



## Author

- [@josiasleal](https://www.github.com/josiasleal)


## Docker compose

```bash
  docker-compose up --build --force-recreate --no-deps  
```

than vist https://localhost:5000 on your browser

## Run Locally

Clone the project

```bash
  git clone https://github.com/josiasleal/plana-challenge-1.git
```

Go to the [project directory](https://github.com/josiasleal/plana-challenge-1)
```bash
  cd plana-challenge-1
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Kubernetes Deployment

To deploy this project run

```bash
  kubectl apply -f deployment.yml,service.yml
```


## Dependencies

- [http](https://www.npmjs.com/package/http)
- [ip](https://www.npmjs.com/package/ip)
- [os](https://www.npmjs.com/package/os)
