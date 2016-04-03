# Undeed

[Heroku link][heroku] Coming Soon

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Undeed is a web application inspired by Indeed built using Ruby on Rails and React.js. Undeed allows users to:

- [x] Create an account
- [x] Log in / Log out
- [ ] Search / read / save jobs
- [ ] Organize Myjobs
- [ ] Create job applications

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Job Model (2 days)

**Objective:** Jobs can be read by User.

- [x] create `Job` model
- [x] seed the database with a small amount of test data
- [x] read Job (`JobsController`)
- [x] jBuilder views for Jobs
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each job component, building out the flux loop as needed.
  - [x] `JobIndex`
  - [x] `JobIndexItem`
  - [x] `JobIndexDetail`

### Phase 3: Searching jobs and styling (2 days)

**Objective:** Jobs can be searched by User

- [ ] Add stores, actions and other flux structure.
  - [x] search by job title
  - [x] search by job location
  - [x] real time dropdown selection for job location
  - [ ] real time dropdown selection for job title
- [x] add new components
  - [x] `JobSearch`
- [x] add styling

### Phase 4: Myjobs (1.5 days)

**Objective:** Jobs can be organized with myjobs

- [x] create `Myjob` model and join table
- build out API, Flux loop, and components for:
  - [x] fetching myjobs for user
  - [ ] update myjobs to one of the Myjob status
  - [ ] automatically create 'Myjob' and assign "visited" status when a signed-in user visited a job detail page
- [ ] Style new elements


### Bonus Features (TBD)
- [ ] Upload Resume
- [ ] Employer account to create jobs
- [ ] Email application confirmation
- [ ] Multiple sessions
- [ ] Search History

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
