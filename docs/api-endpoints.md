# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `Job /session`
- `DELETE /session`

## JSON API

### Jobs

- `GET /api/jobs`
  - jobs index/search
- `GET /api/jobs/:id`
  - individual job detail view


### Application
- `POST /api/jobs/:id/apply`
  - applies to the job
  - send out an email to the employer (if I get there), and a confirmation to the user


### Myjobs

- `GET /api/myjobs`: all the jobs user browsed
- `PATCH /api/myjobs/:id`: update the categories of the jobs
  - [saved, applied, interviewing, offered, hired, visited, archived]
- `DELETE /api/myjobs/:id` delete a myjob
