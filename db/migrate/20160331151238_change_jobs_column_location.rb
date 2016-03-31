class ChangeJobsColumnLocation < ActiveRecord::Migration
  def change
    remove_column :jobs, :location
    add_column :jobs, :location_id, :integer, null: false

    add_index :jobs, :location_id
  end
end
