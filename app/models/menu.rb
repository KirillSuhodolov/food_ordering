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

  validates_with MenuValidator

  before_create :set_time

  after_create :create_menu_foods

  def self.first_available
    today = DateTime.current
    menu = Menu.where('available > ?', today).order(:available).first
    return menu if menu

    today = (today.wday == 6 || today.wday == 0) ? today.next_week : today.next_day

    Menu.find_or_create_by(day: today.to_date)
  end

  protected

  def create_menu_foods
    menu = self
    Food.existing.each do |food|
      MenuFood.create({
                        menu: menu,
                        food: food
                      })
    end
  end

  def set_time
    menu = self
    previous_menu = Menu.where('day < ?', menu.day).order(:day).last
    available_time = previous_menu ? previous_menu.available.strftime('%H:%M') : '10:00'
    menu.available = Time.parse "#{menu.day} #{available_time}"
  end
end
