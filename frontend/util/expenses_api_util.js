
export const addExpense = expense => (
  $.ajax({
    method: 'POST',
    url: `/api/expenses`,
    data: {expense}
  })
);

