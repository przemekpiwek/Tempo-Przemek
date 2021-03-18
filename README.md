# Tempo-Przemek

# Starting the app

Git clone the repo into your terminal

```
git clone https://github.com/przemekpiwek/Tempo-Przemek.git
```

Install dependencies and start app

```
yarn install && yarn start
```

# Process

I always begin my projects by creating a scaffolding of my directories. I usually like to organize them in Pages, Containers, Components, and Utils on the frontend and Handlers, Utils on the backend.

After reading the requirements, I assumed accessing the data would be sensitive information, so I build out a backend to fetch the data rather than querying from the frontend. Next, I thought about what UI components would be reusable and created their appropriate components. I used styled-components as I am a fan of the CSS-in-JSS paradigm.

Initially, I was a little confused about what was expected in state-management requirements. I kept it simple by adding a context that provided all the fetched data to the different pages.
