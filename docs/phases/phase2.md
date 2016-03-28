# Phase 2: Flux Architecture and Job CRUD (1.5 days)

## Rails
### Models
* Job

### Controllers
* Api::JobsController (index, show)

### Views
* jobs/index.json.jbuilder
* jobs/show.json.jbuilder

## Flux
### Views (React Components)
* JobsIndex
  - JobsIndexItem

### Stores
* Job

### Actions
* ApiActions.receiveAlljobs -> triggered by ApiUtil
* ApiActions.receiveSingleJob
* JobActions.fetchAlljobs -> triggers ApiUtil
* JobActions.fetchSingleJob


### ApiUtil
* ApiUtil.fetchAllJobs
* ApiUtil.fetchSingleJob


## Gems/Libraries
* Flux Dispatcher (npm)
