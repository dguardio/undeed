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

### Phase 2.0: Job Model (1.5 days)

**Objective:** Jobs can be searched and read by User.

- [ ] create `Job` model
- [ ] seed the database with a small amount of test data
- [ ] read search Job (`JobsController`)
- [ ] jBuilder views for Jobs
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

<!-- ### Phase 2.5: Application Model, API, and basic APIUtil (0.5 days)(may not needed?)
(the real website does not save applications, but directly email them out)

**Objective:** Job Applications can be created through the API.

- [ ] create `Application` model
- [ ] CRUD API for application (`ApplicationsController`)
- [ ] jBuilder views for applications -->

### Phase 2.5: Flux Architecture and Router (1.5 days)

**Objective:** Jobs can be searched and read by User with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each job component, building out the flux loop as needed.
  - [ ] `JobIndex`
  - [ ] `JobIndexItem`

### Phase 3: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 4: Myjobs (1.5 days)

**Objective:** Jobs can be organized with myjobs

- [ ] create `Myjob` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching jobs for user
  - [ ] move jobs to one of the Myjob categories
- [ ] Style new elements

### Phase 5: Allow Complex Styling in Jobs (0.5 days)

**objective:** Enable complex styling of jobs.

- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

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
