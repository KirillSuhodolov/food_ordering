class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :company_id
      t.string :name
      t.string :phone
      t.string :address
      t.boolean :is_subscribe, default: true
      t.integer :position, default: 1
      t.string :status
      
      t.timestamps
    end
  end
end