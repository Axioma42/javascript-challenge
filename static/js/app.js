// From data.js
var tableData = data;

// Event Variable Declaration 
let tbody = d3.select("tbody");

// Event that Trigger the Filter Function
function handleClick() {
    // Prevents the page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element and Get its Respective Value
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Conditional Checking to See if the Filter is Valid
    if (date) {
        // Applies the Filter to the Table
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build the Filtered Data Table
    buildTable(filteredData);
}

// Funcion Build Table
function buildTable(data) {
    // Clear Existing Data
    tbody.html("");
    // Loop Through data.js
    data.forEach((dataRow) => {
        // Append Table Row Object "tr" to the Table Body "tbody"
        let row = tbody.append("tr");
        // Loop Trhough Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// "on" Function to Attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the data.js Table
buildTable(tableData);



