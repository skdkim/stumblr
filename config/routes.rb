Rails.application.routes.draw do
	root to: 'static_pages#root.html'

	namespace :api, defaults: {format: :json} do
		resource :user, only: [:new, :create, :destroy, :show]
		resource :session, only: [:new, :create, :destroy, :show]
		resource :posts
	end
end
