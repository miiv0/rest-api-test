First, to set up, make sure you have Node.js installed.

Then, in the root directory, run:
```sh
$ npm install
```

This will install all the project dependencies.

Now, to run the project, run the following command:
```sh
$ npm run dev
```

Then, go to your browser and go to `http://localhost:5173`.

You only need to be concerned with two files in the project:
- `index.html`
- `src/main.js`

The way the app is structured, you should do all of your work inside of `src/main.js`--no need to touch `index.html`.
Your goal is grab some stories from Hacker News via their API and display those stories on the page.
Don't worry about styling, for now.

Good luck!
