class CreateExpenseDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_details do |t|
      t.integer :author_id, null: false
      t.string :category
      t.string :description
      t.float :amount, null: false
      t.string :notes

      t.timestamps
    end

    add_index :expense_details, :author_id
  end
end
