class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.text :comment
      t.integer :user_id
      t.date :day
      t.boolean :is_processed, default: false
      t.timestamps
    end
  end
end