# Schema Information

## jobs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
jobtype     | text      | not null, indexed, default: full_time
salary      | integer   | not null, indexed
location    | string    | not null, indexed
description | text      | not null
employer_id | integer   | not null, foreign key (references users), indexed
active      | boolean   | not null, default: true

## myjobs
column name   | data type | details
------------  |-----------|-----------------------
id            | integer   | not null, primary key
status      | string    | not null
seeker_id     | integer   | not null, foreign key (references users), indexed
job_id        | integer   | not null, foreign key (references users), indexed



## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
real_name       | string    |
phone_number    | string    | optional
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
