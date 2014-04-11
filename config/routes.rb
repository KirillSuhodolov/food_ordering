FoodOrdering::Application.routes.draw do
  devise_for :users, controllers: {
      registrations: 'api/v2/registrations',
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
      end
   
      resources :companies, except: [:new, :edit]
      resources :menus, except: [:new, :edit]
      resources :menu_foods, except: [:new, :edit]
      resources :food_groups, except: [:new, :edit]
      resources :order_foods, except: [:new, :edit]
      resources :orders, except: [:new, :edit]
      resources :food_categories, except: [:new, :edit]
      resources :users, only: [:show, :index]
      resources :foods, except: [:new, :edit]
    end
  end
  get '*foo', :to => 'landing#index'
end
