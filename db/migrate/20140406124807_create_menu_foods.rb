class CreateMenuFoods < ActiveRecord::Migration
  def change
    create_table :menu_foods do |t|
      t.integer :food_id
      t.integer :menu_id
      t.boolean :is_visible, default: true

      t.timestamps
    end
  end
end
