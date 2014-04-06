class CreateFoodGroups < ActiveRecord::Migration
  def change
    create_table :food_groups do |t|

      t.timestamps
    end
  end
end
