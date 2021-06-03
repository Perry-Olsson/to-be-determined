<a href="https://expo.io/@perry-olsson/todo-or-not-todo"><h1 align="center">Todo or Not Todo</h1></a>

<h4 align="center">A failed collaboration turned todo app</h4>

<h5 align="center">iOS preview: <a href="https://appetize.io/embed/ynp0qcfphh663b67hhgzk28yfm">https://appetize.io/embed/ynp0qcfphh663b67hhgzk28yfm</a></h5>

<h5 align="center">Android preview: <a href="https://appetize.io/embed/p0bf0m7d7m15twcgabtenuj9nw">https://appetize.io/embed/p0bf0m7d7m15twcgabtenuj9nw</a></h5>

## Project Status -- ON HOLD

This was originally an impromtu collaboration with a friend whose education was put on hold via the pandemic in the attempt to build a social/event planning application. I built the account creation and authentication and ended up with an application you could register and log into just to find a blank page. I wanted at least something to show for, so I spent a few days building my first todo app.

In the future I plan on scrapping the todo portion and creating a subscription management application in its place. As I've been known to continue paying for subscriptions I don't use any longer.

## Feature Overview

- React Native application (functioning builds for both android and ios)
- Account creation/authentication with server and client side validation.
- Persistant sessions
- Email account confirmation using SMTP
- Create and delete persistant todo items with bulleted notes
- Account deletion
- Loading display module that targets individual components

## Run Locally

1. clone the repo
2. install <a href="https://docs.expo.io/get-started/installation/">Expo</a> if needed.

#### Api setup

- With Docker (recommended)

1. run `npm install` in the API directory
2. Create a .env file following the template
3. Run `docker-compose up -d`
4. `npm run db:init`
5. `npx mikro-orm migration:up`
6. `npm run dev` OR `npm run watch` and `npm run dev:js` in a new terminal

#### Client set up

1. run `npm install` in the Client directory
2.
