class AddAnswersToTest < ActiveRecord::Migration[6.0]
  def change
    add_column :tests, :answer1, :string
    add_column :tests, :answer2, :string
    add_column :tests, :answer3, :string
    add_column :tests, :answer4, :string
    add_column :tests, :answer5, :string
    add_column :tests, :answer6, :string
    add_column :tests, :answer7, :string
    add_column :tests, :answer8, :string
    add_column :tests, :answer9, :string
    add_column :tests, :answer10, :string
  end
end
