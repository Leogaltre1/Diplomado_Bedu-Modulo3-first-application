import "./ExpensesFilter.css";

function ExpensesFilter({selectedYear, onChangeFilter}) {
    const changeHandler = (event) => {
        onChangeFilter(event.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filtrar por año</label>
                <select selected={selectedYear} onChange={changeHandler}>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;