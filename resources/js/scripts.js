
<script>
    function loadContentToBox(id, content) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(id).innerHTML = content;
            }
        }
    }
</script>