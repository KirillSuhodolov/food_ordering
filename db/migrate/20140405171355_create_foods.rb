class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name, default: 'Кликните чтобы изменить название'
      t.text :composition, default: 'Кликните чтобы изменить состав'
      t.integer :food_category_id
      t.integer :cost, default: 'Кликните чтобы изменить цену'
      t.timestamps
    end
  end
end