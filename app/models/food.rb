# == Schema Information
#
# Table name: foods
#
#  id               :integer          not null, primary key
#  name             :string(255)
#  composition      :text
#  food_category_id :integer
#  cost             :integer          default(0)
#  position         :integer
#  user_id          :integer
#  is_deleted       :boolean          default(FALSE)
#

class Food < ActiveRecord::Base
  belongs_to :food_category
  has_many :orders, through: :order_foods
  has_many :order_foods

  scope :existing, ->() { where(is_deleted: false) }

  after_create do |food|
    menus = Menu.where('day > ?',  Date.current)

    menus.each do |menu|
      MenuFood.create({
                          menu: menu,
                          food: food
                      })
    end
  end
end

