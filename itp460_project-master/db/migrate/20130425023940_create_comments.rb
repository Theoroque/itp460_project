class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :comment
      t.boolean :approved
      t.references :article
      t.string :name

      t.timestamps
    end
    add_index :comments, :article_id
  end
end
