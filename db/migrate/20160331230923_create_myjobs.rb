class CreateMyjobs < ActiveRecord::Migration
  def change
    create_table :myjobs do |t|
      t.string :status, null: false
      t.integer :seeker_id, null: false
      t.integer :job_id, null: false

      t.timestamps
    end
      add_index :myjobs, :seeker_id
      add_index :myjobs, :job_id
      add_index :myjobs, :status
  end
end
