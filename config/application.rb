require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module FoodOrdering
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.time_zone = 'Minsk'

    config.i18n.enforce_available_locales = false
    # config.assets.paths << Rails.root.join('bower_components')
    config.autoload_paths << "#{Rails.root}/app/enumerations"
    config.autoload_paths += %W["#{config.root}/app/validators/"]

    config.action_mailer.default_url_options = {
        :host => 'kuskus.by'
    }
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.smtp_settings = {
        :address              => "smtp.mandrillapp.com",
        :port                 => 587,
        :domain               => 'kuskus.by',
        :user_name            => 'k.suhodolov@sumatosoft.com',
        :password             => 'fjYjxPYWJNR6yoPNPl8NSw',
        :authentication       => 'login',
        :enable_starttls_auto => true
    }
  end
end
