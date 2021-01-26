
export const addExpense = expense => (
  $.ajax({
    method: 'POST',
    url: `/api/expenses`,
    data: {expense}
  })
);

export const fetchExpenses = () => (
  $.ajax({
    method: 'GET',
    url: `/api/expenses`,
  })
);

