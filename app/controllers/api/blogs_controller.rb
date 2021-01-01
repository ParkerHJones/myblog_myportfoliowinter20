class Api::BlogsController < ApplicationController
    def index 
    render json: Blog.all
    end 

    def show
        render json: Blog.find(params[:id])
    end 

    def create
        @blog = Blog.new(blog_params)
        if @blog.save
        render json: @blog
        else
        render json: { errors: @blog.errors }, status: :unprocessable_entity
    end 

    def update 
      @blog = Blog.find(params[:id])
      if @todo.update(todo_params)
    
      else 
        render json: { errors: @blog.errors }, status: :unprocessable_entity
      end 
    end 
   
    def destroy
        @blog = Blog.find(params[:id])
        @blog.destroy
        render json: { message 'blog deleted'}
    end 

    private
    def blog_params
      params.require(:blog).permit(:title, :date_published, :complete)
    end 
    
end
