# Phase 4: Myjobs (1 day)

## Rails
### Models
* MyJob

### Controllers
* Api::MyJobsController (create, destroy, index, show, update)

### Views
* MyJobs/index.json.jbuilder

## Flux
### Views (React Components)
* MyJobsIndex
  - MyJobIndexItem
* MyJobShow
* MyJobForm

### Stores
* MyJob

### Actions
* ApiActions.receiveAllMyJobs -> triggered by ApiUtil
* ApiActions.receiveSingleMyJob
* ApiActions.deleteMyJob
* MyJobActions.fetchAllMyJobs -> triggers ApiUtil
* MyJobActions.fetchSingleMyJob
* MyJobActions.createMyJob
* MyJobActions.updateMyJob
* MyJobActions.destroyMyJob

### ApiUtil
* ApiUtil.fetchAllMyJobs
* ApiUtil.fetchSingleMyJob
* ApiUtil.createMyJob
* ApiUtil.updateMyJob
* ApiUtil.destroyMyJob
