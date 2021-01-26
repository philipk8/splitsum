class CreateExpenseDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_details do |t|
      t.integer :author_id
      t.string :category
      t.string :description
      t.string :notes

      t.timestamps
    end
  end
end
