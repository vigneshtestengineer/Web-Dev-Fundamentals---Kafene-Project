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
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
        function (data) {           
            data.map((item,pos) => {
                createRows(item)              
            })
            searchFun();
            $('#resetBtn').click(function (e) { 
                e.preventDefault();
                $('#searchBox').val('');
                $('#table-body tr').css('display','')
            });
        },
    );
    function createRows(data) {
        let tr = (`
        <tr class="table-row">
            <td class="secondary-text" id="data_id">${data.id}</td>
            <td class="secondary-text" id="data_profile"><img src=${data.profilePic}/></td>
            <td class="secondary-text" id="data_name">${data.fullName}</td>
            <td class="primary-text" id="data_dob">${data.dob}</td>
            <td class="secondary-text" id="data_gender">${data.gender}</td>
            <td class="secondary-text" id="data_add">${data.currentCity}, ${data.currentCountry}</td>
        </tr>`)
        $('#table-body').append(tr);
    }


    const searchFun = () => {
        // Listen for form submission
        $('#search-form').submit((e) => {
            // Prevent default form submission
            e.preventDefault();
    
            // Get search value in uppercase
            let searchValue = $('#searchBox').val().toUpperCase();
    
            // Check if search value length is less than 2 characters
            if (searchValue.length < 2) {
                alert('Please enter at least 2 characters');
                // Show all table rows
                $('#table-body tr').show();
            } else {
                // Make GET request to API with search value
                $.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchValue}`,
                    function (data, textStatus, jqXHR) {
                        // Loop through table rows
                        $('#table-body tr').each(function () {
                            // Get text from the third column
                             let textValue = $(this).find('td:nth-child(3)').text().toUpperCase();
                            // Check if search value exists in the text
                            if (textValue.includes(searchValue)) {
                                $(this).show(); // Show row if found
                            } else {
                                $(this).hide(); // Hide row if not found
                            }
                        });
                    }
                );
            }
        });
    };
    
});
