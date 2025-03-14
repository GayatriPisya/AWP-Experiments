<?php
if (isset($_POST['number'])) {
    $num = intval($_POST['number']);

    echo "<h4>Multiplication Table of $num</h4>";
    echo "<ul class='list-group'>";
    for ($i = 1; $i <= 10; $i++) {
        echo "<li class='list-group-item'>$num × $i = " . ($num * $i) . "</li>";
    }
    echo "</ul>";
}
?>
