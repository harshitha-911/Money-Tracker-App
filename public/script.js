let expenses =[]
let totalAmount = 0;
const categorySelect = document.getElementryId('category_select')
const amountInput= document.getElementryId('amount_input')
const InfoInput = document.getElementryId('info')
const dateInput = document.getElementryId('date_input')
const addBtn = document.getElementryId('add_btn')
const expenseTableBody = document.getElementryId('expense-table-body')
const totalAmountCell = document.getElementryId('total-amount')

addBtn.addEventListener('click',function(){
    const category=categorySelect.value;
    const info=InfoInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category ===''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount<=0){
        alert('please entyer a valid amount');
        return;
    }
    if(info ===''){
        alert('please enter a valid amount info');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,info,date})
    if(category === 'Income'){
        totalAmount+=amount;    
    }
    if(category ==='Expense'){
        totalAmount-=amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const  AmountCell = newRow.insertCell();
    const  InfoCell= newRow.insertCell();
    const  dateCell= newRow.insertCell();
    const  deleteCell= newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deletEBtn.textContent ='Delete';
    deletEBtn.classList.add('delete-btn');
    deletEBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount-=amount;    
        }
        if(category ==='Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expenseTableBody.removeChild(new Row);
    })
    const expense = expenses[expenses.length-1]
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    InfoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

    
});
for(const expense of expenses){
    if(category === 'Income'){
        totalAmount+=amount;    
    }
    if(category ==='Expense'){
        totalAmount-=amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const  AmountCell = newRow.insertCell();
    const  InfoCell= newRow.insertCell();
    const  dateCell= newRow.insertCell();
    const  deleteCell= newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deletEBtn.textContent ='Delete';
    deletEBtn.classList.add('delete-btn');
    deletEBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount-=amount;    
        }
        if(category ==='Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expenseTableBody.removeChild(new Row);
    })
    const expense = expenses[expenses.length-1]
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    InfoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}