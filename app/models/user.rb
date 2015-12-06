# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  company_id             :integer
#  name                   :string(255)
#  phone                  :string(255)
#  address                :string(255)
#  is_subscribe           :boolean          default(TRUE)
#  position               :integer
#  status                 :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  authentication_token   :string(255)
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :token_authenticatable

  validates :email, presence: true, uniqueness: true

  has_many :orders
  belongs_to :company

  scope :users, -> () { where(status: nil) }

  before_create do |user|
    if user.company.nil? and user.status.nil?
      user.company = Company.first
    end
  end

  after_create do
    UserMailer.registration(self).deliver unless self.is_admin
  end

  def is_admin
    status == UserStatus::ADMIN
  end
end
