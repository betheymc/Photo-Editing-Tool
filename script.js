<script>

    /*
    What to make today using CSS variables: 
    - Program where user can upload a picture, change the general design, and download it.
    
    Functionality:
      - user can upload any picture (extra credit: user can upload a picture OR paste a link to an online picture)
      - picture location should be at the center of the screen and resized to a size compatible with the resolution
      - Have at least 4 different controls for the user to choose from, so the picture is able to look nice when finished.
      - Have a "reset" button to reset all to defaults
      - Have a download button to download the finished product.
      - web page should look decent as well
    */

    /*
   To Do:
   - When user clicks the download button, create a new image with all of the user-specified settings.  It is not necessary to append this image to the web page, because the user already specified it.  Next download that image to the user's local place.  That should work great!  Boom.

   - Set min and maxes for input levels (might need to research range input types and see how they work with min and maxes first)
    */

    //called when user clicks "Browse" to find a picture
    function previewFile() {
      const preview = document.querySelector('img');
      const file = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
    //called when user changes any of the inputs
    function handleUpdate() {
      const suffix = this.dataset.suffix || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    //called when user clicks the download button
    function createAndDownload() {

      //create image with user-chosen styles
      const editedImage = document.createElement('img');
      const preview = document.querySelector('img');
      const something = preview.src;
      editedImage.src = something;
      editedImage.classList.add("image-preview");

      //append image to web page
      document.getElementById("append").appendChild(editedImage);

      //To Do: Download editedImage
    }

    const inputs = document.querySelectorAll('.settings input')

    //adds event Listeners to the inputs
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    const download = document.querySelector('#download')

    download.addEventListener('click', createAndDownload);

  </script>
