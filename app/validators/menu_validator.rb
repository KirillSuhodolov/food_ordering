class MenuValidator < ActiveModel::Validator
  def validate(record)
    if record.day.wday == 6 || record.day.wday == 0
      record.errors[:base] << "Menu can't be on weekend"
    end
  end
end
