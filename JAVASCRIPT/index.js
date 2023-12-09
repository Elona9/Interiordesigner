<script type="text/javascript">
    window.onload = function() {
        sessionStorage.setItem("username", "Elona_Bytyqi");
        sessionStorage.setItem("password", "Elona_Bytyqi");
    }
    var inputs = document.getElementsByTagName('input');
    var login = document.getElementById('log-in'); 
    var form = document.querySelector('form');
  
    form.onsubmit = () => { return false; }

    inputs[2].onclick = () => { return false; } 

    login.onclick = () => {
        if (inputs[0].value !== "" && inputs[1].value !== "") {
            console.log("Performing login...");
        } else {
            if (inputs[0].value !== "") {
                inputs[0].nextElementSibling.textContent = "Duhet vendosur emri";
                setTimeout(() => {
                    inputs[0].nextElementSibling.textContent = "";
                }, 2000);
            }
        }
    }
</script>
