# Flux Stores

### JobStore

Holds all persisted job data.

##### Actions:
- `receiveAllJobs`
- `receiveSingleJob`

##### Listeners:
- `JobIndex` (passes to `JobIndexItem` via props)
- `JobDetail`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`



### MyJobStore

Holds all persisted myjob data that belongs to a user.

##### Actions:
- `receiveAllMyjobs`

##### Listeners:
- `JobIndex` (passes to `JobIndexItem` via props)
