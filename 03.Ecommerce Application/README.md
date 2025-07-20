# 🛍️ NxtTrendz Ecommerce Web App

A fully responsive ecommerce platform built using React (Vite), Tailwind CSS, and JWT-based authentication via CCBP APIs.

## 🚀 Features

- 🔐 User Login with JWT authentication
- 🛒 Add to Cart with quantity management
- 📦 Cart page with item delete, total cost, and place order popup
- 🔍 Product sorting (Price: Low to High / High to Low)
- 🧾 Detailed product pages with similar products
- 📱 Responsive layout with hamburger navigation for mobile
- 📄 Protected Routes (Home, Products, Cart)
- 💬 Login credentials toggle dropdown

## 🧰 Tech Stack

| Layer       | Tools               |
|------------|---------------------|
| Frontend   | React (Vite)        |
| Styling    | Tailwind CSS        |
| Routing    | React Router v6     |
| State      | React Hooks         |
| Icons      | React Icons (Bs)    |
| Auth       | JWT via localStorage|
| Backend API| CCBP Ecommerce APIs |

## 🗂️ Folder Structure

```bash
src/
│
├── components/
│   ├── LoginForm.jsx
│   ├── Header.jsx
│   ├── Products.jsx
│   ├── ProductsHeader.jsx
│   ├── AllProductsSection.jsx
│   ├── ProductCard.jsx
│   ├── ProductItemDetails.jsx
│   ├── SimilarProductItem.jsx
│   ├── Cart.jsx
│   ├── ProtectedRoute.jsx
│   └── NotFound.jsx
