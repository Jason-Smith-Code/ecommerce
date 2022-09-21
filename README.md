<!-- TASKS -->

create menu
create store category page template
create checkout page
create cart
create registration / sign in
create user privilages
create admin dashboard
create error handling

<!-- FRONT END PACKAGES -->

React
redux + redux toolkit
axios

<!-- BACK END PACKAGES -->

express

<!-- ROOT PACKAGES -->

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

# Objective

All the user to install this app on a server, then configure how the front end looks.
Create, delete products.
Customise text and template content.
Upload their logo.
Choose to display and hide components like a featured product grid or carousel
Allow customers to check out with either stripe or paypal
allow customers to register
Automated emails to customers, registering, ordering, dispatching
