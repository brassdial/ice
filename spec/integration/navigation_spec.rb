require 'spec_helper'

describe "Navigation" do
  include Capybara
  
  it "should show the show page" do
    @note = Note.create! :name => "note name", :data => "data goes here"
    visit note_path(@note)
    page.should have_content(@note.name)
    page.should have_content(@note.data)
  end

  it "should let us have a mini partial" do
    visit "/partial_demos/easy"
    page.should have_content("Hello From Partial")
  end


  it "should let us have a partial with variables" do
    visit "/partial_demos/with_variable"
    page.should have_content("Hello From Variable")
  end

  it "should let us have a partial with with instance variables" do
    @note = Note.create! :name => "note name", :data => "data goes here"
    visit "/notes"
    page.should have_content(@note.name)
    page.should have_content(@note.data)
  end

  it "has path" do
    @note = Note.create! :name => "note name", :data => "data goes here"
    visit note_path(@note)
    puts page.body
  end

  it "parses navbar" do
    visit "/navigation_demos/sample_nav_bar"
    page.should have_selector('a', :href => "/foo")
  end

end
