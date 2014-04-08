class CreateOrderFoods < ActiveRecord::Migration
  def change
    create_table :order_foods do |t|
      t.integer :food_id
      t.integer :order_id
      t.integer :count	
      t.timestamps
    end
  end
end
