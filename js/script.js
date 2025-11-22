// PC Parts Database
const partsDatabase = {
    // Budget builds ($300-$500)
    budget: {
        cpu: [
            { name: 'AMD Ryzen 3 3200G (4C/4T, 3.6GHz)', price: 99, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+3+3200G' },
            { name: 'Intel Core i3-10100 (4C/8T, 3.6GHz)', price: 119, url: 'https://www.amazon.co.uk/s?k=Intel+Core+i3-10100' },
            { name: 'AMD Ryzen 5 3400G (4C/8T, 3.7GHz)', price: 129, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+5+3400G' },
            { name: 'Intel Core i3-12100F (4C/8T, 3.3GHz)', price: 109, url: 'https://www.amazon.co.uk/s?k=Intel+Core+i3-12100F' }
        ],
        gpu: [
            { name: 'Integrated Graphics (Vega 8/RX Vega 8)', price: 0, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+with+Vega+Graphics', note: 'Search for AMD Ryzen APUs with integrated graphics' },
            { name: 'NVIDIA GTX 1650 (4GB GDDR6)', price: 169, url: 'https://www.amazon.co.uk/s?k=NVIDIA+GTX+1650' },
            { name: 'AMD RX 6400 (4GB GDDR6)', price: 159, url: 'https://www.amazon.co.uk/s?k=AMD+RX+6400' },
            { name: 'NVIDIA GTX 1050 Ti (4GB GDDR5)', price: 149, url: 'https://www.amazon.co.uk/s?k=NVIDIA+GTX+1050+Ti' }
        ],
        ram: [
            { name: '8GB DDR4 3200MHz (2x4GB)', price: 35, url: 'https://www.amazon.co.uk/s?k=8GB+DDR4+3200MHz' },
            { name: '16GB DDR4 3200MHz (2x8GB)', price: 65, url: 'https://www.amazon.co.uk/s?k=16GB+DDR4+3200MHz' },
            { name: '8GB DDR4 3600MHz (1x8GB)', price: 32, url: 'https://www.amazon.co.uk/s?k=8GB+DDR4+3600MHz' },
            { name: '16GB DDR4 3000MHz (2x8GB)', price: 59, url: 'https://www.amazon.co.uk/s?k=16GB+DDR4+3000MHz' }
        ],
        storage: [
            { name: '500GB NVMe SSD (Gen3)', price: 45, url: 'https://www.amazon.co.uk/s?k=500GB+NVMe+SSD' },
            { name: '1TB HDD (7200RPM)', price: 40, url: 'https://www.amazon.co.uk/s?k=1TB+HDD' },
            { name: '250GB NVMe SSD + 1TB HDD', price: 65, url: 'https://www.amazon.co.uk/s?k=250GB+NVMe+SSD' },
            { name: '480GB SATA SSD', price: 42, url: 'https://www.amazon.co.uk/s?k=480GB+SATA+SSD' }
        ],
        motherboard: [
            { name: 'ASUS Prime B450M-A (AMD)', price: 79, url: 'https://www.amazon.co.uk/s?k=ASUS+Prime+B450M-A' },
            { name: 'Gigabyte B460M DS3H (Intel)', price: 89, url: 'https://www.amazon.co.uk/s?k=Gigabyte+B460M+DS3H' },
            { name: 'MSI A520M-A PRO (AMD)', price: 69, url: 'https://www.amazon.co.uk/s?k=MSI+A520M-A+PRO' },
            { name: 'ASRock H510M-HDV (Intel)', price: 74, url: 'https://www.amazon.co.uk/s?k=ASRock+H510M-HDV' }
        ],
        psu: [
            { name: 'EVGA 450W 80+ Bronze', price: 44, url: 'https://www.amazon.co.uk/s?k=EVGA+450W+80%2B+Bronze' },
            { name: 'Corsair CV450 (450W)', price: 49, url: 'https://www.amazon.co.uk/s?k=Corsair+CV450' },
            { name: 'Thermaltake Smart 500W', price: 47, url: 'https://www.amazon.co.uk/s?k=Thermaltake+Smart+500W' },
            { name: 'EVGA 500W 80+ White', price: 52, url: 'https://www.amazon.co.uk/s?k=EVGA+500W+80%2B+White' }
        ],
        case: [
            { name: 'NZXT H510 (ATX)', price: 69, url: 'https://www.amazon.co.uk/s?k=NZXT+H510' },
            { name: 'Cooler Master MasterBox Q300L (mATX)', price: 49, url: 'https://www.amazon.co.uk/s?k=Cooler+Master+MasterBox+Q300L' },
            { name: 'Fractal Design Focus G (ATX)', price: 59, url: 'https://www.amazon.co.uk/s?k=Fractal+Design+Focus+G' },
            { name: 'Deepcool MATREXX 30 (mATX)', price: 45, url: 'https://www.amazon.co.uk/s?k=Deepcool+MATREXX+30' }
        ]
    },
    // Mid-range builds ($500-$800)
    mid: {
        cpu: [
            { name: 'AMD Ryzen 5 5600G (6C/12T, 3.9GHz)', price: 159, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+5+5600G' },
            { name: 'Intel Core i5-11400F (6C/12T, 2.6GHz)', price: 179, url: 'https://www.amazon.co.uk/s?k=Intel+Core+i5-11400F' },
            { name: 'AMD Ryzen 5 5600 (6C/12T, 3.5GHz)', price: 199, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+5+5600' },
            { name: 'Intel Core i5-12400F (6C/12T, 2.5GHz)', price: 219, url: 'https://www.amazon.co.uk/s?k=Intel+Core+i5-12400F' }
        ],
        gpu: [
            { name: 'NVIDIA RTX 3050 (8GB GDDR6)', price: 249, url: 'https://www.amazon.co.uk/s?k=NVIDIA+RTX+3050' },
            { name: 'AMD RX 6600 (8GB GDDR6)', price: 249, url: 'https://www.amazon.co.uk/s?k=AMD+RX+6600' },
            { name: 'NVIDIA RTX 2060 (6GB GDDR6)', price: 229, url: 'https://www.amazon.co.uk/s?k=NVIDIA+RTX+2060' },
            { name: 'AMD RX 6600 XT (8GB GDDR6)', price: 259, url: 'https://www.amazon.co.uk/s?k=AMD+RX+6600+XT' }
        ],
        ram: [
            { name: '16GB DDR4 3200MHz (2x8GB)', price: 65, url: 'https://www.amazon.co.uk/s?k=16GB+DDR4+3200MHz' },
            { name: '16GB DDR4 3600MHz (2x8GB)', price: 75, url: 'https://www.amazon.co.uk/s?k=16GB+DDR4+3600MHz' },
            { name: '32GB DDR4 3200MHz (2x16GB)', price: 119, url: 'https://www.amazon.co.uk/s?k=32GB+DDR4+3200MHz' },
            { name: '16GB DDR4 3600MHz CL16 (2x8GB)', price: 89, url: 'https://www.amazon.co.uk/s?k=16GB+DDR4+3600MHz+CL16' }
        ],
        storage: [
            { name: '1TB NVMe SSD (Gen3)', price: 89, url: 'https://www.amazon.co.uk/s?k=1TB+NVMe+SSD' },
            { name: '500GB NVMe SSD + 2TB HDD', price: 120, url: 'https://www.amazon.co.uk/s?k=2TB+HDD' },
            { name: '1TB NVMe SSD (Gen4)', price: 109, url: 'https://www.amazon.co.uk/s?k=1TB+Gen4+NVMe+SSD' },
            { name: '2TB SATA SSD', price: 139, url: 'https://www.amazon.co.uk/s?k=2TB+SATA+SSD' }
        ],
        motherboard: [
            { name: 'MSI B550M PRO-VDH WIFI (AMD)', price: 119, url: 'https://www.amazon.co.uk/s?k=MSI+B550M+PRO-VDH+WIFI' },
            { name: 'ASUS TUF GAMING B560-PLUS (Intel)', price: 139, url: 'https://www.amazon.co.uk/s?k=ASUS+TUF+GAMING+B560-PLUS' },
            { name: 'Gigabyte B550 AORUS ELITE (AMD)', price: 159, url: 'https://www.amazon.co.uk/s?k=Gigabyte+B550+AORUS+ELITE' },
            { name: 'MSI B560M PRO-VDH (Intel)', price: 124, url: 'https://www.amazon.co.uk/s?k=MSI+B560M+PRO-VDH' }
        ],
        psu: [
            { name: 'EVGA 550W 80+ Gold', price: 69, url: 'https://www.amazon.co.uk/s?k=EVGA+550W+80%2B+Gold' },
            { name: 'Corsair CX550M (550W)', price: 74, url: 'https://www.amazon.co.uk/s?k=Corsair+CX550M' },
            { name: 'Seasonic FOCUS GX-550 (550W)', price: 89, url: 'https://www.amazon.co.uk/s?k=Seasonic+FOCUS+GX-550' },
            { name: 'Thermaltake Toughpower GX2 (600W)', price: 79, url: 'https://www.amazon.co.uk/s?k=Thermaltake+Toughpower+GX2' }
        ],
        case: [
            { name: 'Lian Li Lancool 215 (ATX)', price: 89, url: 'https://www.amazon.co.uk/s?k=Lian+Li+Lancool+215' },
            { name: 'Phanteks Eclipse P300A (ATX)', price: 69, url: 'https://www.amazon.co.uk/s?k=Phanteks+Eclipse+P300A' },
            { name: 'Corsair 4000D Airflow (ATX)', price: 99, url: 'https://www.amazon.co.uk/s?k=Corsair+4000D+Airflow' },
            { name: 'NZXT H510 Flow (ATX)', price: 89, url: 'https://www.amazon.co.uk/s?k=NZXT+H510+Flow' }
        ]
    },
    // High-end builds ($800+)
    high: {
        cpu: [
            { name: 'AMD Ryzen 7 5800X3D (8C/16T, 3.4GHz)', price: 349, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+7+5800X3D' },
            { name: 'Intel Core i5-13600K (14C/20T, 3.5GHz)', price: 299, url: 'https://www.amazon.co.uk/s?k=Intel+Core+i5-13600K' },
            { name: 'AMD Ryzen 9 5900X (12C/24T, 3.7GHz)', price: 399, url: 'https://www.amazon.co.uk/s?k=AMD+Ryzen+9+5900X' },
            { name: 'Intel Core i7-13700K (16C/24T, 3.4GHz)', price: 419, url: 'https://www.amazon.co.uk/s?k=Intel+Core+i7-13700K' }
        ],
        gpu: [
            { name: 'NVIDIA RTX 4070 (12GB GDDR6X)', price: 599, url: 'https://www.amazon.co.uk/s?k=NVIDIA+RTX+4070' },
            { name: 'AMD RX 7800 XT (16GB GDDR6)', price: 549, url: 'https://www.amazon.co.uk/s?k=AMD+RX+7800+XT' },
            { name: 'NVIDIA RTX 3080 (10GB GDDR6X)', price: 699, url: 'https://www.amazon.co.uk/s?k=NVIDIA+RTX+3080' },
            { name: 'AMD RX 6800 XT (16GB GDDR6)', price: 649, url: 'https://www.amazon.co.uk/s?k=AMD+RX+6800+XT' }
        ],
        ram: [
            { name: '32GB DDR4 3600MHz (2x16GB)', price: 129, url: 'https://www.amazon.co.uk/s?k=32GB+DDR4+3600MHz' },
            { name: '32GB DDR5 6000MHz (2x16GB)', price: 199, url: 'https://www.amazon.co.uk/s?k=32GB+DDR5+6000MHz' },
            { name: '64GB DDR4 3600MHz (2x32GB)', price: 229, url: 'https://www.amazon.co.uk/s?k=64GB+DDR4+3600MHz' },
            { name: '32GB DDR5 6400MHz CL32 (2x16GB)', price: 249, url: 'https://www.amazon.co.uk/s?k=32GB+DDR5+6400MHz+CL32' }
        ],
        storage: [
            { name: '2TB NVMe SSD (Gen4)', price: 179, url: 'https://www.amazon.co.uk/s?k=2TB+NVMe+SSD' },
            { name: '1TB NVMe SSD (Gen4) + 4TB HDD', price: 199, url: 'https://www.amazon.co.uk/s?k=4TB+HDD' },
            { name: '2TB PCIe 4.0 NVMe SSD (7000MB/s)', price: 219, url: 'https://www.amazon.co.uk/s?k=2TB+PCIe+4.0+NVMe+SSD' },
            { name: '4TB NVMe SSD (Gen4)', price: 349, url: 'https://www.amazon.co.uk/s?k=4TB+NVMe+SSD' }
        ],
        motherboard: [
            { name: 'MSI MAG B550 TOMAHAWK (AMD)', price: 169, url: 'https://www.amazon.co.uk/s?k=MSI+MAG+B550+TOMAHAWK' },
            { name: 'ASUS ROG STRIX Z790-E (Intel)', price: 399, url: 'https://www.amazon.co.uk/s?k=ASUS+ROG+STRIX+Z790-E' },
            { name: 'Gigabyte X570S AORUS ELITE (AMD)', price: 229, url: 'https://www.amazon.co.uk/s?k=Gigabyte+X570S+AORUS+ELITE' },
            { name: 'MSI PRO Z790-P (Intel)', price: 209, url: 'https://www.amazon.co.uk/s?k=MSI+PRO+Z790-P' }
        ],
        psu: [
            { name: 'Corsair RM750x (750W, 80+ Gold)', price: 119, url: 'https://www.amazon.co.uk/s?k=Corsair+RM750x' },
            { name: 'EVGA SuperNOVA 750 G6 (750W)', price: 129, url: 'https://www.amazon.co.uk/s?k=EVGA+SuperNOVA+750+G6' },
            { name: 'Seasonic FOCUS GX-850 (850W, 80+ Gold)', price: 159, url: 'https://www.amazon.co.uk/s?k=Seasonic+FOCUS+GX-850' },
            { name: 'Corsair RM1000x (1000W, 80+ Gold)', price: 199, url: 'https://www.amazon.co.uk/s?k=Corsair+RM1000x' }
        ],
        case: [
            { name: 'Lian Li PC-O11 Dynamic (ATX)', price: 149, url: 'https://www.amazon.co.uk/s?k=Lian+Li+PC-O11+Dynamic' },
            { name: 'Fractal Design Meshify C (ATX)', price: 109, url: 'https://www.amazon.co.uk/s?k=Fractal+Design+Meshify+C' },
            { name: 'Corsair iCUE 5000X RGB (ATX)', price: 179, url: 'https://www.amazon.co.uk/s?k=Corsair+iCUE+5000X+RGB' },
            { name: 'Phanteks Enthoo Pro 2 (Full Tower)', price: 159, url: 'https://www.amazon.co.uk/s?k=Phanteks+Enthoo+Pro+2' }
        ]
    }
};

// DOM Elements
const gameSelect = document.getElementById('game');
const budgetInput = document.getElementById('budget');
const buildBtn = document.getElementById('build-btn');
const resultDiv = document.getElementById('result');
const buildDetails = document.getElementById('build-details');
const totalCost = document.getElementById('total-cost');
const selectedGamesContainer = document.getElementById('selected-games');
const buildLink = document.getElementById('build-link');

// Track selected games
let selectedGames = [];

// Debug: Log if elements are found
console.log('Game select:', gameSelect);
console.log('Budget input:', budgetInput);
console.log('Build button:', buildBtn);
console.log('Result div:', resultDiv);
console.log('Build details:', buildDetails);
console.log('Total cost:', totalCost);

// Update selected games display
function updateSelectedGames() {
    selectedGames = Array.from(gameSelect.selectedOptions).map(option => option.value);
    
    // Update the display
    selectedGamesContainer.innerHTML = '';
    if (selectedGames.length > 0) {
        selectedGamesContainer.innerHTML = '<strong>Selected Games:</strong> ';
        selectedGames.forEach(gameId => {
            const option = gameSelect.querySelector(`option[value="${gameId}"]`);
            if (option) {
                const tag = document.createElement('span');
                tag.className = 'selected-game-tag';
                tag.textContent = option.textContent;
                
                // Add remove button
                const removeBtn = document.createElement('span');
                removeBtn.className = 'remove-game';
                removeBtn.innerHTML = ' &times;';
                removeBtn.onclick = (e) => {
                    e.stopPropagation();
                    option.selected = false;
                    updateSelectedGames();
                };
                
                tag.appendChild(removeBtn);
                selectedGamesContainer.appendChild(tag);
            }
        });
    }
    
    // Update the build button state
    buildBtn.disabled = selectedGames.length === 0 || selectedGames.length > 4;
}

// Event listener for game selection
gameSelect.addEventListener('change', updateSelectedGames);

// Build button click handler
buildBtn.addEventListener('click', () => {
    console.log('Starting build process...');
    
    const selectedGames = Array.from(gameSelect.selectedOptions).map(option => option.value);
    console.log('Selected games:', selectedGames);
    
    const budget = parseInt(budgetInput.value) || 0;
    console.log('Budget:', budget);
    
    try {
        if (!Array.isArray(selectedGames) || selectedGames.length === 0) {
            throw new Error('No games selected');
        }
        
        if (isNaN(budget) || budget < 300 || budget > 5000) {
            throw new Error('Invalid budget');
        }
    
    } catch (error) {
        console.error('Build error:', error);
        alert(error.message || 'An error occurred while building your PC');
        return;
    }
    
    // Use mid-range parts for all builds as per user request
    const buildType = 'mid';
    
    // Create a build based on the selected games and budget
    const build = {};
    let total = 0;
    
    // Select one part from each category
    Object.keys(partsDatabase[buildType]).forEach(category => {
        const parts = partsDatabase[buildType][category];
        // Filter parts that fit within the remaining budget
        const affordableParts = parts.filter(part => (part.price + total) <= budget);
        
        if (affordableParts.length > 0) {
            // Sort by price (descending) to get the best part within budget
            affordableParts.sort((a, b) => b.price - a.price);
            // Select the most expensive part that fits the budget
            const selectedPart = {...affordableParts[0]};
            build[category] = selectedPart;
            total += selectedPart.price;
        }
    });
    
    // Display the build
    displayBuild(build, total, selectedGames);
});

function displayBuild(build, total, games) {
    console.log('Displaying build:', build);
    
    // Clear previous build
    buildDetails.innerHTML = '';
    
    if (!build || typeof build !== 'object' || Object.keys(build).length === 0) {
        console.error('Invalid build data:', build);
        buildDetails.innerHTML = '<div class="error">Error: Could not generate build. Please try again with different options.</div>';
        return;
    }
    
    // Get game names
    const gameNames = Array.isArray(games) ? games.map(gameId => {
        const option = gameSelect.querySelector(`option[value="${gameId}"]`);
        return option ? option.textContent : gameId;
    }) : [];
    
    // Start building the HTML
    let html = `
        <div class="build-header">
            <h3>Optimized for ${games && games.length > 1 ? games.length + ' Games' : '1 Game'}</h3>
            ${gameNames.length > 0 ? `<p>Selected Games: ${gameNames.join(', ')}</p>` : ''}
            <p>Here's your custom PC build recommendation that will work for all selected games:</p>
        </div>
        <div class="build-components">
    `;
    
    // Create component list
    const partsList = [];
    let totalCost = 0;
    
    // Ensure build is an object
    if (build && typeof build === 'object') {
        for (const [category, part] of Object.entries(build)) {
            // Skip if part is not a valid object with a name
            if (!part || typeof part !== 'object' || !part.name) {
                console.warn(`Skipping invalid part in category: ${category}`, part);
                continue;
            }
            
            try {
                const categoryName = typeof category === 'string' && category.length > 0 
                    ? category.charAt(0).toUpperCase() + category.slice(1) 
                    : 'Component';
                    
                const price = typeof part.price === 'number' ? part.price : 0;
                totalCost += price;
                
                // Create note if available
                const note = part.note ? `<div class="part-note">${part.note}</div>` : '';
                
                // Create part HTML with link and note
                const partHtml = `
                    <div class="build-part">
                        <span class="part-category">${categoryName}:</span>
                        <span class="part-name">
                            ${part.url ? `<a href="${part.url}" target="_blank" rel="noopener noreferrer">${part.name}</a>` : part.name}
                        </span>
                        <span class="part-price">£${price.toFixed(2)}</span>
                        ${note}
                    </div>`;
                    
                partsList.push(partHtml);
            } catch (error) {
                console.error(`Error processing part in category ${category}:`, error, part);
            }
        }
    }
    
    // Add parts list to HTML if we have any parts
    if (partsList.length > 0) {
        html += partsList.join('');
        
        // Add case if available
        if (build.case && build.case.name) {
            const casePrice = typeof build.case.price === 'number' ? build.case.price : 0;
            html += `
                </div>
                <div class="case-item">
                    <span class="part-type">CASE:</span>
                    <span class="part-name">${build.case.name} (compatible with your components)</span>
                    <span class="part-price">£${casePrice.toFixed(2)}</span>
                    ${build.case.url ? `<a href="${build.case.url}" target="_blank" rel="noopener noreferrer" class="part-link">View on Amazon</a>` : ''}
                </div>`;
        } else {
            html += '</div>'; // Close build-components div
            console.warn('No case information available in build data');
        }
    } else {
        html += '<p>No components could be found for your build. Please try again with a different budget.</p></div>';
    }
    
    // Set the build details HTML
    buildDetails.innerHTML = html;
    
    // Display total cost
    totalCost.textContent = `Total: £${total}`;
    
    // Generate share text with all selected games
    const gameList = gameNames && gameNames.length > 0 ? gameNames.join(' and ') : 'your selected games';
    const budget = budgetInput && budgetInput.value ? budgetInput.value : 'your budget';
    const message = `Here's a great PC build for ${gameList} for £${budget} that will run these games smoothly at high settings!`;
    
    // Build parts list for sharing
    const sharePartsList = [];
    
    // Helper function to safely get component name
    const getComponentName = (component) => {
        return component && component.name ? component.name : 'Not specified';
    };
    
    // Add components to the list if they exist
    if (build.cpu) sharePartsList.push(`CPU: ${getComponentName(build.cpu)}`);
    if (build.gpu) sharePartsList.push(`GPU: ${getComponentName(build.gpu)}`);
    if (build.ram) sharePartsList.push(`RAM: ${getComponentName(build.ram)}`);
    if (build.storage) sharePartsList.push(`Storage: ${getComponentName(build.storage)}`);
    if (build.motherboard) sharePartsList.push(`Motherboard: ${getComponentName(build.motherboard)}`);
    if (build.psu) sharePartsList.push(`PSU: ${getComponentName(build.psu)}`);
    if (build.case) sharePartsList.push(`Case: ${getComponentName(build.case)}`);
    
    // If no components were added, add a message
    if (sharePartsList.length === 0) {
        sharePartsList.push('No components could be found for this build.');
    }
    
    try {
        const shareText = encodeURIComponent(`${message}\n\n${sharePartsList.join('\n')}`);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
        
        if (buildLink) {
            buildLink.innerHTML = `
                <p>Share your build: 
                    <a href="${twitterUrl}" target="_blank" rel="noopener noreferrer">Tweet this build</a>
                </p>
            `;
        }
    } catch (error) {
        console.error('Error generating share link:', error);
        if (buildLink) {
            buildLink.innerHTML = '<p>Share feature not available</p>';
        }
    }
    
    // Show result section
    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth' });
    
    return buildDetails;
}

// Generate CSS from current colors
function generateCSS() {
    return `/* Generated Color Scheme */
:root {
    --header-color: ${currentColors.headers};
    --text-color: ${currentColors.text};
    --link-color: ${currentColors.links};
    --button-color: ${currentColors.buttons};
    --input-color: ${currentColors.inputs};
    --container-color: ${currentColors.containers};
    --background-color: ${currentColors.background};
    --border-color: ${currentColors.borders};
}

/* Apply to your elements */
h1, h2, h3, h4, h5, h6 {
    color: var(--header-color);
}

p, span, div {
    color: var(--text-color);
}

a {
    color: var(--link-color);
}

button, .btn {
    background-color: var(--button-color);
}

input, textarea, select {
    border-color: var(--input-color);
}

.container, section, div[class*="container"], div[class*="section"] {
    border: 1px solid var(--container-color);
}

body {
    background-color: var(--background-color);
}

* {
    border-color: var(--border-color);
}`;
}

// Update color in real-time
function updateColor(target, color, isPreview = false) {
    if (!isPreview) {
        currentColors[target] = color;
    }
    
    let css = '';
    
    switch(target) {
        case 'headers':
            css = `h1, h2, h3, h4, h5, h6 { 
                color: ${color} !important; 
                transition: color 0.3s ease;
            }`;
            break;
        case 'text':
            css = `body, p, span, div, li, td, th, label { 
                color: ${color} !important; 
                transition: color 0.3s ease;
            }`;
            break;
        case 'links':
            css = `a { 
                color: ${color} !important; 
                transition: color 0.3s ease, border-color 0.3s ease;
            }
            a:hover {
                opacity: 0.8;
            }`;
            break;
        case 'buttons':
            css = `button, .btn, [class*="button"], [class*="btn"], 
                  input[type="button"], input[type="submit"], input[type="reset"] { 
                background-color: ${color} !important; 
                border-color: ${color} !important;
                color: white !important;
                transition: background-color 0.3s ease, border-color 0.3s ease, opacity 0.2s ease;
            }
            button:hover, .btn:hover, [class*="button"]:hover, [class*="btn"]:hover,
            input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
                opacity: 0.9;
                transform: translateY(-1px);
            }`;
            break;
        case 'inputs':
            css = `input:not([type="button"]):not([type="submit"]):not([type="reset"]), 
                  textarea, select { 
                border: 1px solid ${color} !important; 
                box-shadow: 0 0 0 1px ${color}20 !important;
                padding: 8px 12px;
                border-radius: 4px;
                transition: border-color 0.3s ease, box-shadow 0.3s ease;
            }
            input:focus, textarea:focus, select:focus {
                outline: none;
                box-shadow: 0 0 0 2px ${color}40 !important;
            }`;
            break;
        case 'containers':
            css = `.container, section, div[class*="container"], div[class*="section"],
                  .card, .panel, .box, .modal-content {
                background-color: ${color} !important;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                transition: background-color 0.3s ease, box-shadow 0.3s ease;
            }`;
            break;
        case 'background':
            css = `body { 
                background-color: ${color} !important; 
                transition: background-color 0.5s ease;
            }`;
            break;
        case 'borders':
            css = `* { 
                border-color: ${color} !important; 
                transition: border-color 0.3s ease;
            }`;
            break;
    }
    
    // Update or add style
    let style = document.getElementById('dynamic-colors');
    if (!style) {
        style = document.createElement('style');
        style.id = 'dynamic-colors';
        document.head.appendChild(style);
    }
    
    if (isPreview) {
        // For preview, we'll add a temporary style
        let tempStyle = document.getElementById('temp-preview');
        if (!tempStyle) {
            tempStyle = document.createElement('style');
            tempStyle.id = 'temp-preview';
            document.head.appendChild(tempStyle);
        }
        tempStyle.textContent = css;
    } else {
        // For permanent changes, update the main style
        const existingStyles = style.textContent.split('}');
        const targetIndex = existingStyles.findIndex(s => s.includes(target));
        
        if (targetIndex !== -1) {
            existingStyles[targetIndex] = css;
            style.textContent = existingStyles.join('}');
        } else {
            style.textContent = (style.textContent + '\n' + css).trim();
        }
    }
}

// AI Image Generation with Promo Code
function initAIImageGeneration(build, total, game) {
    console.log('Initializing AI Image Generation...');
    
    // Get the generate button and result container
    const generateBtn = document.getElementById('generateAIImage');
    const aiImageResult = document.getElementById('aiImageResult');
    
    // Ensure required elements exist
    if (!aiImageResult || !generateBtn) {
        console.error('Required elements not found');
        return null; // Return null to indicate initialization failed
    }
    
    // Create loading spinner if it doesn't exist
    let loadingSpinner = aiImageResult.querySelector('.loading-spinner');
    if (!loadingSpinner) {
        loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'loading-spinner';
        aiImageResult.appendChild(loadingSpinner);
    }
    
    // Modal elements
    const modal = document.getElementById('promoModal');
    const promoCodeInput = document.getElementById('promoCode');
    const submitPromo = document.getElementById('submitPromo');
    const cancelPromo = document.getElementById('cancelPromo');
    const promoMessage = document.getElementById('promoMessage');
    
    // Check if all required elements exist
    if (!modal || !promoCodeInput || !submitPromo || !cancelPromo || !promoMessage) {
        console.error('One or more promo code elements not found');
        return;
    }
    
    // Show the generate button if it exists
    if (generateBtn) {
        generateBtn.style.display = 'block';
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate AI Visualization';
        
        // Remove any existing click event listeners to prevent duplicates
        const newBtn = generateBtn.cloneNode(true);
        generateBtn.parentNode.replaceChild(newBtn, generateBtn);
        
        // Add click event listener to the new button
        newBtn.addEventListener('click', function() {
            console.log('Generate button clicked');
            showPromoModal();
        });
    } else {
        console.error('Generate button not found');
        return;
    }
    
    // Store build details for later use
    const buildDetails = {
        game: game,
        budget: total,
        cpu: build.cpu.name,
        gpu: build.gpu.name,
        ram: build.ram.name,
        storage: build.storage.name,
        psu: build.psu.name,
        case: build.case?.name || 'Standard ATX Case'
    };
    
    // Check if promo is already verified in this session
    let isPromoVerified = localStorage.getItem('promoVerified') === 'true';
    
    // Show promo code modal
    function showPromoModal() {
        console.log('showPromoModal called');
        if (!modal) {
            console.error('Modal element not found');
            return;
        }
        
        // Show the modal with a slight delay to ensure the display property is set
        setTimeout(() => {
            modal.classList.add('visible');
            
            // Reset form
            if (promoCodeInput) promoCodeInput.value = '';
            if (promoMessage) {
                promoMessage.textContent = '';
                promoMessage.className = 'promo-message';
            }
            
            // Set focus to input
            setTimeout(() => {
                if (promoCodeInput) promoCodeInput.focus();
            }, 100);
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }, 10);
    }
    
    // Hide promo code modal
    function hidePromoModal() {
        console.log('hidePromoModal called');
        if (!modal) return;
        
        // Hide the modal
        modal.classList.remove('visible');
        
        // Re-enable body scroll after the transition
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }
    
    // Handle promo code submission
    if (submitPromo) {
        submitPromo.addEventListener('click', function() {
            const code = promoCodeInput.value.trim();
            
            if (code === '555') {
                // Correct promo code
                isPromoVerified = true;
                localStorage.setItem('promoVerified', 'true');
                
                if (promoMessage) {
                    promoMessage.textContent = 'Promo code accepted! Generating your image...';
                    promoMessage.className = 'promo-message success';
                }
                
                // Hide modal and generate image after a short delay
                setTimeout(() => {
                    hidePromoModal();
                    generateAIBuildImage(buildDetails);
                }, 1000);
            } else {
                // Incorrect promo code
                if (promoMessage) {
                    promoMessage.textContent = 'Invalid promo code. Please try again.';
                    promoMessage.className = 'promo-message error';
                }
                if (promoCodeInput) promoCodeInput.focus();
            }
        });
    }
    
    // Handle cancel button
    if (cancelPromo) {
        cancelPromo.addEventListener('click', hidePromoModal);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hidePromoModal();
            }
        });
    }
    
    // Handle Enter key in promo code input
    if (promoCodeInput) {
        promoCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitPromo.click();
            }
        });
    }
}

// Helper function to generate random color
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Toggle color picker visibility
function toggleColorPicker() {
    console.log('toggleColorPicker called, current state:', colorPickerVisible);
    const panel = document.getElementById('color-picker-panel');
    
    if (!panel) {
        console.error('Color picker panel not found!');
        return;
    }
    
    if (colorPickerVisible) {
        // Hide the panel
        panel.style.transform = 'translateX(100%) translateY(-50%)';
        setTimeout(() => {
            panel.style.display = 'none';
        }, 300);
    } else {
        // Show the panel
        panel.style.display = 'block';
        // Force reflow
        void panel.offsetWidth;
        panel.style.transform = 'translateX(0) translateY(-50%)';
        
        // Close when clicking outside
        const closeOnClickOutside = (e) => {
            if (!panel.contains(e.target) && e.target !== panel) {
                console.log('Click outside detected, closing color picker');
                toggleColorPicker();
                document.removeEventListener('click', closeOnClickOutside);
            }
        };
        
        // Add a small delay to prevent immediate closing
        setTimeout(() => {
            document.addEventListener('click', closeOnClickOutside);
        }, 100);
    }
    
    colorPickerVisible = !colorPickerVisible;
    console.log('Color picker visibility toggled to:', colorPickerVisible);
}

// Create color picker panel and controls
function createColorPicker() {
    // Create the color picker panel if it doesn't exist
    if (!document.getElementById('color-picker-panel')) {
        const panel = document.createElement('div');
        panel.id = 'color-picker-panel';
        panel.style.cssText = `
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateX(100%) translateY(-50%);
            background: white;
            padding: 20px;
            border-radius: 8px 0 0 8px;
            box-shadow: -2px 0 10px rgba(0,0,0,0.1);
            z-index: 1000;
            transition: transform 0.3s ease;
            width: 250px;
        `;

        // Add color controls
        const colorControls = [
            { id: 'header-color', label: 'Headers', key: 'headers' },
            { id: 'text-color', label: 'Text', key: 'text' },
            { id: 'link-color', label: 'Links', key: 'links' },
            { id: 'button-color', label: 'Buttons', key: 'buttons' },
            { id: 'input-color', label: 'Inputs', key: 'inputs' },
            { id: 'container-color', label: 'Containers', key: 'containers' },
            { id: 'background-color', label: 'Background', key: 'background' },
            { id: 'border-color', label: 'Borders', key: 'borders' }
        ];

        colorControls.forEach(control => {
            const wrapper = document.createElement('div');
            wrapper.style.marginBottom = '10px';
            
            const label = document.createElement('label');
            label.htmlFor = control.id;
            label.textContent = control.label;
            label.style.display = 'block';
            label.style.marginBottom = '5px';
            
            const input = document.createElement('input');
            input.type = 'color';
            input.id = control.id;
            input.value = currentColors[control.key];
            input.style.width = '100%';
            input.style.height = '30px';
            input.style.cursor = 'pointer';
            input.style.border = '1px solid #ddd';
            input.style.borderRadius = '4px';
            input.addEventListener('input', (e) => {
                updateColor(control.key, e.target.value);
            });
            
            wrapper.appendChild(label);
            wrapper.appendChild(input);
            panel.appendChild(wrapper);
        });

        // Add randomize button
        const randomizeBtn = document.createElement('button');
        randomizeBtn.textContent = 'Randomize Colors';
        randomizeBtn.style.marginTop = '15px';
        randomizeBtn.style.padding = '8px 12px';
        randomizeBtn.style.backgroundColor = '#3498db';
        randomizeBtn.style.color = 'white';
        randomizeBtn.style.border = 'none';
        randomizeBtn.style.borderRadius = '4px';
        randomizeBtn.style.cursor = 'pointer';
        randomizeBtn.style.width = '100%';
        randomizeBtn.onclick = () => {
            Object.keys(currentColors).forEach(key => {
                const color = getRandomColor();
                currentColors[key] = color;
                updateColor(key, color);
                const input = document.getElementById(`${key}-color`);
                if (input) input.value = color;
            });
        };
        
        panel.appendChild(randomizeBtn);
        document.body.appendChild(panel);
    }
}

// Default color scheme
const currentColors = {
    headers: '#2c3e50',
    text: '#2c3e50',
    links: '#3498db',
    buttons: '#3498db',
    inputs: '#ecf0f1',
    containers: '#ffffff',
    background: '#f8f9fa',
    borders: '#d1d5db'
};

// Initialize color picker when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Initializing color picker...');
    
    // Create the color picker
    createColorPicker();
    
    // Apply saved colors
    Object.entries(currentColors).forEach(([key, color]) => {
        updateColor(key, color);
    });
    
    // Add keyboard shortcut help
    const helpText = document.createElement('div');
    helpText.id = 'color-picker-help';
    helpText.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 9998;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    helpText.textContent = 'Press "O" to open color picker';
    document.body.appendChild(helpText);
    
    // Show help text on first visit
    const hasSeenHelp = localStorage.getItem('hasSeenColorPickerHelp');
    if (!hasSeenHelp) {
        setTimeout(() => {
            helpText.style.opacity = '1';
            setTimeout(() => {
                helpText.style.opacity = '0';
                localStorage.setItem('hasSeenColorPickerHelp', 'true');
            }, 5000);
        }, 1000);
    }
});

// Add keyboard event listener for 'o' key
document.addEventListener('keydown', (event) => {
    // Check if 'o' key was pressed and not in an input/textarea/select
    if (event.key.toLowerCase() === 'o' && 
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) {
        console.log('O key pressed, toggling color picker...');
        event.preventDefault();
        event.stopPropagation();
        toggleColorPicker();
    }
});
