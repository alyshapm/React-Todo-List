# To-do list with React ✅

#### -- Project Status: [Complete]

## 📒 Project descrption
This git repository contains the source code for a To-Do application built using React. The application allows users to create and delete tasks, as well as mark them as completed. The project is structured using the component-based architecture of React, with reusable components such as TodoList, TodoForm, and Todo.

[![PPT](https://img.shields.io/static/v1.svg?label=Project&message=PPT&logo=microsoft-powerpoint&style=social)]()
[![report](https://img.shields.io/static/v1.svg?label=Project&message=Report&logo=microsoft-word&style=social)]()

## 📹 Demo
![Demo gif](https://github.com/alyshapm/react-todo/blob/main/rsrc/demo.gif)

## 📁 File Directory

- App.js: This file serves as the main entry point for the application and contains the overall layout and structure of the app. It imports and renders the TodoList component, which displays the list of tasks.

- Title.js: This file contains the Title component, which displays the title of the application at the top of the page. It is imported and used within the App component.

- TodoList.js: This file contains the TodoList component, which is responsible for rendering the list of tasks. It imports and renders multiple Todo components, which represent individual tasks.

- TodoForm.js: This file contains the TodoForm component, which displays the form for creating new tasks. It handles user input and calls a function in the TodoList component to add the new task to the list.

- Todo.js: This file contains the Todo component, which represents an individual task in the list. It displays the task's title and completion status, and allows the user to delete the task.

- Alysha.js: This file displays the full name and student ID information and used within the App component.

## Component Hierarcy
![Component Hierarcy](rsrc/hierarchy.png)

## Dependencies
* ReactJS
* FontAwesome icons

## Getting started

1. Clone this repo.
```bash
git clone https://github.com/alyshapm/react-todo
```
2. Switch directory to the app folder.
```bash
cd react-todo
```
3. Run file.
```bash
npm start
```
