require 'ice'
require 'ice/cubeable'
require 'ice/cube_association'
require 'ice/base_cube'

require 'ice/railtie'
require 'ice/cube_helpers'
require 'rails'

require 'ice/eco_template/handler'

IceJavascriptHelpers = []
IceCoffeescriptHelpers = []

ActionView::Template.register_template_handler :eco, Ice::EcoTemplate::Handler