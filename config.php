<?php
// Function to fetch data from config.php
function fetchData() {
    $config =array(
        "intro" =>"",
        "about me"=>""
    );
    return $config;
}

// Handle incoming requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Call fetchData() function
    $data = fetchData();

    // Output data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
}
?>
