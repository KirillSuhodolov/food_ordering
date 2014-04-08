class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.text :comment
      t.integer :user_id
      t.integer :cost, default: 0
      t.timestamps
    end
  end
end