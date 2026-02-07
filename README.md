# e-plantShopping

e-plantShopping is a React-based e-commerce web application that allows users to browse a variety of plants and manage a shopping cart. The application demonstrates the use of Redux Toolkit for global state management and provides a smooth shopping experience.

## Project Description

The e-plantShopping application allows users to:
- Browse plants across multiple categories
- Add plants to a shopping cart
- Increase or decrease the quantity of items in the cart
- Remove items from the cart
- View the total cost of all items in real time

This project is built as part of a learning exercise to understand React components, Redux state management, and component interaction.

## Features

- Product listing by category
- Add to Cart functionality
- Cart quantity management (increment/decrement)
- Remove items from the cart
- Dynamic total cart price calculation
- Global state management using Redux Toolkit

## Technologies Used

- React
- Redux Toolkit
- React Redux
- Vite
- JavaScript (ES6)
- CSS

## Project Structure

e-plantShopping/
│
├── src/
│ ├── CartSlice.jsx
│ ├── CartItem.jsx
│ ├── ProductList.jsx
│ ├── store.js
│ ├── main.jsx
│ ├── App.jsx
│ └── index.css
│
├── public/
├── package.json
└── README.md


## Installation and Setup

To run the e-plantShopping project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-plantShopping.git

2. Navigate to the project directory:
cd e-plantShopping

3. Install dependencies:
npm install

4. Start the development server:
npm run dev

# Redux Implementation:
Redux Toolkit is used to manage the shopping cart state.

# The cart state includes:
List of cart items
Quantity of each item

# Actions implemented:

# addItem

# removeItem

# updateQuantity

# Deployment
The e-plantShopping application can be deployed using GitHub Pages.
After deployment, the application is accessible through the GitHub Pages URL associated with the repository.

# Notes
This project is for educational purposes.

Checkout functionality is not implemented and is reserved for future development.

This repository is named e-plantShopping and contains the complete implementation of the plant shopping application.


---

### What to do next
```bash
git add README.md
git commit -m "Add complete README for e-plantShopping project"
git push
