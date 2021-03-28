# Usage

Setup

- `yarn install` (Install requirements)

Development

- `yarn dev` (Start native development server, http://localhost:3000)
- `yarn build && yarn start` (Build and start natively, http://localhost:3000)
- `yarn start:bazel` (Build and start with **Bazel**, http://localhost:3000) 🌿

# Issues

- Importing `styles/globals.css` into `pages/_app.js` causes an error

  ```
  Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).
  ```
