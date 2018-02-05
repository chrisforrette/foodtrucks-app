# Food Trucks App

Food Trucks frontend app

## Requirements

* [Node.js](https://nodejs.org) 9.x
* [Terraform](https://www.terraform.io/) 0.10.x (for provisioning)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (for provisioning)

## Quick Start

This was created with [Create React App](https://github.com/facebook/create-react-app), so everything [in their user guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) should apply here.

Create a `.env` and set the API URL with the `REACT_APP_API_URL` environment variable. You can run [chrisforrette/foodtrucks-api](chrisforrette/foodtrucks-api) for this, or point it at the staging API:

```sh
REACT_APP_API_URL="http://staging-food-trucks-api.herokuapp.com"
```

Activate Node version, install dependencies, and start the local server:

```sh
nvm use
npm i
npm start
```

## Provisioning

[Terraform](https://www.terraform.io/) is used to provision a server and addons on [Heroku](https://www.heroku.com). `Makefile` has its own `plan` and `apply` commands, wrapping the Terraform commands of the same name for ensuring proper data-passing.

To create a Terraform, login with the Heroku CLI:

```sh
heroku login
```

Then run:

```sh
make plan ENV=staging TAG=1.2.3
```

Assuming the plan looks correct, apply it, provisioning server components:

```sh
make apply ENV=staging
```

## CircleCI

CircleCI is configured to automatically deploy everything merged to `master` to a staging environment, and to deploy every [Semver](https://semver.org/)-like tag (e.g. v1.5.2) to a production environment. In order to do that, those environments must be set up first using Terraform following the [Provisioning](#provisioning) instructions above, and the CircleCI project needs `HEROKU_EMAIL` and `HEROKU_AUTH_TOKEN` environment variables in order to successfully execute the deployment script at `scripts/deploy.sh`.

This runs on Heroku using the Node.js buildpack and the [Heroku static buildpack](https://github.com/heroku/heroku-buildpack-static). The [CircleCI 2.0 Heroku deployment instructions](https://circleci.com/docs/2.0/deployment_integrations/#heroku) were used to set up Circle deployment, including the `setup-heroku.sh` script, which can be found in the `.circleci/` directory, along with a deployment SSH key pair that needs to be added to any Heroku project you want to deploy to.

