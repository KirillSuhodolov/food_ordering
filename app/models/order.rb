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
  has_many :order_foods, dependent: :destroy

  scope :by_date, ->(day) { where(day: day) }
  scope :by_user, ->(user) { where(user: user) }

  after_save do
  	if is_processed_changed? and !is_processed_was and is_processed
	  UserMailer.process_order(self).deliver
	end
  end
end