# Splitsum

Splitsum is a clone of Splitwise, an app that makes it easy to split bills with friends and family. This is done by organizing all shared expenses in one place, so that everyone can see who they owe. 

[Live Link](https://splitsum.herokuapp.com/#/)

### Splash Page:
![landing page](http://github.com/philipk8/stock-metrics/blob/main/app/assets/readme_images/splitsum-landing.png?raw=true)

### All Expenses Page:
![index page](http://github.com/philipk8/stock-metrics/blob/main/app/assets/readme_images/splitsum-index.png?raw=true)

### Add Expense Item Modal:
![add expense modal](http://github.com/philipk8/stock-metrics/blob/main/app/assets/readme_images/splitsum-addexp.png?raw=true)

## Technologies
- Frontend: React, Redux, HTML5, CSS3, Javascript
- Backend: Ruby on Rails, PostreSQL

## Callout Features

### Add Expense Modal
- Modal pop-up for adding expenses.
- Live search bar for friends to include in expense item. 
    - Live updating of friends list as user types into search field. 
    - Ability to click on user searched to add to friends added list.
- Dropdown menu for who paid. Selection of User or any added friends. Backend calculates oweings and total amounts are updated.
- The amount owed by each friend is automatically shown to the user as the expense amount is typed.

### Splitting expenses between multiple parties
- Each expense added has a feature to add any number of friends to split the expense with and to select one friend who paid the expense.
- To acheive the updating and calculations on the backend, I created a seperate expense_group table that saves each member related to the expense. The model then calculates the ledger owed at the user level using ActiveRecord queries, which is then updated on the frontend.

## Features

### User Authentication
- Ability to create an account, sign in, and log in using credentials.
- Demo user login functionality created for testing site without sign up requirement. 
- Main page of information is protected from view if not signed in.

### Dashboard
- Landing page for users where they are able to view their overall ledger of amount owed to them or to others.

### Adding and viewing expenses with friends
- Ability to add friends by selecting from a user list.
- Ability to remove friends.
- A view of all related expenses between you and a friend, as long as both of you are on the expense item.

### Expenses
- Ability to add expenses with a pop-up form. 
  - Users are able to enter information about the expense: add friends, who paid, amount, description, and notes.

## Planned features
- Ability to settle expenses between friends, updating all related oweings thereafter. 
- Ability to change the split proportion between friends. The current default is an equal split. 