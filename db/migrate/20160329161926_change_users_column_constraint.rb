class ChangeUsersColumnConstraint < ActiveRecord::Migration
  def change
		change_column :users, :real_name, :string, :null => true
  end
end
