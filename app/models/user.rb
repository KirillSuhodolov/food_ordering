class User < ActiveRecord::Base
  has_many :order
  belongs_to :company
  
  scope :users, -> () { where(status: nil) }

  before_create do |user|
  	if user.company.nil? and user.status.nil?
	  	user.company = Company.first
	  end
  end
end