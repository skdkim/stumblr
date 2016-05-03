class ChangeTableName < ActiveRecord::Migration
  def change
    rename_table :relationships, :follows
  end
end
