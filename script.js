var userResponse = window.prompt("Do you love me? (Yes/No)");

        // Check the user's response
        if (userResponse !== null) {
            if (userResponse.toLowerCase() === 'yes') {
                // Display an alert if the user responds with 'Yes'
                window.alert("Okay, then this is for you my love ❤️");
                window.location.href = "love.html";
            } else if (userResponse.toLowerCase() === 'no') {
                // Display an alert if the user responds with 'No'
                window.alert("fuck off bro :)")
            } else {
                // Display an alert for any other response
                window.alert("Invalid response. Please enter 'Yes' or 'No'.");
            }
        } else {
            // Display an alert if the user clicked "Cancel"
            window.alert("You clicked Cancel. Goodbye!");
        } 