# MyReads Project

This is my submission for React nano program first project , my reads, it is all about a bookshelf app that allows user to select and categorize books he has read, are currently reading, or want to read.

The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
Currently Reading
Want to Read
Read

Each book has a control that lets a user selects the shelf for that book. When he selects a different shelf, the book moves there. Note that the default value for the control woukd be always be the current shelf the book is in.

## TL;DR

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start` or 'yarn start'

## Source code Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    |__Components
        |__Books.js # The Book component that represent a book object on a shelf.
        |__BookShelf.js # the shelf component that represents a shelf object , it has one child , a book component , and two parents , Library and Search Components.
        |__Library.js # it is the parent component where the shelves data are formnulated and passed down to         BookShelf  component , it represents the user's own library i.e. list of how own books
        |__Search.js #  a search component enables the user to search for a book and add it to his own librray.
    |__css 
        |__index.css # Global styles. You probably won't need to change anything here.  
        ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    |__utils
         ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
├── App.js # This is the root of your app. Contains static HTML right now.
├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
└── index.js # You should not need to modify this file. It is used for DOM rendering only.
