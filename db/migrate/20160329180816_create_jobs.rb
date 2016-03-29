class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
			t.string :title, null: false
			t.string :type, null: false, default: "full_time"
			t.integer :salary, null: false
			t.string :location, null: false
			t.string :descriptopn, null: false
			t.integer :employer_id, null: false
			t.boolean :status, null: false, default: true
			t.timestamps
    end

		add_index :jobs, :title
		add_index :jobs, :type
		add_index :jobs, :salary
		add_index :jobs, :location
		add_index :jobs, :employer_id

  end
end
