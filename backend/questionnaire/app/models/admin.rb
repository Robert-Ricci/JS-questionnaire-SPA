class Admin < ApplicationRecord
    has_many :tests
    has_many :questions 
end
