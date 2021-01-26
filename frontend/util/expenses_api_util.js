
export const addExpense = expense => (
  $.ajax({
    method: 'POST',
    url: `/api/expenses`,
    data: {expense}
  })
);

export const updateExpense = expense => (
  $.ajax({
    method: 'PATCH',
    url: `/api/expenses/${expense.id}`,
    data: {expense}
  })
);

export const deleteExpense = expenseId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/expenses/${expenseId}`,
  })
);

export const fetchExpenses = () => (
  $.ajax({
    method: 'GET',
    url: `/api/expenses`,
  })
);

export const fetchExpense = (expense_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/expenses/${expense_id}`,
  })
);

