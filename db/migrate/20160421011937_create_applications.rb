class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.string :real_name, null: false
      t.string :email, null: false
      t.integer :job_id, null: false
      t.integer :user_id
      t.text :cover_letter
      t.attachment :resume


      t.timestamps
    end
  end
end
