class MainController < ApplicationController

	layout :get_action_layout
	before_filter :get_action_layout

	def index
		
	end

	def welcome
	end

	def get_action_layout
		if action_name == "index"
			"main"
		else
			"application"
		end
	end

end
