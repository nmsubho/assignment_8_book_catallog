## Installation Process:

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


## Live Link: [https://book-catallog-prisma-three.vercel.app/](https://book-catallog-prisma-three.vercel.app/)

## Application Routes:

### User

```javascript
api/v1/auth/signup (POST)
api/v1/users (GET)
api/v1/users/0a057bb1-f5aa-45f3-b5fa-146030020f7e (Single GET)
api/v1/users/0a057bb1-f5aa-45f3-b5fa-146030020f7e (PATCH)
api/v1/users/0a057bb1-f5aa-45f3-b5fa-146030020f7e (DELETE)
api/v1/profile (GET)
```

### Category

```javascript
api/v1/categories/create-category (POST)
api/v1/categories (GET)
api/v1/categories/7d119615-488d-4692-8fc3-8e8ce9501f64 (Single GET)
api/v1/categories/7d119615-488d-4692-8fc3-8e8ce9501f64 (PATCH)
api/v1/categories/7d119615-488d-4692-8fc3-8e8ce9501f64 (DELETE)
```

### Books

```javascript
api/v1/books/create-book (POST)
api/v1/books (GET)
api/v1/books/9414a3e1-571b-438d-8f68-e45d6f2e544b/category (GET)
api/v1/books/99a6c78b-ecec-4b3e-ad91-63532aedb6b5 (GET)
api/v1/books/99a6c78b-ecec-4b3e-ad91-63532aedb6b5 (PATCH)
api/v1/books/99a6c78b-ecec-4b3e-ad91-63532aedb6b5 (DELETE)
```

### Orders

```javascript
api/v1/orders/create-order (POST)
api/v1/orders (GET)
api/v1/orders/ae6406f6-028b-456b-89d2-51ab20d196d3 (GET)