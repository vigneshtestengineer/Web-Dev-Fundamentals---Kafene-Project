$(document).ready(function () {
    if (localStorage.getItem('loginStatus') !== 'true') {
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    var responseArr;
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            responseArr = data;
            data.map((item, pos) => {
                createRows(item)
                $('#count').html(data.length);
            })
        },
    );
    function createRows(data) {
        let tr = (`
        <tr class="table-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.customerName}</td>
            <td class="primary-text">${data.orderDate}<br><span class="secondary-text">${data.orderTime}</span></td>
            <td class="secondary-text">$${data.amount}</td>
            <td class="primary-text">${data.orderStatus}</td>
        </tr>`)
        $('#table-body').append(tr);
    }

//---------------------------Filter Option-------------------------------------

    // When the checkbox changes
document.getElementById('newCheckBox').addEventListener('change', function (e) {
    e.preventDefault(); // Stop default behavior
    
    // Get the table body
    let tablebody = document.getElementById('table-body');
    let rows = tablebody.getElementsByTagName('tr');

    // Loop through each row in the table
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].getElementsByTagName('td')[4]; // Get fifth cell content
        
        if (cell && cell.textContent === 'New') { // If the cell contains 'New'
            // Show or hide the row based on checkbox status
            if (this.checked) {
                rows[i].style.display = ""; // Show the row
                $('#count').html(parseInt($('#count').html()) + 1); // Update count
            } else {
                rows[i].style.display = "none"; // Hide the row
                $('#count').html(parseInt($('#count').html()) - 1); // Update count
            }
        }
    }

    // Log the number of rows in the table to the console
    console.log(tablebody.getElementsByTagName('tr').length);
});



    // When the checkbox changes
document.getElementById('DeliveredCheckBox').addEventListener('change', function (e) {
    e.preventDefault(); // Stop default behavior
    
    // Get the table body
    let tablebody = document.getElementById('table-body');
    let rows = tablebody.getElementsByTagName('tr');

    // Loop through each row in the table
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].getElementsByTagName('td')[4]; // Get fifth cell content
        
        if (cell && cell.textContent === 'Delivered') { // If the cell contains 'New'
            // Show or hide the row based on checkbox status
            if (this.checked) {
                rows[i].style.display = ""; // Show the row
                $('#count').html(parseInt($('#count').html()) + 1); // Update count
            } else {
                rows[i].style.display = "none"; // Hide the row
                $('#count').html(parseInt($('#count').html()) - 1); // Update count
            }
        }
    }

    // Log the number of rows in the table to the console
    console.log(tablebody.getElementsByTagName('tr').length);
});



       // When the checkbox changes
document.getElementById('IntransitcheckBox').addEventListener('change', function (e) {
    e.preventDefault(); // Stop default behavior
    
    // Get the table body
    let tablebody = document.getElementById('table-body');
    let rows = tablebody.getElementsByTagName('tr');

    // Loop through each row in the table
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].getElementsByTagName('td')[4]; // Get fifth cell content
        
        if (cell && cell.textContent === 'InTransit') { // If the cell contains 'New'
            // Show or hide the row based on checkbox status
            if (this.checked) {
                rows[i].style.display = ""; // Show the row
                $('#count').html(parseInt($('#count').html()) + 1); // Update count
            } else {
                rows[i].style.display = "none"; // Hide the row
                $('#count').html(parseInt($('#count').html()) - 1); // Update count
            }
        }
    }

    // Log the number of rows in the table to the console
    console.log(tablebody.getElementsByTagName('tr').length);
});


       // When the checkbox changes
document.getElementById('PackedCheckBox').addEventListener('change', function (e) {
    e.preventDefault(); // Stop default behavior
    
    // Get the table body
    let tablebody = document.getElementById('table-body');
    let rows = tablebody.getElementsByTagName('tr');

    // Loop through each row in the table
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].getElementsByTagName('td')[4]; // Get fifth cell content
        
        if (cell && cell.textContent === 'Packed') { // If the cell contains 'New'
            // Show or hide the row based on checkbox status
            if (this.checked) {
                rows[i].style.display = ""; // Show the row
                $('#count').html(parseInt($('#count').html()) + 1); // Update count
            } else {
                rows[i].style.display = "none"; // Hide the row
                $('#count').html(parseInt($('#count').html()) - 1); // Update count
            }
        }
    }

    // Log the number of rows in the table to the console
    console.log(tablebody.getElementsByTagName('tr').length);
});

});
