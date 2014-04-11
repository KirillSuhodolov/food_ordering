class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.text :composition
      t.integer :food_category_id
      t.integer :cost, default: 0
      t.integer :position
      t.integer :user_id
    end
  end
end