class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.boolean :published
      t.boolean :featured
      t.string :mainPhoto
      t.text :content

      t.timestamps
    end
  end
end
