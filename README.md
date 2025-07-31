# Dashboard Community React Project

This README provides step-by-step instructions for setting up and building the Dashboard Community ReactJS project according to the provided specifications.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Figma Design Integration](#figma-design-integration)
4. [Form Validation & Autocomplete Search](#form-validation--autocomplete-search)
5. [Responsive Layout](#responsive-layout)
6. [Chart Component](#chart-component)
7. [Most Ordered Food List](#most-ordered-food-list)
8. [Folder Structure](#folder-structure)
9. [Available Scripts](#available-scripts)

---

## Prerequisites

- **Node.js** (>= 14.x) and **npm** or **Yarn**
- **Git** (for cloning the repository)

---

## Project Setup

- Scaffold a new React project using Vite with the official React template, choosing an appropriate project name (e.g., `dashboard-community`).
- Add the provided data definitions under `src/data`:
  - `searchKeywords.js` (with the `searchKeywords` array)
  - `lastWeekData.js` (with the `lastWeekData` array)
  - `mostOrderedFood.js` (with the `mostOrderedFood` array)
- Create corresponding components in `src/components` (for example, `SearchBar.jsx`, `LineChart.jsx`, `FoodList.jsx`) and import the data from `src/data`.
- Organize application logic, state management, and routing to reflect the dashboard’s navigation and functionality.
- Align the directory structure with the [Folder Structure](#folder-structure) section for consistency.

---

## Figma Design Integration

Follow the design specifications provided in the Figma file:

> [https://www.figma.com/design/Ek81CPp3A00LgPTNwmpglw/Dashboard--Community-?node-id=0-1&p=f&t=0SgI1ytjjLCdrQ2b-0](https://www.figma.com/design/Ek81CPp3A00LgPTNwmpglw/Dashboard--Community-?node-id=0-1\&p=f\&t=0SgI1ytjjLCdrQ2b-0)

- Use the color palette, typography, spacing, and component layouts exactly as shown.
- Ensure consistency in header, sidebar, and card layouts.

---

## Form Validation & Autocomplete Search

Implement search functionality with validation and autocomplete. Use your preferred form library (e.g., Formik + Yup or React Hook Form + Yup).

**Search Keywords List:**

```js
const searchKeywords = [
  'Dashboard Overview', 'User Management', 'Add New User', 'Edit Profile',
  'Settings', 'System Logs', 'Notifications', 'Analytics', 'Reports',
  'Revenue', 'Monthly Sales', 'Export Data', 'Product List', 'Inventory',
  'Add Product', 'Orders', 'Pending Orders', 'Completed Orders',
  'Customers', 'Customer Feedback', 'Support Tickets', 'Billing Information',
  'Subscription Plan', 'API Access', 'Security Settings',
  'Two-Factor Authentication', 'Team Members', 'Permissions', 'Audit Trail',
  'Themes', 'Dark Mode', 'Language Settings', 'Sign Out', 'Integrations',
  'Marketing Tools', 'SEO Settings', 'Email Templates', 'Push Notifications',
  'System Updates', 'Backup & Restore', 'Activity Feed', 'Search History',
];
```

1. **Validation**: Ensure the search input is not empty and has a minimum length of 2 characters.
2. **Autocomplete**: Filter `searchKeywords` as the user types and display matching suggestions in a dropdown.
3. **Selection**: On selecting a suggestion, trigger the search handler (e.g., navigate to the target page or update the view).

---

## Responsive Layout

Ensure the dashboard is fully responsive across breakpoints:

- Mobile (≤ 640px)
- Tablet (641px–1024px)
- Desktop (≥ 1025px)

**Tips:**

- Use **CSS Grid** and **Flexbox** for layout adjustments.
- Apply media queries for font sizes, paddings, and grid-template adjustments.
- Hide or collapse the sidebar on small screens, replacing it with a hamburger menu.

---

## Chart Component

Render a line chart showing the past two weeks’ values by using the `lastWeekData` array:

```js
const lastWeekData = [
  { date: '01', value: 60 },
  { date: '02', value: 70 },
  { date: '03', value: 50 },
  { date: '04', value: 55 },
  { date: '05', value: 68 },
  { date: '06', value: 66 },
  { date: '07', value: 61 },
  { date: '08', value: 70 },
  { date: '09', value: 60 },
  { date: '10', value: 64 },
  { date: '11', value: 66 },
  { date: '12', value: 58 },
];
```

- Choose and configure a charting library of your choice (e.g., Recharts, Chart.js, or similar).
- Build a `LineChart` component that consumes `lastWeekData` and displays a smooth line with tooltips for each point.
- Place the chart in the dashboard layout according to the Figma design.

---

## Most Ordered Food List

Render a list of food items with image, name, and price.

**Data Source:**

```js
const mostOrderedFood = [
  {
    id: 1,
    name: 'Fresh Salad Bowl',
    price: 45000,
    image: '/images/fresh-salad-bowl.jpg',
  },
  {
    id: 2,
    name: 'Chicken Noodles',
    price: 75000,
    image: '/images/chicken-noodles.jpg',
  },
  {
    id: 3,
    name: 'Smoothie Fruits',
    price: 45000,
    image: '/images/smoothie-fruits.jpg',
  },
  {
    id: 4,
    name: 'Hot Chicken Wings',
    price: 45000,
    image: '/images/hot-chicken-wings.jpg',
  },
];
```

1. Create a `FoodList` component that maps over `mostOrderedFood`.
2. Display each item in a card: image on the left, name and price on the right.
3. Format the price (e.g., using JavaScript's `Intl.NumberFormat`).

---

## Folder Structure

```
/dashboard-community
├── public
│   └── images
│       ├── fresh-salad-bowl.jpg
│       ├── chicken-noodles.jpg
│       └── ...
├── src
│   ├── assets
│   │   └── styles
│   ├── components
│   │   ├── SearchBar.jsx
│   │   ├── LineChart.jsx
│   │   ├── FoodList.jsx
│   │   └── ...
│   ├── data
│   │   ├── searchKeywords.js
│   │   ├── lastWeekData.js
│   │   └── mostOrderedFood.js
│   ├── hooks
│   │   └── useAutocomplete.js
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

---

## Available Scripts

Define and configure standard npm scripts in `package.json` to support development and production workflows, such as:

- **start**: launch the development server
- **build**: bundle the application for production
- **test**: run automated tests (if applicable)
- **lint**: check code for style and quality issues

Adjust script names and commands as needed to suit your build environment.

