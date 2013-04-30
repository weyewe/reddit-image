class SubRedditsController < ApplicationController
  def index
    render json: SubReddit.order("id DESC").all
  end
end
