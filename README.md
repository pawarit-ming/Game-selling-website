# Game Store Website

A game store website with a public storefront and an admin area for managing products and admin accounts.

Group project for **ITDS241 Web Technologies and Applications**, Faculty of ICT, Mahidol University (2023).
The three of us worked across all parts: front end, back end and database.

> Built without version control at the time, uploaded to GitHub later as a portfolio reference,
> so this repository has no earlier commit history.

**Stack:** Node.js, Express, MySQL (mysql2), HTML, CSS, JavaScript

## Features

**Storefront**
- Home page and a detail page for each game
- Browse by genre, price range and release year
- Search by game name (filtered in the browser)

**Admin area**
- Admin login, checked against the `admin_` table in MySQL
- Add, edit and delete products
- Add, edit and delete admin accounts

## Back end

`main.js` is an Express server that serves the pages and talks to MySQL. All queries use
parameterized SQL (`?` placeholders). It has two sets of routes:

**API routes** (JSON body, tested with an API client)

| Method | Route | What it does |
| --- | --- | --- |
| GET | `/products` | List all products |
| POST | `/insert-product` | Add a product |
| PUT | `/update-product` | Edit a product |
| DELETE | `/delete-product` | Delete a product |
| POST | `/insert-admin` | Add an admin |
| PUT | `/update-admin` | Edit an admin |
| DELETE | `/delete-admin` | Delete an admin |

**Form routes** (used by the admin pages, redirect back after saving)

`/form-login`, `/form-insert`, `/form-update`, `/form-delete`,
`/form-add-admin`, `/form-update-admin`, `/form-delete-admin`

The database schema and sample data are in `sec2_gr8_database.sql`.

The seeded admin accounts use example email addresses and the demo password
`demo_password_change_me`. Replace these credentials before using the app beyond a local demo.

## Running locally

Requires Node.js and MySQL.

```bash
npm install
mysql -u root -p < sec2_gr8_database.sql   # creates the Market database with sample data
cp .env.example .env                        # then fill in your MySQL credentials
node main.js
```

Then open `http://localhost:3000` (or the `PORT` you set in `.env`).

## Known limitations

This was a second-year course project. Looking back, these are what I would change:

- Admin passwords are stored in plain text. They should be hashed (e.g. bcrypt).
- After login, the email and password are stored in a cookie. A server-side session or a signed token (JWT) should be used instead, and admin routes should check it.
- Storefront pages are static HTML, one page per game or filter. Rendering them from the `product` table would remove the duplication.
