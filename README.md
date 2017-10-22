[![Build Status](https://api.travis-ci.org/metavurt/ng-bla.svg?branch=master)](https://travis-ci.org/metavurt/ng-bla)
[![Dependency Status](https://david-dm.org/metavurt/bowleague.svg)](https://david-dm.org/metavurt/bowleague)
[![devDependency Status](https://david-dm.org/metavurt/bowleague/dev-status.svg)](https://david-dm.org/metavurt/bowleague?type=dev&view=list)

- [Intro](#intro)
- [Requirements](#requirements)
- [Installing](#installing)
- [Running](#running)
- [Configuration](#configuration)
- [Running tests](#running-tests)
- [Goals](#goals)
- [Notes](#notes)
- [Todo](#todo)
- [License](#license)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.4.2.


[Take a look at it here](http://www.weo3.com/bowleague)


# Intro

`bowleague` is a casual bowling league app for league, team, and player tracking.

This app is the culmination of too many lost games over a few missed pins. And, to be honest, quite a lot of beer. Bowling app market is lacking in a easy to use, mobile friendly, accessible fun *league* app for casual league play.


# Requirements

Node >=v6.5.0 and npm >=3.10.3

npm-check-updates for optional below

# Installing

```bash
$ git clone --depth 1 https://github.com/metavurt/bowleague.git [your-choice-name-goes-here]
$ cd [your-choice-name-goes-here]

# install dependencies
$ npm install

# optional, but suggested
# check how current dependencies and dev dependencies are, just in case
$ npm outdated
# based on feedback and personal knowledge, either update all or update singular modules
# if you have npm-check-updates installed, run it and see what it says as well
$ ncu
# if the feedback looks too unstable, then update with 
$ ncu -u
# afterward, delete node_modules
$ rm -rf node_modules
# and then re-run npm install and re-confirm with npm outdated
# disregard obvious misalignments (such as pinned modules based on necessary previous testing) unless large errors are discovered
# if large errors seen, please do me a favor and alert me at https://github.com/metavurt/bowleague/issues
```

# Running
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload as you edit source files.


## Build

Run `ng build` to build the project. Run ng build -prod to build the project. The build artifacts will be stored in the dist/ directory. You need only specify -prod for production build, as AOT is a default attribute of production builds in angular-cli.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


_Does not rely on any global dependencies._


## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


_Does not rely on any global dependencies._


# Goals
- easy to use on mobile; responsive to larger screens
- league owners can admin all
- team leaders can invite/add/edit/delete/confirm team members
- team members can track personal goals
- bowling data tools available to manipulate granularly, spot weak points
- enable league communication for announcements
- RC by Q3 2017
- deliver working app to my lovely DiverseyRiverBowl friends and frenemies, for use and enjoyment, by Q4 2017
- move the goals listed here for each section to official Roadmap in documentation

### Stack
- modern Angular, using angular-cli to start seed
- php RESTful API, using [Slim Framework](https://www.slimframework.com/)
- MySQL, because who doesn't love a good left join??
- **some** [MaterialDesign 2 for Angular](https://github.com/angular/material2) for easy layout/styling
- git - to save our souls when we are so very human and confirm delete at the wrong time


# Notes
- this will evolve to exist as a *production-level* ready app. Testing, compliance, and best practices will be included
- will remain as a live example of different *evolving* areas of Angular - 2017 has been fun so far!
- this app will remain in beta/rc until at least end of Q3 2017


### Landing Page (home)
- list current standings based on last week's results
- list current week matchups with lane assignments
- list top *three* in categories from top ten page

### Teams Page
- Track player stats per week, per game
- Track team stats, progress
- Enable teams to update scores for current week, with confirm from opposing team captain or league owner  maybe:question:

### Players Page

- ~~Track player stats per week, per game~~ - this page more as a directory
- ~~use HighCharts or similar to graph stats~~ - this page more as a directory
- ~~Responsive - yes and using a newer media query approach for break points!!
- player profile can be clicked to go to their page (or team page :question: [undecided])
- per the first two above line items - sortable by player name alpha, team name alpha


# TODO
- finish e2e test paths
- ~~integrate sample data with mockbackend for local testing~~
- implement travis CI
- ~~app-wide styling!~~
- tie in sub-pages (team page, profile page), to parent pages (teams, players)
- ~~install HighCharts~~ (installed D3 instead; more robust and using ngx-charts)
- sass

### Players page
- search capability
- alpha by name, or by team

### teams page
- ~~link to single team page~~



# License

MIT