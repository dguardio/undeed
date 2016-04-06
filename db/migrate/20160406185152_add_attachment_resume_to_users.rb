class AddAttachmentResumeToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.attachment :resume
    end
  end
end
