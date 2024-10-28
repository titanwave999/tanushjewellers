// Array to hold design objects
let designs = [];

// Function to display designs
function displayDesigns() {
    const collectionGrid = document.getElementById('collection-grid');
    collectionGrid.innerHTML = '';
    designs.forEach((design, index) => {
        const designCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${design.image}" class="card-img-top" alt="${design.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${design.name}</h5>
                        <button class="btn btn-danger" onclick="removeDesign(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
        collectionGrid.innerHTML += designCard;
    });
}

// Function to add a new design
document.getElementById('addDesignForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const designName = document.getElementById('designName').value;
    const designImage = document.getElementById('designImage').value;
    designs.push({ name: designName, image: designImage });
    displayDesigns();
    // Reset form and close modal
    document.getElementById('addDesignForm').reset();
    const addDesignModal = new bootstrap.Modal(document.getElementById('addDesignModal'));
    addDesignModal.hide();
});

// Function to remove a design
function removeDesign(index) {
    designs.splice(index, 1);
    displayDesigns();
}

// Initial call to display any default designs
displayDesigns();
