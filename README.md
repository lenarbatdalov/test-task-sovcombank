# Примечания
1. На текущей версии endeavouros по умолчанию устанавливается node v18.3.0, который не собирает проект из-за зависимости "sass-loader". Поэтому использую docker для работы.
```
docker compose up
```
2. Если оставить пустой переменную окружения `VUE_APP_API_URL`, то будет использоваться мок-данные из `src/mocks/getPayments.js`.

<br>

# Vuejs test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run tests
```
yarn test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
