class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :token_authenticatable

  validates :email, presence: true, uniqueness: true

  has_many :order
  belongs_to :company
  
  scope :users, -> () { where(status: nil) }

  before_create do |user|
  	if user.company.nil? and user.status.nil?
	  	user.company = Company.first
	  end
  end
end