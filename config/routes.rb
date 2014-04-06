FoodOrdering::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :companies, except: [:new, :edit]
      resources :menus, except: [:new, :edit]
      resources :menu_foods, except: [:new, :edit]
      resources :food_groups, except: [:new, :edit]
      resources :order_foods, except: [:new, :edit]
      resources :orders, except: [:new, :edit]
      resources :food_categories, except: [:new, :edit]
      resources :users, except: [:new, :edit]
      resources :foods, except: [:new, :edit]
    end
  end
  get '*foo', :to => 'landing#index'
end
