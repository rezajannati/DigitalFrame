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

ActiveRecord::Schema.define(version: 20140820004755) do

  create_table "pictures", force: true do |t|
    t.string   "name"
    t.string   "loc"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar"
    t.integer  "user_id"
  end

  add_index "pictures", ["user_id"], name: "index_pictures_on_user_id"

  create_table "slideshowpictures", force: true do |t|
    t.integer  "picture_id"
    t.integer  "slideshow_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "slideshowpictures", ["picture_id"], name: "index_slideshowpictures_on_picture_id"
  add_index "slideshowpictures", ["slideshow_id"], name: "index_slideshowpictures_on_slideshow_id"

  create_table "slideshows", force: true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "interval",   default: 3
  end

  add_index "slideshows", ["user_id"], name: "index_slideshows_on_user_id"

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "encrypted_password"
    t.string   "salt"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
