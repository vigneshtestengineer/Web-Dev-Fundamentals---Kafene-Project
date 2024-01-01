$(document).ready(function () {
    if(localStorage.getItem('loginStatus') !== 'true'){
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
        function (data) {
            data.map((item,pos) => {    
                createRows(item)
                $('#count').html(data.length)
            })
        },
    );
    function createRows(data) {
        let tr = (`
        <tr class="table-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.medicineName}</td>
            <td class="secondary-text">${data.medicineBrand}</td>
            <td class="primary-text">${data.expiryDate}</td>
            <td class="secondary-text">$${data.unitPrice}</td>
            <td class="secondary-text">${data.stock}</td>
        </tr>`)
        $('#table-body').append(tr);
    }



   // Listen for changes in the 'expiredCheckBox'
document.getElementById('expiredCheckBox').addEventListener('change', function (e) {
    e.preventDefault(); // Prevent default behavior of the checkbox change event

    // Get all the rows in the table body
    let tableRows = document.getElementById('table-body').getElementsByTagName('tr');
    
    // Loop through each row in the table
    for (let i = 0; i < tableRows.length; i++) {
        let dateCell = tableRows[i].getElementsByTagName('td')[3]; // Get the date cell in each row (third column)

        // Check if a date cell exists in the current row
        if (dateCell) {
            let dateValue = myParser(dateCell.textContent || dateCell.innerHTML); // Get the content of the date cell and parse it

            // Check if the parsed date is in the past
            if (new Date(dateValue).getTime() < new Date().getTime()) {
                let isChecked = this.checked; // Check the state of the checkbox
                
                // Show or hide the row based on checkbox status
                tableRows[i].style.display = isChecked ? "" : "none"; // Show the row if checked, hide if unchecked
                
                // Update the count based on the checkbox status
                $('#count').html(parseInt($('#count').html()) + (isChecked ? 1 : -1)); // Increment or decrement count
            }
        }
    }
});

    // Listen for changes on the checkbox with the ID 'lowStockCheckBox'
document.getElementById('lowStockCheckBox').addEventListener('change', function () {
    // Get all rows in the table body
    let rows = document.querySelectorAll('#table-body tr');

    // Loop through each row in the table
    rows.forEach(row => {
        // Extract the content of the 6th cell (index 5) and convert it to a number
        let cellValue = parseInt(row.cells[5].textContent);

        // Check if the cell value is less than 100
        if (cellValue < 100) {
            // If checkbox is checked
            if (this.checked) {
                // Display the row
                row.style.display = '';
                // Update the count by increasing it by 1
                $('#count').text(parseInt($('#count').text()) + 1);
            } else { // If checkbox is unchecked
                // Hide the row
                row.style.display = 'none';
                // Update the count by decreasing it by 1
                $('#count').text(parseInt($('#count').text()) - 1);
            }
        }
    });
});


    


    function myParser (date) {
        var arr = date.split('-');
        return arr.join(' ')
    }
});
