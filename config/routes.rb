Rails.application.routes.draw do

  root to: 'static_pages#root'

	resources :users, only: [:create, :new]
	resource :session, only: [:new, :create, :destroy]

	namespace :api, defaults: {format: :json} do
    resources :jobs, only: [:index, :show]
  end
end
