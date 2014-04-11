class CreateFoodGroups < ActiveRecord::Migration
  def change
    create_table :food_groups do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
