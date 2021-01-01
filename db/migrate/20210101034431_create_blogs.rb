class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :date_posted
      t.boolean :complete

      t.timestamps
    end
  end
end
