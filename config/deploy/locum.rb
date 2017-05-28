role :app, %w(hosting_pasha@phosphorus.locum.ru)
role :web, %w(hosting_pasha@phosphorus.locum.ru)
role :db, %w(hosting_pasha@phosphorus.locum.ru)

set :ssh_options, forward_agent: true
set :rails_env, :production
