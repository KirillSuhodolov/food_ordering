class CreateFoodCategories < ActiveRecord::Migration
  def change
    create_table :food_categories do |t|
      t.string :name
      t.integer :food_group_id
      t.integer :position
      t.integer :user_id

    end
  end
end