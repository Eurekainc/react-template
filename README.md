# React-template

This react template provides you with all the basic tools for developing a *react* app, using *redux* as your single source of truth.

Besides a helpful folder structure, it also provides a strict linter and a pre-commit hook in order to keep your project's code always clean.

It uses *express* as webserver and includes *webpack* configurations both for development (*dotenv*, *hot-reload*, etc) and for production (minification tools), *sass* support, and *axios* for network requests.

A single instance of *axios* is ready to be used, in order to customize properties about your requests (add jwt token, globally mock a specific url, etc)

Setup & Start
---
First, create your `.env` file from `.env.example`, specifying in which port will it run.

Then run `yarn start` to start the server.

If you want to start the server with the production bundle, just run `yarn startprod`. (Note: include this in your Procfile if you want to deploy to heroku)
