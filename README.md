# Defining and Managing user stories in GitHub

## Description

This software facilitates the interactions a customer would have with a bank, such as withdrawing, depositing, checking balance, and creating an account.

## Running tests

To run the tests simply navigate to the root directory of this project and run

```sh
npm test
```

If you run into an issue or the above command doesn't work then try running the following sequence of commands

```sh
rm -rf node_modules
npm install
npm list ts-node
npm install ts-node@latest
npm install typescript
```

Then run npm test again
