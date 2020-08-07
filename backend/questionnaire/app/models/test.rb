class Test < ApplicationRecord
    has_many :questions
    belongs_to :admin, optional:true
    serialize :answers
end
