# TastyBite Food Ordering Web Application

TastyBite is a React-based food ordering web application built with React.js, React Router, and Redux Toolkit.

The application allows users to browse food items, search and filter dishes, view food details, manage a shopping cart, and place a demo order.

## Features

- Simple login page with form validation
- Responsive home page
- Food category filtering
- Food search
- Food details page
- Quantity selection
- Add food items to cart
- Increase and decrease cart quantity
- Remove items from cart
- Redux Toolkit shopping cart management
- Order summary with delivery charge
- Demo order placement
- Popular restaurant section
- Responsive design

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router
- Redux Toolkit
- React Redux
- Vite

## React Concepts Used

- Functional Components
- JSX
- Props
- useState
- useMemo
- Event Handling
- Conditional Rendering
- Array map()
- Array filter()
- React Router
- useNavigate
- useParams
- Link
- NavLink
- Redux Toolkit
- useSelector
- useDispatch
- createSlice
- configureStore

## Project Structure

```text
TastyBite-Food-Ordering-App/

│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── FoodCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── RestaurantCard.jsx
│   │
│   ├── data/
│   │   └── foods.js
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── FoodDetails.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Orders.jsx
│   │
│   ├── store/
│   │   ├── cartSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

## Application Flow

```text
Login
  ↓
Home Page
  ↓
Search / Filter Food
  ↓
Food Details
  ↓
Select Quantity
  ↓
Add to Cart
  ↓
Shopping Cart
  ↓
Order Summary
  ↓
Place Demo Order
  ↓
Orders Page
```

## Redux Toolkit

Redux Toolkit is used to manage the shopping cart.

The cart state contains food items and their quantities.

The `cartSlice.js` file contains reducers for:

- Adding items to the cart
- Increasing quantity
- Decreasing quantity
- Removing items
- Clearing the cart

The Redux store is configured in `store.js`.

## React Router

React Router is used for navigation between pages.

Main routes include:

```text
/             → Login
/home         → Home
/food/:id     → Food Details
/cart         → Shopping Cart
/orders       → Orders
```

`useParams()` is used to get the food ID from the URL.

`useNavigate()` is used for programmatic navigation.

`Link` and `NavLink` are used for navigation between pages.

## Data Handling

Food items, categories, and restaurant information are stored as JavaScript arrays of objects in:

```text
src/data/foods.js
```

The application uses JavaScript methods such as `map()`, `filter()`, `find()`, and `reduce()` to display and process the data.

## How to Run

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd TastyBite-Food-Ordering-App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Note

This is a frontend demo application. Login and order placement are implemented for demonstration purposes. Orders are not stored in a backend database.

## Author

Prithu H S
