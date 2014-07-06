require 'test_helper'

class MasterControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get camera" do
    get :camera
    assert_response :success
  end

  test "should get pictures" do
    get :pictures
    assert_response :success
  end

  test "should get slideshows" do
    get :slideshows
    assert_response :success
  end

  test "should get layouts" do
    get :layouts
    assert_response :success
  end

  test "should get settings" do
    get :settings
    assert_response :success
  end

end
