# Marvales Statue

React/Vite frontend with an Express API in `backend/`.

## Setup

Install dependencies from the project root:

```sh
npm install
npm install --prefix backend
```

Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI` to your
MongoDB connection string. Set `EMAIL_USER` and `EMAIL_PASS` as well if contact
form inquiries should be emailed.

## Run

From the project root:

```sh
npm start
```

This starts the frontend and API together. The frontend runs at
`http://localhost:5173` and the API at `http://localhost:5000`.

To run only one part, use `npm run dev` for the frontend or `npm run server` for
the API. The backend can also be started directly with
`npm --prefix backend run dev`.
