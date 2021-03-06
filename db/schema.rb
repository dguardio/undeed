# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160421011937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.string   "real_name",           null: false
    t.string   "email",               null: false
    t.integer  "job_id",              null: false
    t.integer  "user_id"
    t.text     "cover_letter"
    t.string   "resume_file_name"
    t.string   "resume_content_type"
    t.integer  "resume_file_size"
    t.datetime "resume_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "title",                             null: false
    t.string   "jobtype",     default: "full_time", null: false
    t.integer  "salary",                            null: false
    t.string   "description",                       null: false
    t.integer  "employer_id",                       null: false
    t.boolean  "status",      default: true,        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "location_id",                       null: false
  end

  add_index "jobs", ["employer_id"], name: "index_jobs_on_employer_id", using: :btree
  add_index "jobs", ["jobtype"], name: "index_jobs_on_jobtype", using: :btree
  add_index "jobs", ["location_id"], name: "index_jobs_on_location_id", using: :btree
  add_index "jobs", ["salary"], name: "index_jobs_on_salary", using: :btree
  add_index "jobs", ["title"], name: "index_jobs_on_title", using: :btree

  create_table "locations", force: :cascade do |t|
    t.string   "city",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "locations", ["city"], name: "index_locations_on_city", using: :btree

  create_table "myjobs", force: :cascade do |t|
    t.string   "status",     null: false
    t.integer  "seeker_id",  null: false
    t.integer  "job_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "myjobs", ["job_id"], name: "index_myjobs_on_job_id", using: :btree
  add_index "myjobs", ["seeker_id"], name: "index_myjobs_on_seeker_id", using: :btree
  add_index "myjobs", ["status"], name: "index_myjobs_on_status", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",               null: false
    t.string   "real_name"
    t.integer  "phone_number"
    t.string   "password_digest"
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uid"
    t.string   "provider"
    t.string   "resume_file_name"
    t.string   "resume_content_type"
    t.integer  "resume_file_size"
    t.datetime "resume_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
