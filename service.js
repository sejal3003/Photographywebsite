
    document.addEventListener("DOMContentLoaded", function() {
      const folderDropdown = document.getElementById("folder-dropdown");
      const fileDropdownContainer = document.getElementById("file-dropdown-container");
      const filePreview = document.getElementById("file-preview");
      const lightbox = document.getElementById("lightbox");

      const folderData = {
       wedding: ["Pre-wedding", "Engagement", "Wedding"],
        fashion: ["Candid", "stylish", "Epic"],
          nature: ["flowers", "Forests", "Wildlife"],
          interiors: ["HallInteriors", "Kitchen", "Bedroom"],
          maternity: ["Babyshower", "Motherhood", "NewBornBaby"],
      };

      folderDropdown.addEventListener("change", function() {
        const selectedFolder = folderDropdown.value;
        if (selectedFolder !== "") {
          // Clear previous file dropdown
          fileDropdownContainer.innerHTML = "";

          const fileDropdown = document.createElement("select");
          fileDropdown.classList.add("dropdown");
          fileDropdown.innerHTML = "<option value=''>Select File</option>";

          folderData[selectedFolder].forEach(function(file) {
            const option = document.createElement("option");
            option.textContent = file;
            option.value = file;
            fileDropdown.appendChild(option);
          });

          fileDropdown.addEventListener("change", function() {
            const selectedFile = fileDropdown.value;
            if (selectedFile !== "") {
              // Show image in lightbox
              openLightbox(selectedFile);
            } else {
              // Hide lightbox if no file selected
              closeLightbox();
            }
          });

          fileDropdownContainer.appendChild(fileDropdown);
        } else {
          // Hide file dropdown if no folder selected
          fileDropdownContainer.innerHTML = "";
          // Hide lightbox if no folder selected
          closeLightbox();
        }
      });
    });

    function openLightbox(selectedFile) {
     
      const lightboxImage = document.getElementById("lightbox-image");

      // Set the image source
      lightboxImage.src = `serviceimg/${selectedFile}.jpg`;

      // Display the lightbox
      lightbox.style.display = "block";
    }

    function closeLightbox() {
      const lightbox = document.getElementById("lightbox");

      // Hide the lightbox
      lightbox.style.display = "none";
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

function calculateTotal()
{
  var size = document.querySelector('input[name="photo-size"]:checked').value;
var printType = document.querySelector('input[name="print-type"]:checked').value;
var additionalServices = document.querySelectorAll('input[name="additional-service"]:checked');

var baseCost = 0;
switch (size) {
    case '4x6':
        baseCost = 5;
        break;
    case '5x7':
        baseCost = 7;
        break;
    case '8x10':
        baseCost = 10;
        break;
    default:
        break;
}

if (printType === 'glossy') {
    baseCost += 2;
  }
else {
  baseCost += 5;
  }

additionalServices.forEach(function(service) {
  if (service.value === 'acp') {
    baseCost += 383;
  } else if (service.value === 'framing') {
    baseCost += 3000;
  }
  else if (service.value === 'mouse') {
    baseCost += 484;
  }
  else if (service.value === 'bottle') {
    baseCost += 500;
  } 
  
});

document.getElementById('total-cost').textContent = '₹' + baseCost;
}