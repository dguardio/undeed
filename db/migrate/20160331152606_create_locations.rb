class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :city, null: false

      t.timestamps
    end

    add_index :locations, :city
  end
end
