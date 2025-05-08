🛍️ E-commerce Application

📦 Overview

The Ayed E-Commerce Platform is a robust, scalable, and modular web application designed to deliver core e-commerce functionality, including user authentication, product catalog browsing, cart and wishlist management, and order history tracking.

This project is built using React 19, Redux Toolkit, and TypeScript, following clean code principles, separation of concerns, and modern frontend best practices. With its component-based architecture, persistent state management, and extensible routing structure, the platform is developer-friendly and ready for future enhancements.

The application is ideal for developers looking to build upon a solid frontend foundation or integrate it with a backend for full-stack deployment.

📌 Application Purpose
The Ayed E-commerce application is a full-featured online shopping platform that allows users to:

* Browse products by categories

* Manage shopping cart

* Save products to a wishlist

* Create accounts and authenticate

* View order history

* Manage user profiles

System Architecture

The application follows a modern frontend architecture based on React and Redux, with clear separation between:

* UI Components

* State Management

* Routing

![image](https://github.com/user-attachments/assets/a33b3d9b-d5f5-473a-b78e-dab823072850)

Technical Stack
| Category            | Technologies                       |
| ------------------- | ---------------------------------- |
| Core Framework      | React 19                           |
| State Management    | Redux Toolkit, Redux Persist       |
| Routing             | React Router v7                    |
| UI Components       | Flowbite React, Tailwind CSS       |
| Form Handling       | React Hook Form, Zod               |
| API Communication   | Axios                              |
| Build Tools         | Vite, TypeScript                   |
| Feedback Components | Lottie React, React Content Loader |


🧩 Key Features & Code Organization

The application's features are modularized with dedicated UI components, Redux slices, and API interactions.

![image](https://github.com/user-attachments/assets/d25fced6-efef-4885-81ef-acf91bf93c84)

🖼️ UI Organization
The UI is built with a main layout that includes a shared header and a router outlet for rendering different pages.

Sources:

* client/src/routes/AppRouter.tsx (lines 24–98)

* client/src/layouts/header/Header.tsx (lines 12–115)

🔄 State Management
State is managed using Redux, with slices for domain entities like cart and wishlist. Redux Persist ensures state remains across browser sessions.

![image](https://github.com/user-attachments/assets/b2f5d225-62ef-428a-8d81-090ca677a4d2)

Sources:

* client/src/store/Store.ts (lines 1–75)

* client/src/types/TProduct.ts (lines 1–11)

* client/src/store/wishlist/wishlistSlice.ts (lines 1–83)

Routing Structure
Routing is handled by React Router v7, with both public and protected routes:

Path	Component	Description	Protection
| Path                           | Component     | Description          | Protection |
| ------------------------------ | ------------- | -------------------- | ---------- |
| `/`                            | Home          | Home page            | ❌          |
| `/categories`                  | Categories    | Browse categories    | ❌          |
| `/categories/products/:prefix` | Products      | Products by category | ❌          |
| `/cart`                        | Cart          | Shopping cart        | ❌          |
| `/wishlist`                    | Wishlist      | User's wishlist      | ✅          |
| `/login`                       | Login         | User login           | ❌          |
| `/register`                    | Register      | User registration    | ❌          |
| `/profile`                     | ProfileLayout | User profile         | ✅          |
| `/profile/orders`              | Orders        | Order history        | ✅          |
| `/about`                       | About         | About the platform   | ❌          |



🔐 Authentication & Authorization
Authentication includes login and registration functionality. Protected routes use a ProtectedRoute component to block unauthorized access.

Features:

* Auth state is persisted via Redux Persist

* Users remain logged in between sessions

Sources:

* client/src/routes/AppRouter.tsx (lines 71–94)

* client/src/store/Store.ts (lines 29–33)

🚀 Performance Optimizations
The application includes several performance enhancements:

* Lazy Loading: Routes load on demand

* Redux Persistence: Maintains important state

* Skeleton Screens: Improve perceived speed

* React Suspense: Manages loading states cleanly

Running the Application

* client : npm run dev
* server : npm run start

🌟 Future Improvements

* Payment gateway integration

* User reviews and ratings

* Order history and tracking

* Admin dashboard
