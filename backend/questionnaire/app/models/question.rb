class Question < ApplicationRecord
    belongs_to :admin, optional: true
    belongs_to :test, optional: true
    serialize :choices, Array
    # serialize :text, Array
end
