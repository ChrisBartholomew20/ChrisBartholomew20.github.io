$(document).ready(function() {


    $("#volunteer-button").click(function() {
      $("#volunteer-form").toggle();
    });

    // Fetch and display volunteer opportunities when the page loads
    fetchData();
});

// Function to make the GET request
function fetchData() {
    const url = 'https://www.volunteermatch.org/api/call';
    const params = {
        action: 'search',
        location: 'Columbus', // Specify the location for volunteer opportunities
        format: 'json'
    };

    // Construct the URL with query parameters
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const apiUrl = `${url}?${queryString}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(data => {
        // Handle the fetched data
        displayData(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        displayError();
    });
}

// Function to display the fetched data
function displayData(data) {
    const opportunitiesContainer = $('#volunteer-opportunities');

    // Clear any existing content
    opportunitiesContainer.empty();

    // Loop through the fetched opportunities and create HTML elements to display them
    data.forEach(opportunity => {
        const opportunityElement = $('<div>').addClass('volunteer-opportunity');

        const titleElement = $('<h2>').text(opportunity.title);
        const descriptionElement = $('<p>').text(opportunity.description);
        const linkElement =  $('<a>').text('Learn More').attr('href', opportunity.link).attr('target', '_blank');

        opportunityElement.append(titleElement, descriptionElement, linkElement);
        opportunitiesContainer.append(opportunityElement);
    });
}

// Function to display an error message
function displayError() {
    const opportunitiesContainer = $('#volunteer-opportunities');
    opportunitiesContainer.html('<p>Failed to fetch volunteer opportunities. Please try again later.</p>');
}







