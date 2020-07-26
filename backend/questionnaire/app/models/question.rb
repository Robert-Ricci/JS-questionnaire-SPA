class Question < ApplicationRecord
    belongs_to :test
    belongs_to :admin
end
