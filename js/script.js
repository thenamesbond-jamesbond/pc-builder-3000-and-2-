// PC Parts Database
const partsDatabase = {
    // Budget builds ($300-$500)
    budget: {
        cpu: [
            { name: 'AMD Ryzen 3 3200G (4C/4T, 3.6GHz)', price: 99, url: 'https://www.amazon.com/s?k=AMD+Ryzen+3+3200G' },
            { name: 'Intel Core i3-10100 (4C/8T, 3.6GHz)', price: 119, url: 'https://www.amazon.com/s?k=Intel+Core+i3-10100' },
            { name: 'AMD Ryzen 5 3400G (4C/8T, 3.7GHz)', price: 129, url: 'https://www.amazon.com/s?k=AMD+Ryzen+5+3400G' },
            { name: 'Intel Core i3-12100F (4C/8T, 3.3GHz)', price: 109, url: 'https://www.amazon.com/s?k=Intel+Core+i3-12100F' }
        ],
        gpu: [
            { name: 'Integrated Graphics (Vega 8/RX Vega 8)', price: 0, url: '' },
            { name: 'NVIDIA GTX 1650 (4GB GDDR6)', price: 169, url: 'https://www.amazon.com/s?k=NVIDIA+GTX+1650' },
            { name: 'AMD RX 6400 (4GB GDDR6)', price: 159, url: 'https://www.amazon.com/s?k=AMD+RX+6400' },
            { name: 'NVIDIA GTX 1050 Ti (4GB GDDR5)', price: 149, url: 'https://www.amazon.com/s?k=NVIDIA+GTX+1050+Ti' }
        ],
        ram: [
            { name: '8GB DDR4 3200MHz (2x4GB)', price: 35, url: 'https://www.amazon.com/s?k=8GB+DDR4+3200MHz' },
            { name: '16GB DDR4 3200MHz (2x8GB)', price: 65, url: 'https://www.amazon.com/s?k=16GB+DDR4+3200MHz' },
            { name: '8GB DDR4 3600MHz (1x8GB)', price: 32, url: 'https://www.amazon.com/s?k=8GB+DDR4+3600MHz' },
            { name: '16GB DDR4 3000MHz (2x8GB)', price: 59, url: 'https://www.amazon.com/s?k=16GB+DDR4+3000MHz' }
        ],
        storage: [
            { name: '500GB NVMe SSD (Gen3)', price: 45, url: 'https://www.amazon.com/s?k=500GB+NVMe+SSD' },
            { name: '1TB HDD (7200RPM)', price: 40, url: 'https://www.amazon.com/s?k=1TB+HDD' },
            { name: '250GB NVMe SSD + 1TB HDD', price: 65, url: 'https://www.amazon.com/s?k=250GB+NVMe+SSD' },
            { name: '480GB SATA SSD', price: 42, url: 'https://www.amazon.com/s?k=480GB+SATA+SSD' }
        ],
        motherboard: [
            { name: 'ASUS Prime B450M-A (AMD)', price: 79, url: 'https://www.amazon.com/s?k=ASUS+Prime+B450M-A' },
            { name: 'Gigabyte B460M DS3H (Intel)', price: 89, url: 'https://www.amazon.com/s?k=Gigabyte+B460M+DS3H' },
            { name: 'MSI A520M-A PRO (AMD)', price: 69, url: 'https://www.amazon.com/s?k=MSI+A520M-A+PRO' },
            { name: 'ASRock H510M-HDV (Intel)', price: 74, url: 'https://www.amazon.com/s?k=ASRock+H510M-HDV' }
        ],
        psu: [
            { name: 'EVGA 450W 80+ Bronze', price: 44, url: 'https://www.amazon.com/s?k=EVGA+450W+80%2B+Bronze' },
            { name: 'Corsair CV450 (450W)', price: 49, url: 'https://www.amazon.com/s?k=Corsair+CV450' },
            { name: 'Thermaltake Smart 500W', price: 47, url: 'https://www.amazon.com/s?k=Thermaltake+Smart+500W' },
            { name: 'EVGA 500W 80+ White', price: 52, url: 'https://www.amazon.com/s?k=EVGA+500W+80%2B+White' }
        ],
        case: [
            { name: 'NZXT H510 (ATX)', price: 69, url: 'https://www.amazon.com/s?k=NZXT+H510' },
            { name: 'Cooler Master MasterBox Q300L (mATX)', price: 49, url: 'https://www.amazon.com/s?k=Cooler+Master+MasterBox+Q300L' },
            { name: 'Fractal Design Focus G (ATX)', price: 59, url: 'https://www.amazon.com/s?k=Fractal+Design+Focus+G' },
            { name: 'Deepcool MATREXX 30 (mATX)', price: 45, url: 'https://www.amazon.com/s?k=Deepcool+MATREXX+30' }
        ]
    },
    // Mid-range builds ($500-$800)
    mid: {
        cpu: [
            { name: 'AMD Ryzen 5 5600G (6C/12T, 3.9GHz)', price: 159, url: 'https://www.amazon.com/s?k=AMD+Ryzen+5+5600G' },
            { name: 'Intel Core i5-11400F (6C/12T, 2.6GHz)', price: 179, url: 'https://www.amazon.com/s?k=Intel+Core+i5-11400F' },
            { name: 'AMD Ryzen 5 5600 (6C/12T, 3.5GHz)', price: 199, url: 'https://www.amazon.com/s?k=AMD+Ryzen+5+5600' },
            { name: 'Intel Core i5-12400F (6C/12T, 2.5GHz)', price: 219, url: 'https://www.amazon.com/s?k=Intel+Core+i5-12400F' }
        ],
        gpu: [
            { name: 'NVIDIA RTX 3050 (8GB GDDR6)', price: 249, url: 'https://www.amazon.com/s?k=NVIDIA+RTX+3050' },
            { name: 'AMD RX 6600 (8GB GDDR6)', price: 249, url: 'https://www.amazon.com/s?k=AMD+RX+6600' },
            { name: 'NVIDIA RTX 2060 (6GB GDDR6)', price: 229, url: 'https://www.amazon.com/s?k=NVIDIA+RTX+2060' },
            { name: 'AMD RX 6600 XT (8GB GDDR6)', price: 259, url: 'https://www.amazon.com/s?k=AMD+RX+6600+XT' }
        ],
        ram: [
            { name: '16GB DDR4 3200MHz (2x8GB)', price: 65, url: 'https://www.amazon.com/s?k=16GB+DDR4+3200MHz' },
            { name: '16GB DDR4 3600MHz (2x8GB)', price: 75, url: 'https://www.amazon.com/s?k=16GB+DDR4+3600MHz' },
            { name: '32GB DDR4 3200MHz (2x16GB)', price: 119, url: 'https://www.amazon.com/s?k=32GB+DDR4+3200MHz' },
            { name: '16GB DDR4 3600MHz CL16 (2x8GB)', price: 89, url: 'https://www.amazon.com/s?k=16GB+DDR4+3600MHz+CL16' }
        ],
        storage: [
            { name: '1TB NVMe SSD (Gen3)', price: 89, url: 'https://www.amazon.com/s?k=1TB+NVMe+SSD' },
            { name: '500GB NVMe SSD + 2TB HDD', price: 120, url: 'https://www.amazon.com/s?k=2TB+HDD' },
            { name: '1TB NVMe SSD (Gen4)', price: 109, url: 'https://www.amazon.com/s?k=1TB+Gen4+NVMe+SSD' },
            { name: '2TB SATA SSD', price: 139, url: 'https://www.amazon.com/s?k=2TB+SATA+SSD' }
        ],
        motherboard: [
            { name: 'MSI B550M PRO-VDH WIFI (AMD)', price: 119, url: 'https://www.amazon.com/s?k=MSI+B550M+PRO-VDH+WIFI' },
            { name: 'ASUS TUF GAMING B560-PLUS (Intel)', price: 139, url: 'https://www.amazon.com/s?k=ASUS+TUF+GAMING+B560-PLUS' },
            { name: 'Gigabyte B550 AORUS ELITE (AMD)', price: 159, url: 'https://www.amazon.com/s?k=Gigabyte+B550+AORUS+ELITE' },
            { name: 'MSI B560M PRO-VDH (Intel)', price: 124, url: 'https://www.amazon.com/s?k=MSI+B560M+PRO-VDH' }
        ],
        psu: [
            { name: 'EVGA 550W 80+ Gold', price: 69, url: 'https://www.amazon.com/s?k=EVGA+550W+80%2B+Gold' },
            { name: 'Corsair CX550M (550W)', price: 74, url: 'https://www.amazon.com/s?k=Corsair+CX550M' },
            { name: 'Seasonic FOCUS GX-550 (550W)', price: 89, url: 'https://www.amazon.com/s?k=Seasonic+FOCUS+GX-550' },
            { name: 'Thermaltake Toughpower GX2 (600W)', price: 79, url: 'https://www.amazon.com/s?k=Thermaltake+Toughpower+GX2' }
        ],
        case: [
            { name: 'Lian Li Lancool 215 (ATX)', price: 89, url: 'https://www.amazon.com/s?k=Lian+Li+Lancool+215' },
            { name: 'Phanteks Eclipse P300A (ATX)', price: 69, url: 'https://www.amazon.com/s?k=Phanteks+Eclipse+P300A' },
            { name: 'Corsair 4000D Airflow (ATX)', price: 99, url: 'https://www.amazon.com/s?k=Corsair+4000D+Airflow' },
            { name: 'NZXT H510 Flow (ATX)', price: 89, url: 'https://www.amazon.com/s?k=NZXT+H510+Flow' }
        ]
    },
    // High-end builds ($800+)
    high: {
        cpu: [
            { name: 'AMD Ryzen 7 5800X3D (8C/16T, 3.4GHz)', price: 349, url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+5800X3D' },
            { name: 'Intel Core i5-13600K (14C/20T, 3.5GHz)', price: 299, url: 'https://www.amazon.com/s?k=Intel+Core+i5-13600K' },
            { name: 'AMD Ryzen 9 5900X (12C/24T, 3.7GHz)', price: 399, url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+5900X' },
            { name: 'Intel Core i7-13700K (16C/24T, 3.4GHz)', price: 419, url: 'https://www.amazon.com/s?k=Intel+Core+i7-13700K' }
        ],
        gpu: [
            { name: 'NVIDIA RTX 4070 (12GB GDDR6X)', price: 599, url: 'https://www.amazon.com/s?k=NVIDIA+RTX+4070' },
            { name: 'AMD RX 7800 XT (16GB GDDR6)', price: 549, url: 'https://www.amazon.com/s?k=AMD+RX+7800+XT' },
            { name: 'NVIDIA RTX 3080 (10GB GDDR6X)', price: 699, url: 'https://www.amazon.com/s?k=NVIDIA+RTX+3080' },
            { name: 'AMD RX 6800 XT (16GB GDDR6)', price: 649, url: 'https://www.amazon.com/s?k=AMD+RX+6800+XT' }
        ],
        ram: [
            { name: '32GB DDR4 3600MHz (2x16GB)', price: 129, url: 'https://www.amazon.com/s?k=32GB+DDR4+3600MHz' },
            { name: '32GB DDR5 6000MHz (2x16GB)', price: 199, url: 'https://www.amazon.com/s?k=32GB+DDR5+6000MHz' },
            { name: '64GB DDR4 3600MHz (2x32GB)', price: 229, url: 'https://www.amazon.com/s?k=64GB+DDR4+3600MHz' },
            { name: '32GB DDR5 6400MHz CL32 (2x16GB)', price: 249, url: 'https://www.amazon.com/s?k=32GB+DDR5+6400MHz+CL32' }
        ],
        storage: [
            { name: '2TB NVMe SSD (Gen4)', price: 179, url: 'https://www.amazon.com/s?k=2TB+NVMe+SSD' },
            { name: '1TB NVMe SSD (Gen4) + 4TB HDD', price: 199, url: 'https://www.amazon.com/s?k=4TB+HDD' },
            { name: '2TB PCIe 4.0 NVMe SSD (7000MB/s)', price: 219, url: 'https://www.amazon.com/s?k=2TB+PCIe+4.0+NVMe+SSD' },
            { name: '4TB NVMe SSD (Gen4)', price: 349, url: 'https://www.amazon.com/s?k=4TB+NVMe+SSD' }
        ],
        motherboard: [
            { name: 'MSI MAG B550 TOMAHAWK (AMD)', price: 169, url: 'https://www.amazon.com/s?k=MSI+MAG+B550+TOMAHAWK' },
            { name: 'ASUS ROG STRIX Z790-E (Intel)', price: 399, url: 'https://www.amazon.com/s?k=ASUS+ROG+STRIX+Z790-E' },
            { name: 'Gigabyte X570S AORUS ELITE (AMD)', price: 229, url: 'https://www.amazon.com/s?k=Gigabyte+X570S+AORUS+ELITE' },
            { name: 'MSI PRO Z790-P (Intel)', price: 209, url: 'https://www.amazon.com/s?k=MSI+PRO+Z790-P' }
        ],
        psu: [
            { name: 'Corsair RM750x (750W, 80+ Gold)', price: 119, url: 'https://www.amazon.com/s?k=Corsair+RM750x' },
            { name: 'EVGA SuperNOVA 750 G6 (750W)', price: 129, url: 'https://www.amazon.com/s?k=EVGA+SuperNOVA+750+G6' },
            { name: 'Seasonic FOCUS GX-850 (850W, 80+ Gold)', price: 159, url: 'https://www.amazon.com/s?k=Seasonic+FOCUS+GX-850' },
            { name: 'Corsair RM1000x (1000W, 80+ Gold)', price: 199, url: 'https://www.amazon.com/s?k=Corsair+RM1000x' }
        ],
        case: [
            { name: 'Lian Li PC-O11 Dynamic (ATX)', price: 149, url: 'https://www.amazon.com/s?k=Lian+Li+PC-O11+Dynamic' },
            { name: 'Fractal Design Meshify C (ATX)', price: 109, url: 'https://www.amazon.com/s?k=Fractal+Design+Meshify+C' },
            { name: 'Corsair iCUE 5000X RGB (ATX)', price: 179, url: 'https://www.amazon.com/s?k=Corsair+iCUE+5000X+RGB' },
            { name: 'Phanteks Enthoo Pro 2 (Full Tower)', price: 159, url: 'https://www.amazon.com/s?k=Phanteks+Enthoo+Pro+2' }
        ]
    }
};

// Game-specific optimizations
const gameOptimizations = {
    // Battle Royale & FPS
    'fortnite': {
        budget: { gpuWeight: 1.2, cpuWeight: 0.9, ramWeight: 1.0 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.0, ramWeight: 1.0 },
        high: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.0 }
    },
    'call-of-duty-warzone': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.0, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.1, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.2, ramWeight: 1.3 }
    },
    'apex-legends': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.0, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.1 }
    },
    'pubg-battlegrounds': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'counter-strike-2': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.2, ramWeight: 1.0 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.0 }
    },
    'valorant': {
        budget: { gpuWeight: 1.0, cpuWeight: 1.2, ramWeight: 1.0 },
        mid: { gpuWeight: 1.1, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.2, cpuWeight: 1.0, ramWeight: 1.0 }
    },
    'rainbow-six-siege': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.0 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.0 },
        high: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.1 }
    },
    'overwatch-2': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 }
    },
    'destiny-2': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.0, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'halo-infinite': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.0, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 }
    },

    // MOBAs & Strategy
    'dota-2': {
        budget: { gpuWeight: 0.9, cpuWeight: 1.2, ramWeight: 1.0 },
        mid: { gpuWeight: 1.0, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.1, cpuWeight: 1.1, ramWeight: 1.1 }
    },
    'league-of-legends': {
        budget: { gpuWeight: 0.7, cpuWeight: 1.3, ramWeight: 1.0 },
        mid: { gpuWeight: 0.8, cpuWeight: 1.2, ramWeight: 1.0 },
        high: { gpuWeight: 1.0, cpuWeight: 1.1, ramWeight: 1.0 }
    },
    'starcraft-2': {
        budget: { gpuWeight: 0.8, cpuWeight: 1.3, ramWeight: 1.1 },
        mid: { gpuWeight: 0.9, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.0, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'age-of-empires-iv': {
        budget: { gpuWeight: 1.0, cpuWeight: 1.3, ramWeight: 1.1 },
        mid: { gpuWeight: 1.1, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.2, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'civilization-vi': {
        budget: { gpuWeight: 0.9, cpuWeight: 1.4, ramWeight: 1.2 },
        mid: { gpuWeight: 1.0, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.1, cpuWeight: 1.3, ramWeight: 1.3 }
    },

    // Open World & RPGs
    'grand-theft-auto-v': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'red-dead-redemption-2': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'elden-ring': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'cyberpunk-2077': {
        budget: { gpuWeight: 1.5, cpuWeight: 1.1, ramWeight: 1.2 },
        mid: { gpuWeight: 1.6, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.7, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'the-witcher-3': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'fallout-4': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'skyrim-special-edition': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 }
    },
    'assassins-creed-valhalla': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'horizon-zero-dawn': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'starfield': {
        budget: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.3 },
        mid: { gpuWeight: 1.6, cpuWeight: 1.4, ramWeight: 1.4 },
        high: { gpuWeight: 1.7, cpuWeight: 1.5, ramWeight: 1.5 }
    },
    'baldurs-gate-3': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.3 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.4 },
        high: { gpuWeight: 1.6, cpuWeight: 1.4, ramWeight: 1.5 }
    },
    'elden-ring-shadow-of-the-erdtree': {
        budget: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.3 },
        mid: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.4 },
        high: { gpuWeight: 1.7, cpuWeight: 1.4, ramWeight: 1.5 }
    },
    'dragon-age-inquisition': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'kingdom-come-deliverance': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.2 },
        high: { gpuWeight: 1.5, cpuWeight: 1.4, ramWeight: 1.3 }
    },
    'divinity-original-sin-2': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.3, cpuWeight: 1.4, ramWeight: 1.4 }
    },
    'pathfinder-wotr': {
        budget: { gpuWeight: 1.0, cpuWeight: 1.3, ramWeight: 1.3 },
        mid: { gpuWeight: 1.1, cpuWeight: 1.4, ramWeight: 1.4 },
        high: { gpuWeight: 1.2, cpuWeight: 1.5, ramWeight: 1.5 }
    },

    // Survival & Sandbox
    'minecraft': {
        budget: { gpuWeight: 0.7, cpuWeight: 1.4, ramWeight: 1.2 },
        mid: { gpuWeight: 0.8, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.0, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'rust': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.3, ramWeight: 1.2 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.4 }
    },
    'ark-survival-evolved': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.4 }
    },
    'subnautica': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'valheim': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.2, ramWeight: 1.1 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.3 }
    },
    'satisfactory': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.4, ramWeight: 1.3 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.5, ramWeight: 1.4 },
        high: { gpuWeight: 1.4, cpuWeight: 1.6, ramWeight: 1.5 }
    },
    'dont-starve-together': {
        budget: { gpuWeight: 0.8, cpuWeight: 1.1, ramWeight: 1.0 },
        mid: { gpuWeight: 0.9, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.0, cpuWeight: 1.3, ramWeight: 1.2 }
    },
    'the-forest': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.3, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'sons-of-the-forest': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.3 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.4 },
        high: { gpuWeight: 1.6, cpuWeight: 1.4, ramWeight: 1.5 }
    },
    'terraria': {
        budget: { gpuWeight: 0.5, cpuWeight: 1.0, ramWeight: 0.8 },
        mid: { gpuWeight: 0.6, cpuWeight: 1.1, ramWeight: 0.9 },
        high: { gpuWeight: 0.7, cpuWeight: 1.2, ramWeight: 1.0 }
    },
    'no-mans-sky': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.5, cpuWeight: 1.4, ramWeight: 1.4 }
    },
    'raft': {
        budget: { gpuWeight: 1.0, cpuWeight: 1.1, ramWeight: 1.0 },
        mid: { gpuWeight: 1.1, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.2, cpuWeight: 1.3, ramWeight: 1.2 }
    },
    'green-hell': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.3, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'v-rising': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.4, cpuWeight: 1.4, ramWeight: 1.4 }
    },

    // Console Games on PC
    'minecraft-dungeons': {
        budget: { gpuWeight: 0.8, cpuWeight: 0.9, ramWeight: 0.9 },
        mid: { gpuWeight: 0.9, cpuWeight: 1.0, ramWeight: 1.0 },
        high: { gpuWeight: 1.0, cpuWeight: 1.1, ramWeight: 1.1 }
    },
    'halo-the-master-chief-collection': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'gears-5': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.2 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.3 },
        high: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.4 }
    },
    'sea-of-thieves': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.2 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.3 },
        high: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.4 }
    },
    'forza-horizon-5': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.2, ramWeight: 1.3 }
    },
    'fifa-23': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.0 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'f1-23': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 }
    },

    // Console Exclusives on PC
    'god-of-war': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.6, cpuWeight: 1.4, ramWeight: 1.4 }
    },
    'spider-man-remastered': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.6, cpuWeight: 1.4, ramWeight: 1.4 }
    },
    'horizon-zero-dawn-complete': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.6, cpuWeight: 1.4, ramWeight: 1.4 }
    },
    'death-stranding': {
        budget: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.5, cpuWeight: 1.4, ramWeight: 1.4 }
    },

    // Simulation & Building
    'cities-skylines': {
        budget: { gpuWeight: 0.9, cpuWeight: 1.4, ramWeight: 1.3 },
        mid: { gpuWeight: 1.0, cpuWeight: 1.4, ramWeight: 1.4 },
        high: { gpuWeight: 1.1, cpuWeight: 1.3, ramWeight: 1.5 }
    },
    'planet-zoo': {
        budget: { gpuWeight: 1.2, cpuWeight: 1.3, ramWeight: 1.2 },
        mid: { gpuWeight: 1.3, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.4, cpuWeight: 1.3, ramWeight: 1.4 }
    },
    'euro-truck-simulator-2': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 }
    },

    // Horror & Story-Driven
    'resident-evil-village': {
        budget: { gpuWeight: 1.4, cpuWeight: 1.1, ramWeight: 1.1 },
        mid: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        high: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.3 }
    },
    'the-last-of-us-part-i': {
        budget: { gpuWeight: 1.5, cpuWeight: 1.2, ramWeight: 1.2 },
        mid: { gpuWeight: 1.6, cpuWeight: 1.3, ramWeight: 1.3 },
        high: { gpuWeight: 1.7, cpuWeight: 1.4, ramWeight: 1.4 }
    },
    'phasmophobia': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.3, cpuWeight: 1.1, ramWeight: 1.1 }
    },

    // Indie & Casual
    'stardew-valley': {
        budget: { gpuWeight: 0.5, cpuWeight: 0.5, ramWeight: 0.5 },
        mid: { gpuWeight: 0.6, cpuWeight: 0.6, ramWeight: 0.6 },
        high: { gpuWeight: 0.7, cpuWeight: 0.7, ramWeight: 0.7 }
    },
    'hades': {
        budget: { gpuWeight: 0.8, cpuWeight: 0.8, ramWeight: 0.7 },
        mid: { gpuWeight: 0.9, cpuWeight: 0.9, ramWeight: 0.8 },
        high: { gpuWeight: 1.0, cpuWeight: 1.0, ramWeight: 0.9 }
    },
    'among-us': {
        budget: { gpuWeight: 0.4, cpuWeight: 0.5, ramWeight: 0.4 },
        mid: { gpuWeight: 0.5, cpuWeight: 0.6, ramWeight: 0.5 },
        high: { gpuWeight: 0.6, cpuWeight: 0.7, ramWeight: 0.6 }
    },
    'hollow-knight': {
        budget: { gpuWeight: 0.6, cpuWeight: 0.7, ramWeight: 0.6 },
        mid: { gpuWeight: 0.7, cpuWeight: 0.8, ramWeight: 0.7 },
        high: { gpuWeight: 0.8, cpuWeight: 0.9, ramWeight: 0.8 }
    },
    'celeste': {
        budget: { gpuWeight: 0.5, cpuWeight: 0.7, ramWeight: 0.5 },
        mid: { gpuWeight: 0.6, cpuWeight: 0.8, ramWeight: 0.6 },
        high: { gpuWeight: 0.7, cpuWeight: 0.9, ramWeight: 0.7 }
    },
    'dead-cells': {
        budget: { gpuWeight: 0.7, cpuWeight: 0.8, ramWeight: 0.6 },
        mid: { gpuWeight: 0.8, cpuWeight: 0.9, ramWeight: 0.7 },
        high: { gpuWeight: 0.9, cpuWeight: 1.0, ramWeight: 0.8 }
    },
    'stray': {
        budget: { gpuWeight: 1.1, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 1.2, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.3, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'hades-ii': {
        budget: { gpuWeight: 0.9, cpuWeight: 1.0, ramWeight: 0.9 },
        mid: { gpuWeight: 1.0, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.1, cpuWeight: 1.2, ramWeight: 1.1 }
    },
    'cult-of-the-lamb': {
        budget: { gpuWeight: 0.7, cpuWeight: 0.8, ramWeight: 0.8 },
        mid: { gpuWeight: 0.8, cpuWeight: 0.9, ramWeight: 0.9 },
        high: { gpuWeight: 0.9, cpuWeight: 1.0, ramWeight: 1.0 }
    },
    'dave-the-diver': {
        budget: { gpuWeight: 0.6, cpuWeight: 0.7, ramWeight: 0.7 },
        mid: { gpuWeight: 0.7, cpuWeight: 0.8, ramWeight: 0.8 },
        high: { gpuWeight: 0.8, cpuWeight: 0.9, ramWeight: 0.9 }
    },
    'tunic': {
        budget: { gpuWeight: 0.8, cpuWeight: 0.8, ramWeight: 0.8 },
        mid: { gpuWeight: 0.9, cpuWeight: 0.9, ramWeight: 0.9 },
        high: { gpuWeight: 1.0, cpuWeight: 1.0, ramWeight: 1.0 }
    },
    'sifu': {
        budget: { gpuWeight: 1.0, cpuWeight: 1.0, ramWeight: 0.9 },
        mid: { gpuWeight: 1.1, cpuWeight: 1.1, ramWeight: 1.0 },
        high: { gpuWeight: 1.2, cpuWeight: 1.2, ramWeight: 1.1 }
    },
    'kenshi': {
        budget: { gpuWeight: 0.8, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 0.9, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 1.0, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'project-zomboid': {
        budget: { gpuWeight: 0.7, cpuWeight: 1.0, ramWeight: 1.0 },
        mid: { gpuWeight: 0.8, cpuWeight: 1.1, ramWeight: 1.1 },
        high: { gpuWeight: 0.9, cpuWeight: 1.2, ramWeight: 1.2 }
    },
    'rimworld': {
        budget: { gpuWeight: 0.6, cpuWeight: 1.1, ramWeight: 1.0 },
        mid: { gpuWeight: 0.7, cpuWeight: 1.2, ramWeight: 1.1 },
        high: { gpuWeight: 0.8, cpuWeight: 1.3, ramWeight: 1.2 }
    },
    'factorio': {
        budget: { gpuWeight: 0.5, cpuWeight: 1.2, ramWeight: 1.1 },
        mid: { gpuWeight: 0.6, cpuWeight: 1.3, ramWeight: 1.2 },
        high: { gpuWeight: 0.7, cpuWeight: 1.4, ramWeight: 1.3 }
    },
    'dredge': {
        budget: { gpuWeight: 0.7, cpuWeight: 0.7, ramWeight: 0.7 },
        mid: { gpuWeight: 0.8, cpuWeight: 0.8, ramWeight: 0.8 },
        high: { gpuWeight: 0.9, cpuWeight: 0.9, ramWeight: 0.9 }
    },
    'vampire-survivors': {
        budget: { gpuWeight: 0.5, cpuWeight: 0.8, ramWeight: 0.7 },
        mid: { gpuWeight: 0.6, cpuWeight: 0.9, ramWeight: 0.8 },
        high: { gpuWeight: 0.7, cpuWeight: 1.0, ramWeight: 0.9 }
    }
};

// DOM Elements
const gameSelect = document.getElementById('game');
const budgetInput = document.getElementById('budget');
const selectedGamesContainer = document.getElementById('selected-games');

// Track selected games
let selectedGames = [];

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
const buildBtn = document.getElementById('build-btn');
const resultDiv = document.getElementById('result');
const buildDetails = document.getElementById('build-details');
const totalCost = document.getElementById('total-cost');
const buildLink = document.getElementById('build-link');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    buildBtn.addEventListener('click', generateBuild);
});

// Calculate combined optimizations for multiple games
function getCombinedOptimizations(gameIds, tier) {
    // Start with default weights
    const combined = {
        cpuWeight: 1.0,
        gpuWeight: 1.0,
        ramWeight: 1.0
    };
    
    // Sum up weights from all selected games
    let count = 0;
    gameIds.forEach(gameId => {
        const gameOpt = gameOptimizations[gameId]?.[tier];
        if (gameOpt) {
            combined.cpuWeight = Math.max(combined.cpuWeight, gameOpt.cpuWeight || 1.0);
            combined.gpuWeight = Math.max(combined.gpuWeight, gameOpt.gpuWeight || 1.0);
            combined.ramWeight = Math.max(combined.ramWeight, gameOpt.ramWeight || 1.0);
            count++;
        }
    });
    
    // If we have multiple games, slightly increase weights to ensure we meet all requirements
    if (count > 1) {
        const scaleFactor = 1 + (0.1 * (count - 1)); // Scale up based on number of games
        combined.cpuWeight *= scaleFactor;
        combined.gpuWeight *= scaleFactor;
        combined.ramWeight *= scaleFactor;
    }
    
    return combined;
}

// Generate PC build based on user input
function generateBuild() {
    // Validate game selection
    if (selectedGames.length === 0) {
        alert('Please select at least one game.');
        return;
    }
    
    if (selectedGames.length > 4) {
        alert('Please select a maximum of 4 games.');
        return;
    }
    
    const budget = parseInt(budgetInput.value);
    const maxAttempts = 20; // Maximum number of attempts to find a build within budget
    let attempts = 0;
    let build, total;
    
    // Determine build tier
    let tier;
    if (budget < 500) {
        tier = 'budget';
    } else if (budget < 1000) {
        tier = 'mid';
    } else {
        tier = 'high';
    }
    
    // Get combined optimizations for all selected games
    const optimizations = getCombinedOptimizations(selectedGames, tier);
    
    // Try to generate a build within £50 of the budget
    do {
        // Generate build
        build = {
            cpu: getOptimalPart('cpu', tier, optimizations.cpuWeight, budget),
            gpu: getOptimalPart('gpu', tier, optimizations.gpuWeight, budget),
            ram: getOptimalPart('ram', tier, optimizations.ramWeight, budget),
            storage: getOptimalPart('storage', tier, 1, budget),
            motherboard: getOptimalPart('motherboard', tier, 1, budget),
            psu: getOptimalPart('psu', tier, 1, budget),
            case: getOptimalPart('case', tier, 1, budget)
        };
        
        // Calculate total cost
        total = Object.values(build).reduce((sum, part) => sum + part.price, 0);
        
        attempts++;
        
        // If we're within £50 of the budget, we're done
        if (Math.abs(total - budget) <= 50) {
            break;
        }
        
        // If we're over budget, try to find cheaper components
        if (total > budget + 50) {
            // Try to replace the most expensive non-essential component with a cheaper option
            const sortedParts = Object.entries(build)
                .filter(([partType]) => !['cpu', 'gpu'].includes(partType)) // Don't touch CPU/GPU as they're most important
                .sort((a, b) => b[1].price - a[1].price);
                
            for (const [partType, currentPart] of sortedParts) {
                const availableParts = partsDatabase[tier][partType];
                if (availableParts.length > 1) {
                    // Try to find a cheaper part of the same type
                    const cheaperPart = availableParts.find(p => p.price < currentPart.price);
                    if (cheaperPart) {
                        build[partType] = cheaperPart;
                        total = Object.values(build).reduce((sum, part) => sum + part.price, 0);
                        if (Math.abs(total - budget) <= 50) break;
                    }
                }
            }
        }
        
    } while ((Math.abs(total - budget) > 50) && (attempts < maxAttempts));
    
    // If we still couldn't get within £50, adjust the most expensive part to hit the target
    if (Math.abs(total - budget) > 50) {
        const partTypes = Object.keys(build);
        const adjustmentNeeded = budget - total;
        
        // Sort parts by price (descending)
        partTypes.sort((a, b) => build[b].price - build[a].price);
        
        // Try to adjust the most expensive parts first
        for (const partType of partTypes) {
            const availableParts = partsDatabase[tier][partType];
            if (availableParts.length <= 1) continue; // Skip if no alternative parts
            
            // Find the part that gets us closest to the target
            let bestPart = build[partType];
            let bestDiff = Math.abs(total - budget);
            
            for (const part of availableParts) {
                const newTotal = total - build[partType].price + part.price;
                const newDiff = Math.abs(newTotal - budget);
                
                if (newDiff < bestDiff) {
                    bestDiff = newDiff;
                    bestPart = part;
                }
                
                // If we found a part that gets us within £50, use it
                if (newDiff <= 50) {
                    bestPart = part;
                    break;
                }
            }
            
            // Update the build with the best part found
            total = total - build[partType].price + bestPart.price;
            build[partType] = bestPart;
            
            if (Math.abs(total - budget) <= 50) break;
        }
    }
    
    // Display results
    displayBuild(build, total, selectedGames);
}

// Get the optimal part based on budget and optimizations
function getOptimalPart(partType, tier, weight, budget) {
    const availableParts = partsDatabase[tier][partType];
    
    // If only one option, return it
    if (availableParts.length === 1) {
        return availableParts[0];
    }
    
    // For two options, choose based on weight and budget
    const budgetPerPart = budget / 7; // Rough estimate of budget per component
    const part1 = availableParts[0];
    const part2 = availableParts[1];
    
    // If one part is significantly more expensive and we're on a tight budget, choose the cheaper one
    if (part2.price > part1.price * 1.5 && budgetPerPart < part2.price) {
        return part1;
    }
    
    // Otherwise, choose based on weight and budget
    const randomFactor = Math.random() * 0.3 - 0.15; // Add some randomness (±15%)
    const selectionThreshold = 0.5 + (weight - 1) * 0.5 + randomFactor;
    
    return Math.random() < selectionThreshold ? part2 : part1;
}

// Display the generated build
function displayBuild(build, total, games) {
    // Clear previous build
    buildDetails.innerHTML = '';
    
    // Get game names
    const gameNames = games.map(gameId => {
        const option = gameSelect.querySelector(`option[value="${gameId}"]`);
        return option ? option.textContent : gameId;
    });
    
    // Start building the HTML
    let html = `
        <div class="build-header">
            <h3>Optimized for ${games.length > 1 ? games.length + ' Games' : '1 Game'}</h3>
            <p>Selected Games: ${gameNames.join(', ')}</p>
            <p>Here's your custom PC build recommendation that will work for all selected games:</p>
        </div>
        <div class="build-components">
    `;
    
    // Add each part to the build details
    for (const [partType, part] of Object.entries(build)) {
        if (partType === 'case') continue; // Skip case for now
        
        html += `
            <div class="part-item">
                <span class="part-type">${partType.toUpperCase()}:</span>
                <span class="part-name">${part.name}</span>
                <span class="part-price">£${part.price}</span>
                ${part.url ? `<a href="${part.url}" target="_blank" class="part-link">View on Amazon</a>` : ''}
            </div>
        `;
    }
    
    // Close the build-components div and add case
    html += `
        </div>
        <div class="case-item">
            <span class="part-type">CASE:</span>
            <span class="part-name">${build.case.name} (compatible with your components)</span>
            <span class="part-price">£${build.case.price}</span>
            ${build.case.url ? `<a href="${build.case.url}" target="_blank" class="part-link">View on Amazon</a>` : ''}
        </div>
    `;
    
    // Set the build details HTML
    buildDetails.innerHTML = html;
    
    // Display total cost
    totalCost.textContent = `Total: £${total}`;
    
    // Generate share text with all selected games
    const gameList = gameNames.join(' and ');
    const message = `Here's a great PC build for ${gameList} for £${budgetInput.value} that will run these games smoothly at high settings!`;
    
    // Build parts list for sharing
    const partsList = [
        `CPU: ${build.cpu.name}`,
        `GPU: ${build.gpu.name}`,
        `RAM: ${build.ram.name}`,
        `Storage: ${build.storage.name}`,
        `Motherboard: ${build.motherboard.name}`,
        `PSU: ${build.psu.name}`,
        `Case: ${build.case.name}`
    ];
    
    const shareText = encodeURIComponent(`${message}\n\n${partsList.join('\n')}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
    
    buildLink.innerHTML = `
        <p>Share your build: 
            <a href="${twitterUrl}" target="_blank" rel="noopener noreferrer">Tweet this build</a>
        </p>
    `;
    
    // Show result section
    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Color Picker Debug Mode
let colorPickerVisible = false;
const debugStyles = document.createElement('style');
document.head.appendChild(debugStyles);

// Default colors
const defaultColors = {
    headers: '#2c3e50',
    text: '#2c3e50',
    links: '#3498db',
    buttons: '#3498db',
    inputs: '#95a5a6',
    containers: '#ecf0f1',
    background: '#ffffff',
    borders: '#bdc3c7'
};

// Initialize currentColors from localStorage or default to defaultColors
let currentColors;
try {
    const savedColors = localStorage.getItem('colorPickerColors');
    currentColors = savedColors ? JSON.parse(savedColors) : { ...defaultColors };
} catch (e) {
    console.error('Error loading saved colors:', e);
    currentColors = { ...defaultColors };
}

// Save colors to localStorage
function saveColors() {
    try {
        localStorage.setItem('colorPickerColors', JSON.stringify(currentColors));
    } catch (e) {
        console.error('Error saving colors:', e);
    }
}

// Create color picker panel
function createColorPicker() {
    // Remove existing panel if it exists
    const existingPanel = document.getElementById('color-picker-panel');
    if (existingPanel) {
        document.body.removeChild(existingPanel);
    }
    
    const panel = document.createElement('div');
    panel.id = 'color-picker-panel';
    panel.style.cssText = `
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateX(100%) translateY(-50%);
        background: #2c3e50;
        padding: 15px;
        border-radius: 10px 0 0 10px;
        box-shadow: -2px 0 10px rgba(0,0,0,0.3);
        z-index: 10000;
        color: white;
        font-family: 'Ubuntu', sans-serif;
        width: 300px;
        transition: transform 0.3s ease;
        max-height: 90vh;
        overflow-y: auto;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;
    
    // Create color pickers for each element type
    const elements = [
        { label: 'Headers (h1-h6)', key: 'headers', color: currentColors.headers },
        { label: 'Text (p, span, div)', key: 'text', color: currentColors.text },
        { label: 'Links (a)', key: 'links', color: currentColors.links },
        { label: 'Buttons (button)', key: 'buttons', color: currentColors.buttons },
        { label: 'Inputs (input, textarea)', key: 'inputs', color: currentColors.inputs },
        { label: 'Containers (sections, divs)', key: 'containers', color: currentColors.containers },
        { label: 'Background', key: 'background', color: currentColors.background },
        { label: 'Borders', key: 'borders', color: currentColors.borders }
    ];
    
    const colorPickers = elements.map(item => `
        <div style="margin-bottom: 15px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;">
                <label style="font-size: 14px;">${item.label}</label>
                <input type="color" 
                       value="${item.color}" 
                       data-target="${item.key}"
                       style="width: 30px; height: 30px; border: none; background: none; cursor: pointer;">
            </div>
            <div style="display: flex; gap: 5px;">
                <button data-reset="${item.key}" style="flex: 1; padding: 3px; font-size: 12px; background: #34495e; border: none; color: white; border-radius: 3px; cursor: pointer;">
                    Reset
                </button>
                <button data-preview="${item.key}" style="flex: 1; padding: 3px; font-size: 12px; background: #34495e; border: none; color: white; border-radius: 3px; cursor: pointer;">
                    Preview
                </button>
            </div>
        </div>`).join('');
    
    panel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
            <h3 style="margin: 0; font-size: 16px;">Color Picker</h3>
            <button id="close-color-picker" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer;">×</button>
        </div>
        ${colorPickers}
        <div style="margin-top: 15px; display: flex; gap: 10px;">
            <button id="reset-all-colors" style="flex: 1; padding: 8px; background: #e74c3c; border: none; color: white; border-radius: 4px; cursor: pointer;">
                Reset All
            </button>
            <button id="copy-colors" style="flex: 1; padding: 8px; background: #3498db; border: none; color: white; border-radius: 4px; cursor: pointer;">
                Copy CSS
            </button>
        </div>
    `;
    
    document.body.appendChild(panel);
    
        // Add event listeners
    panel.querySelectorAll('input[type="color"]').forEach(input => {
        const target = input.dataset.target;
        // Set initial value
        input.value = currentColors[target] || defaultColors[target];
        
        input.addEventListener('input', (e) => {
            const target = e.target.dataset.target;
            updateColor(target, e.target.value);
            saveColors();
        });
    });
    
    panel.querySelectorAll('[data-reset]').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.dataset.reset;
            const colorInput = panel.querySelector(`input[data-target="${target}"]`);
            if (colorInput) {
                colorInput.value = defaultColors[target];
                updateColor(target, defaultColors[target]);
            }
        });
    });
    
    panel.querySelectorAll('[data-preview]').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.dataset.preview;
            const colorInput = panel.querySelector(`input[data-target="${target}"]`);
            if (colorInput) {
                const tempColor = getRandomColor();
                colorInput.value = tempColor;
                updateColor(target, tempColor, true);
                
                // Revert after 1 second
                setTimeout(() => {
                    colorInput.value = currentColors[target];
                    updateColor(target, currentColors[target]);
                }, 1000);
            }
        });
    });
    
    document.getElementById('reset-all-colors').addEventListener('click', () => {
        Object.keys(defaultColors).forEach(key => {
            const input = panel.querySelector(`input[data-target="${key}"]`);
            if (input) {
                input.value = defaultColors[key];
                updateColor(key, defaultColors[key]);
            }
        });
    });
    
    document.getElementById('copy-colors').addEventListener('click', () => {
        const css = generateCSS();
        navigator.clipboard.writeText(css).then(() => {
            const button = document.getElementById('copy-colors');
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.background = '#2ecc71';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#3498db';
            }, 2000);
        });
    });
    
    document.getElementById('close-color-picker').addEventListener('click', toggleColorPicker);
    
    return panel;
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
