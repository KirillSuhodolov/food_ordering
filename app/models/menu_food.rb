class MenuFood < ActiveRecord::Base
  belongs_to :menu
  belongs_to :food
end
