# University Management Core Service

- Step 1 
```
yarn install
```
- Step 2
```
yarn husky install
```
- Step 3
```
yarn husky add .husky/pre-commit "yarn lint-prettier"
```
- Step 4
```
npx prisma migrate dev --name init
```