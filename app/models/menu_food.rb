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
end
