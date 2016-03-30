# Undeed

[Heroku link][heroku] Coming Soon

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Undeed is a web application inspired by Indeed built using Ruby on Rails and React.js. Undeed allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Search / read / save jobs
- [ ] Create job applications
- [ ] Organize Myjobs

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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Job Model (2 days)

**Objective:** Jobs can be read by User.

- [ ] create `Job` model
- [ ] seed the database with a small amount of test data
- [ ] read search Job (`JobsController`)
- [ ] jBuilder views for Jobs
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each job component, building out the flux loop as needed.
  - [ ] `JobIndex`
  - [ ] `JobIndexItem`

### Phase 3: Filtering jobs and styling (2 days)

**Objective:** Jobs can be search by User

- [ ] Add FilterParams store, actions and other flux structure.
- [ ] add new components
- [ ] add styling

### Phase 4: Myjobs (1.5 days)

**Objective:** Jobs can be organized with myjobs

- [ ] create `Myjob` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching myjobs for user
  - [ ] move jobs to one of the Myjob categories
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
