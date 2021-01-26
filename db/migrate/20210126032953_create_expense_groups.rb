class CreateExpenseGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_groups do |t|
      t.integer :expense_id
      t.integer :split_with_id
      t.integer :paid_by_id

      t.timestamps
    end
  end
end
