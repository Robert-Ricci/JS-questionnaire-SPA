class Question < ApplicationRecord
    belongs_to :admin, optional: true
    
end
