
json.extract! @expense, :id, :author_id, :category, :description, :amount, :notes

json.split @expense.calc_split

