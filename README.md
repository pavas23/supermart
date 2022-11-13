
# OOPS Project

This is a web based application for an online supermarket. Through 
which 
customers can register and order items.
### User Management
  - A user can be admin, manager or customer
  - Admin is the super user with all permissions.
  - Users (customer, admin and manager) will have information such as- user name, a user
  - id (unique across the system), phone number, and email id, and address.
  - An existing user should log into the system with user id and password.
  - New customers are permitted to register.
  - Manager/admin can add or delete items, modify details about the items (price/qty/offers etc.)
  - A user can withdraw himself from the Application.
  - Password change (reset) facility is required.
### Admin/manager publishing item details
  - Manager or admin users should be allowed to publish the details of the items made available for sale. Details needed are item_name, item_code, price, offer if any, qty available, delivery time etc.
  - A manager or admin can delete the published item whenever required.
### Customer order management
  - A customer should be allowed to view/search the items published/available for sale.
  - Select items to the cart.
  - Drop items from the cart if required.
  - Request for estimation (total cost) for the items selected.
  - Confirm order and make payment
  - User should get a confirmation message with expected delivery date.
  - User will have a Wallet from where payments will be made, and user can top-up the wallet if necessary. But at the time of registration must start with minimum of 1000/-.
### Other functionality
  - Admin user should be able to generate reports like – items sold on a date, customer order details(summary) for a month, item stock status etc.
  - Any user can generate his order history (summary) for a given month.
## Overview
https://prezi.com/view/sFuMp9wlno5v0vB5dnL5/

## Screenshots
<img width="1425" alt="Screenshot 2022-11-14 at 2 29 58 AM" src="https://user-images.githubusercontent.com/97559428/201544349-659e5a3c-b456-4705-ac9d-bc0e61b0f0b2.png">

## Installation

Install my-project with npm for frontend part

```bash
  npm install
  cd my-app
  npm start
```

    
## Tech Stack
- HTML
- CSS
- JavaScript
- ReactJS
- Java
- SpringBoot
- MySQL
- JDBS
