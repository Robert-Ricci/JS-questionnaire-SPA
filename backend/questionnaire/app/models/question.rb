class Question < ApplicationRecord
    belongs_to :admin, optional: true
    serialize :choices, Array
    serialize :text, Array
end
