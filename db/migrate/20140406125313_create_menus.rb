class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.date :day
      t.time :available

      t.timestamps
    end
  end
end
