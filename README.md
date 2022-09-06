<!-- FRONT END -->

create header
create template logo placeholder
create menu
create footer
create homepage template
create store category page template
create product page template
create checkout page
create cart
create registration / sign in
create user privilages

create admin dashboard

// packages to install front end
React
redux + redux toolkit
axios

// packages to install back end
express

// packages to install for development in front and back end (root)
dotenv -
nodemon - tool to watch server, so we dont need to reset after changes
mongoose - object modelling for node.js
concurrently - tool which allows us to run both back and front end at the same time.
add to scripts
"server": "nodemon back-end/server",
"client": "npm start --prefix front-end",
"dev" : "concurrently \"npm run server\" \"npm run client\" "

now to run the app, we just need to call "npm run dev"

using inmport instead of require - add "type" : "module" to package json
