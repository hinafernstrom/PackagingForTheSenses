const mainContainer = document.getElementById('main-container');

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a p5.js canvas covering the entire window
  background(255); // Set background color to white
  noLoop(); // Prevent continuous draw loop
}

function draw() {
  const numDivs = 15;
  const divWidth = 200;
  const divHeight = 100;
  
  for (let i = 0; i < numDivs; i++) {
    const x = random(windowWidth - divWidth); // Random x position within window width
    const y = random(windowHeight - divHeight); // Random y position within window height
    
    const noiseScale = 0.02; // Adjust noise scale to control the intensity of noise
    const noiseValue = noise(x * noiseScale, y * noiseScale); // Get noise value for current position
    
    const outPutEl = document.createElement('div');
    outPutEl.classList.add('main-label');
    outPutEl.classList.add('custom-size');
    outPutEl.style.position = 'absolute';
    outPutEl.style.left = x + 'px';
    outPutEl.style.top = y + 'px';
    outPutEl.style.width = divWidth + 'px';
    outPutEl.style.height = divHeight + 'px';
    
    const noiseOpacity = map(noiseValue, 0, 1, 0, 255); // Map noise value to opacity range
    outPutEl.style.backgroundColor = `rgba(255, 0, 0, ${noiseOpacity})`; // Set background color with noise opacity
    
    mainContainer.appendChild(outPutEl);
  }
}
