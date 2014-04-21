FoodOrdering::Application.routes.draw do
  devise_for :users, controllers: {
      registrations: 'api/v1/registrations',
      passwords: 'passwords',
      sessions: 'api/sessions',
  }, only: []

  namespace :api do
    devise_scope :user do
      post   'sign_in'  => 'sessions#create', :as => :new_user_session
      delete 'sign_out' => 'sessions#destroy', :as => :destroy_user_session
    end

    namespace :v1 do
      devise_scope :user do
        post 'users', :to => 'registrations#create'
        put 'users/:id', :to => 'registrations#update'
        post 'generate_new_password_email', to: 'registrations#generate_new_password_email'
        post 'recover_password', to: 'registrations#recover_password'

      end

      resources :users, only: [:show, :index]
   
      resources :companies, except: [:new, :edit]
      resources :menus, except: [:new, :edit]
      resources :menu_foods, except: [:new, :edit]
      resources :food_groups, except: [:new, :edit]
      resources :order_foods, except: [:new, :edit]
      resources :orders, except: [:new, :edit]
      resources :food_categories, except: [:new, :edit]
      resources :foods, except: [:new, :edit]
    end
  end
  get '*foo', :to => 'landing#index'
  # get 'recover-password', to: 'landing#index', as: 'edit_user_password'
end