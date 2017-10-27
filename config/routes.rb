Rails.application.routes.draw do
  get 'businesses/index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :businesses do
      resources :reviews
    end
  end
end
