# == Schema Information
#
# Table name: menus
#
#  id         :integer          not null, primary key
#  day        :date
#  available  :time
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Menu < ActiveRecord::Base
  has_many :menu_foods, dependent: :destroy

  validates :day, uniqueness: true

  before_create do |menu|
    menu.available = Time.parse "#{menu.day} 10:00:00"
  end

  after_create do |menu|
    Food.existing.each do |food|
      MenuFood.create({
                          menu: menu,
                          food: food
                      })
    end
  end

  def self.first_available
    today = DateTime.current
    menu = Menu.where('available > ?', today).order(:available).first
    return menu if menu

    today = (today.wday == 6 || today.wday == 0) ? today.next_week : today.next_day

    Menu.find_or_create_by(day: today)
  end
end
