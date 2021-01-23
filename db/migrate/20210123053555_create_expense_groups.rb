class CreateExpenseGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_groups do |t|
      t.integer :expense_id, null: false
      t.integer :split_with_id, null: false
      t.integer :paid_by_id, null: false

      t.timestamps
    end

    add_index :expense_groups, :expense_id
    add_index :expense_groups, :split_with_id
    add_index :expense_groups, :paid_by_id
  end
end
