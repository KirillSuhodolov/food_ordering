# == Schema Information
#
# Table name: menu_foods
#
#  id         :integer          not null, primary key
#  food_id    :integer
#  menu_id    :integer
#  user_id    :integer
#  is_visible :boolean          default(TRUE)
#  created_at :datetime
#  updated_at :datetime
#

class MenuFood < ActiveRecord::Base
  belongs_to :menu
  belongs_to :food

  validates :food, uniqueness: { scope: :menu }

  after_create :create_menu_foods
  after_destroy :destroy_menu_foods

  private

  def destroy_menu_foods
    current_menu = self.menu
    food = self.food
    menus = Menu.where('day > ?',  current_menu.day)

    menus.each do |menu|
      menu_food = menu.menu_foods.find_by food: food
      menu_food.destroy if menu_food
    end
  end

  def create_menu_foods
    current_menu = self.menu
    food = self.food
    menus = Menu.where('day > ?',  current_menu.day)

    menus.each do |menu|
      menu_food = menu.menu_foods.find_by food: food

      unless menu_food
        MenuFood.create(
            {
                menu: menu,
                food: food
            }
        )
      end
    end
  end

end
