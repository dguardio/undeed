Rails.application.routes.draw do

  root to: 'static_pages#root'

	resources :users, only: [:create, :new]
	resource :session, only: [:new, :create, :destroy]

	namespace :api, defaults: {format: :json} do
    resources :jobs, only: [:index, :show]
    resources :myjobs, only: [:index, :show, :create, :destroy, :update]
    resources :locations, only:[:index, :show]
    resource  :session, only: [:show, :create, :destroy]
  	resources :users, only: [:create, :new]
  end
end
