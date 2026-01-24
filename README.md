# 🍽️ What's For Dinner - Smart Recipe Explorer

A modern, interactive web application that brings the joy of cooking to your screen.  
**What's For Dinner** provides instant meal inspiration with real-time nutritional data, chef-curated tips, and a seamless responsive interface.

---

## 🔗 Project Links

[🚀 View Live Demo]( https://ziadshaaban1234.github.io/assignment8/)  
[💻 View Repository](https://github.com/ziadshaaban1234/assignment8.git)

---

## 📸 Preview

![Project Screenshot](screenshot/Food%20page.png)

---

## ✨ Features

### 🎲 Random Recipe Engine
* **Instant Inspiration**: Get a new recipe every time you click "Try Another Recipe".
* **Smart Shuffle**: Logic-driven randomization to ensure variety and prevent showing the same dish twice in a row.
* **Full Recipe Details**: Access ratings, difficulty levels, serving sizes, and comprehensive timing.

---

### 📊 Interactive Dashboard
* **Dynamic Tab System**: Easily navigate through four detailed sections:
    * **Ingredients**: Clear, organized list of everything you need.
    * **Instructions**: Step-by-step cooking guide.
    * **Nutrition**: Real-time breakdown of Calories, Protein, Carbs, and Fats.
    * **Chef's Tips**: Professional secrets to make your dish perfect.
* **Smart Time Alert**: An automatic warning badge pops up for recipes requiring long preparation (45+ mins).

---

### 📱 Premium UX/UI
* **Ultra-Responsive**: Specifically crafted CSS to look perfect on everything from large monitors to small phones (down to 260px).
* **Modern Styling**: Built with custom CSS variables, elegant shadows, and smooth hover animations.
* **Mobile Sidebar**: A clean, collapsible side menu for easy navigation on mobile devices.

---

## 🏗️ Project Architecture

**What's For Dinner** is built using a clean modular architecture that separates the project into three main layers:

### 🎨 1. Presentation Layer (UI Components)
Handles everything related to the user interface:

- Recipe card layout and styling  
- Responsive design across all screen sizes  
- Navigation sidebar and mobile menu  
- Tabs system for switching between sections  

📌 Implemented mainly in:

- `index.html`
- `css/master.css`

---

### ⚙️ 2. Application Logic Layer (JavaScript Engine)
Responsible for the dynamic behavior of the website:

- Random recipe generation  
- Preventing duplicate recipes from appearing consecutively  
- Tab switching logic (Ingredients / Instructions / Nutrition / Tips)  
- Updating the DOM dynamically when the user interacts  

📌 Implemented in:

- `js/javascript.js`

---

### 📦 3. Data Layer (Recipes & Content)
Stores and organizes recipe-related information such as:

- Meal name and description  
- Cooking time, difficulty, servings  
- Nutritional values (Calories, Protein, Carbs, Fats)  
- Chef tips and preparation steps  

📌 Stored directly inside JavaScript as structured objects/arrays.

---

### 🔄 Workflow Overview

1. User clicks **Try Another Recipe**
2. JavaScript selects a random recipe from the dataset
3. UI updates instantly with:
   - New image + details  
   - Ingredients + instructions  
   - Nutrition breakdown  
4. Tabs allow smooth navigation without reloading the page

---

This architecture ensures the project is:

✅ Easy to extend (add more recipes)  
✅ Simple to maintain  
✅ Fully interactive with clean separation of concerns  

---

## 📂 Folder Structure

```bash
assignment8/
│── index.html
│
├── css/
│   ├── bootstrap.min.css
│   ├── all.min.css
│   └── master.css
│
├── js/
│   ├── bootstrap.bundle.min.js
│   └── javascript.js
│
├── images/
│   └── (food assets & icons)
│
├── screenshot/
│   └── Food page.png
│
└── webfonts/
    └── fontawesome files
