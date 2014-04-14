# == Schema Information
#
# Table name: companies
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  address    :string(255)
#  position   :integer
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Company < ActiveRecord::Base
  has_many :users
end
