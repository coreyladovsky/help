
Rails.application.routes.draw do
  get 'businesses/index'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :businesses do
      resources :reviews, except: [:show, :destroy]
      get "reviewers", on: :member
      resources :photos, only: [:index]
    end
    resources :photos
    resources :reviews, only: [:show, :destroy]
  end
end
