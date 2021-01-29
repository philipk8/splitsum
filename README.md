# Splitsum

Splitsum is a clone of Splitwise, an app that makes it easy to split bills with friends and family. This is done by organizing all shared expenses in one place, so that everyone can see who they owe. 

[Live Link](https://splitsum.herokuapp.com/#/)

## Technologies
- Frontend: React, Redux, HTML5, CSS3, Javascript
- Backend: Ruby on Rails, PostreSQL

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
  - Search feature in selection of friends. Friend results appear as you type in search bar. 
  - Multiple friend selection feature to update expense tracking across all friends involved.
  - Ability to select which friend paid for the expense item.
  - Users are able to enter information about the expense like the amount, description, and notes.

### All expenses view 
- A summary page of all expenses related to the user. 

## Planned features
- Ability to settle expenses between friends, updating all related oweings thereafter. 
- Ability to change the split proportion between friends. The current default is an equal split. 
  




