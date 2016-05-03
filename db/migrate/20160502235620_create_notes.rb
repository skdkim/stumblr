class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :author_id, indexed: true, null: false
      t.integer :noter_id, indexed: true, null: false
      t.integer :post_id, indexed: true, null: false
      t.string :note_type, null: false

      t.timestamps null: false
    end
  end
end
