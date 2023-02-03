<?php
    session_start();

    if(isset($_GET["theme"]))
    {
        $theme = $_GET["theme"];

        if($theme == "style" || $theme == "visually_impaired")
        {
            $_SESSION["theme"] = $theme;
        }
    }