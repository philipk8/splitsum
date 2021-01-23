class CreateExpenseDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_details do |t|
      t.integer :author_id, null: false
      t.string :category
      t.string :description
      t.string :notes
      t.float :amount, null: false

      t.timestamps
    end

    add_index :expense_details, :author_id
  end
end
