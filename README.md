<<<<<<< HEAD
# 🌌 Intergalactic To-Do App

Hey there! 👋  
This is a clean, simple, and animated To-Do List app built with **React** using **Create React App**. It lets you add, edit, delete, and mark tasks as completed — and yep, your tasks are saved even after refreshing the page! Plus, it has a cosmic starfield background to keep things... out of this world. 🌠

---

## 🚀 Features

- ✅ Add new tasks (includes name, description, priority & due date)
- ✏️ Edit existing tasks using an inline form
- ❌ Delete tasks (with a confirmation prompt)
- ✔️ Mark tasks as completed (visually distinguished)
- 🔍 Filter tasks:
  - By **status** (All / Completed / Active)
  - By **priority** (High, Medium, Low)
  - By **due date** (sorted view)
- 💾 Data is saved in your browser’s `localStorage` so it persists between sessions
- 🎨 Beautiful, space-themed animated background using a custom canvas animation
- 📦 Built with modular CSS (CSS Modules) for scoped styling
- 💻 Responsive, clean, and easy-to-use UI

---

## 🛠 How to Run Locally

> This project was bootstrapped with **Create React App**.

### 1. Clone the repository
```bash
git clone https://github.com/RaynerdTech/TodoApp.git
cd TodoApp
````

### 2. Install dependencies

```bash
npm install
```

If you’re curious, here are the main dependencies:

```json
"dependencies": {
  "@testing-library/dom": "^10.4.0",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^13.5.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-scripts": "5.0.1",
  "uuid": "^9.0.1",
  "react-icons": "^4.12.0",
  "web-vitals": "^2.1.4"
}
```

### 3. Start the app

```bash
npm start
```

> This runs the app in development mode.
> Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧠 Extra Notes

* Tasks are saved in your **localStorage** — no backend required.
* The app uses **CSS Modules** for styling — no conflicts, just clean styles.
* There's a canvas-based starry background animation for that intergalactic touch 🌌
* Built with 💙 using React + CSS Modules + a little bit of caffeine.

---

## 📁 Folder Structure (Simplified)

```
src/
├── components/
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── TaskForm.jsx
│   ├── Filters.jsx
│   └── BackgroundAnimation.jsx
├── styles/
│   ├── TaskList.module.css
│   ├── TaskForm.module.css
│   ├── Filters.module.css
│   └── StarBackground.module.css
├── utils/
│   └── localStorageUtils.js
├── App.jsx
└── index.js
```

---

Enjoy organizing your universe of tasks! ☄️🪐
Feel free to fork, star, and modify.

> Made with React, coffee ☕, and just enough cosmic stardust ✨

```

Let me know if you want this saved as a file or need a markdown badge section (e.g., GitHub stars, license, live demo).
```
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 8972167 (Initialize project using Create React App)
