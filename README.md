# Backend Security: add validation and sanitation

Examine at the provided API

- There are two endpoints
- There is one schema and model
- There is a frontend provided; open index.html with live server
- Edit index.html only if necessary

## Your tasks

Do these in order!

1. Setup the project
    - Make the mongoose connection work
    - Make sure the backend starts
    - Open the "frontend"
    - Both backend and frontend *should* work right away
2. Add validation and sanitation logic to the endpoint
    - Start very simple at first
        - At first just make it so that you are validating the "name" field (min length 3 characters)
    - Note that one of the fields is a telephone number
        - Think about and research telephone numbers
        - What kind of validation and sanitation would be good for this data?
            - Probably [libphonenumber](https://github.com/google/libphonenumber) but the documentation is awful.
            - I used isNumeric with symbols and a limited length range.
3. Test
4. Briefly explain these files
    - package.json
        - assembles the scripts and dependencies for the developer automatically, also builds for deployment
    - .env.example
        - contains secret environment variables such as database users and passwords
    - .gitignore
        - tell git which files to ignore
    - database.js
        - connects the server with the database
    - errorController.js
        - catches errors with server requests and sends them as a response
5. **BONUS** Make it so that the email is saved too!


























🐻