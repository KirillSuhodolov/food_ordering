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

class Food < ActiveRecord::Base
  belongs_to :food_category
  has_many :orders, through: :order_foods
  has_many :order_foods
  has_many :menu_foods

  scope :current_deleted, ->(menu) { deleted.joins(:menu_foods).where(menu_foods: { menu: menu }) }

  scope :existing, ->() { where(is_deleted: false) }
  scope :deleted, ->() { where(is_deleted: true) }

end


