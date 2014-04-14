# == Schema Information
#
# Table name: orders
#
#  id           :integer          not null, primary key
#  comment      :text
#  user_id      :integer
#  day          :date
#  is_processed :boolean          default(FALSE)
#  created_at   :datetime
#  updated_at   :datetime
#

class Order < ActiveRecord::Base
  belongs_to :user
  has_many :foods, through: :order_foods
  has_many :order_foods

  scope :by_date, ->(day) { where(day: day) }
  scope :by_user, ->(user) { where(user: user) }
end
