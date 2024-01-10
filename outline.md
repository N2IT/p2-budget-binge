# budget-binge

# Phase 2 project proposal
External API: https://site.financialmodelingprep.com/developer/docs#statement-symbols-list-stock-list
GET to render DOW, Nasdaq, S&P 500 tickers inside every route of app.

# Components:
1.	Transaction Component: This component displays individual transactions and will show a table that includes the following data:
    <ul>
    <li>Date</li>
    <li>Amount</li>
    <li>Category</li> 
    <li>Description</li>
    </ul>

2.	Transaction Form Component: controlled form for users to add new transactions and POST to db.json file:
    <ul>
        <li>Date</li>
        <li>Amount</li>
        <li>Category
            <ul>
                <li>income</li> 
                <li>expense</li>
            </ul>
        </li>
        <li>Description (dropdown options with conditional logic dependent on category selected)
            <ul>
                <li>if income > paycheck or miscellaneous</li>
                <li>if expense > groceries, home, auto, utilities, or entertainment</li>
            </ul>
        </li>
    </ul>

3. Balance Summary Component: shows a summary of the user's finances, including total balance, total income, and total expenses. It will receive transaction data as props and calculate the summary figures.

4. Category Breakdown Component: A component to display expenses categorized (e.g., groceries, utilities, entertainment). It takes the transaction data as props and visualizes the expense distribution by % of total expense (stretch goal to be visualization of pie chart or bar graph)

5. Transaction List Component: lists all the transactions. It uses the Transaction Component for each item in the list. Stretch goal to allow users to delete or edit transactions, updating the application's state accordingly.

# Client-Side Routes:
1.	Dashboard or Home Route (`/dashboard` or /’home’): will include:
    <ul>
        <li>Balance Summary Component</li>
        <li>Category Breakdown Component</li>
        <li>:: This route gives an overview of the user's financial status at a glance.</li>
    </ul>

2. Transactions Route (`/transactions`): displays the Transaction List Component, showing all the user's transactions in table format. 
    <ul>
        <li>::It serves as a detailed view where users can scroll through their entire transaction history.</li>
    </ul>

3. Add Transaction Route (`/add-transaction`): dedicated to adding new transactions using the Transaction Form Component.


# JSON Structure Example
```json
{
 "transactions": [
    {
        "id": 1,
        "amount": 1000,
        "date": "2024-1-1",
        "category": "income",
        "description": "miscellaneous income"
    },
    {
        "id": 2,
        "amount": 2000,
        "date": "2024-1-7",
        "category": "expense",
        "description": "home"
    }
 ]   
}
```