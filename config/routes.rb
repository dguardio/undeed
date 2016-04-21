Rails.application.routes.draw do

  root to: 'static_pages#root'

	resources :users, only: [:create, :new]
	resource :session, only: [:new, :create, :destroy]

	namespace :api, defaults: {format: :json} do
    resources :jobs, only: [:index, :show, :create]
    resources :myjobs, only: [:index, :show, :create, :destroy, :update]
    resources :locations, only:[:index, :show, :create]
    resource  :session, only: [:show, :create, :destroy]
  	resources :users, only: [:create, :new, :show]
    resource :users, only: [:update]
    resources :applications, only: [:index, :show, :create]
  end

  get "auth/facebook/callback", to: "omniauth#facebook"
end
