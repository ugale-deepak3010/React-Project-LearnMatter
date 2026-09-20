# My Notes









Facebook faced issue.

Not getting reaction, notification, comments.


---------------------------


DOM 

Document Object Model




# What is React?

React is not framework.
React is not language.

React is Frontend Library!

# React name becuase its React on update State like variables and all. It's heart of React! Main feature of react!




# Why need to use React?

React is efficient.
React is lightweight library.


# How to use React? 

For creating reusable components.
Make the realtime change data
Link the data


# When need to use React?

When large level of app.

# Setup 


1. VS Code
2. Web browser
3. node js




# No Boilerplate code.


vite  is company who provide the boilerplate code.

vite = in french QUICK! (pronuncation veet)


provide all boilerplate code

For documentation.
https://vite.dev/

https://nodejs.org/en/download

# Install node js

>npm -v
10.9.3

>node --version
v22.20.0



# Gettting started.


1. visit https://vite.dev/guide/

>npm create vite@latest


it will ask project name, library (React selected), javascript selected (Not selected TS!)





# Understanding the project structure

{this_is_called_interpolation}



1. App.jsx 

I edited few lines for play index page!

2. node_modules

just for reference. it's storing libraries. None of business.

React related stuff.

3. 

# What is component?

Mostly repeated portion is component!

0. Body
1. ----> Parent Componennt
2. ----> Child Component1, Component2 ... Component3

Each large portion is compoent.
Each repeatativ item is component
Even button also component.

__________

Component is a Function which return!
Component is superpower of html

<h1>2+2</h1> = 2+2

But in jsx component
<h1>{2+2}</h1> = 4

________

How looks Component.


import React from 'react'   -- Optional

function App() {  
  return (  
    <div>Hello</div>  -- it's not html! it's jsx! 
  )  
}  
  
export default App  -- export function globally.




# VS Extensions

1. Prettier
2. ES7 + React/ Redux/ React-Native snippet


# Write the code  - Time to makes hand dirty!


Delete App.css file
Clean make empty App.jsx remove all lines.
clean the index.css

1. Write in App.jsx file

type 'rfce' enter so it will provide component

2. import the tailwand

https://tailwindcss.com/docs/installation/using-vite

npm install tailwindcss @tailwindcss/vite



3. index.css

add this line 
`@import "tailwindcss";`



4. App is parent component hence everything must be within App.jsx
5. Add  AutoIncrementer.jsx and rfce execute.
6. Add the line 

in App.jsx

<div>
      <div className='text-3xl font-bold underline' >Hello</div>
      <AutoIncrementer /> here we {AutoIncrementer}
    </div>











# Rules

1. in jsx why don't use `class` and why use `className`?
=> <h1 className="heading" > Hello </h1>

Basically above code is jsx not html! Hence jsx will convert in js and in js class is reserve word! hence react provide className


# Difference between <AutoIncrementer /> vs {AutoIncrementer}

1. Html render component
2. interpolation provide raw js function!



# WHAT IS TAILWIND PreFlight?

Tailwind remove all browser default style!
Like 
Heading tags,
colors,
buttons

So browser will not render heading or color red in browser!
Must use class!











































































































































































































































































































































































































































































































































































































































































































































































