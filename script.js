// let sheetID = "1AtEploiDiAXDOOtgxEm8e_b5H-e7la6WlCeRH-d-Vxs";
// let tabName = 'Sheet1';

// let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

// const typeLookup = {
//   'White': '#4AA8FF',
//   'Red': '#4DC480',
//   'moscato': '#FF9FF0',
//   // 'vanilla': '#4AA8FF',
//   // 'berry': '#FF97EF',
//   // 'mocha': '#B6772D'

// };

// const mainContainer = document.getElementById('main-container');

// fetch(opensheet_uri)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     for (let i = 0; i < 15; i++) {
//       const flavorIndex = i % data.length;
//       const flavor = data[flavorIndex]['FLAVOR'];
//       const aroma = data[flavorIndex]['AROMA'];
//       const style = data[flavorIndex]['STYLE'];
//       const alcohol = data[flavorIndex]['ALCOHOL'];
//       const type = data[flavorIndex]['TYPE'];

//       console.log('Type:', type);

//       const outPutEl = document.createElement('div');
//       outPutEl.classList.add('main-label');
//       outPutEl.classList.add('custom-size'); 
//       outPutEl.style.position = 'relative'; 
      
//       outPutEl.style.backgroundColor = typeLookup[type];
      
//       const yellowtaleText = document.createElement('div');
//       yellowtaleText.innerText = 'Yellowtale.';
//       yellowtaleText.style.textAlign = 'center';
//       yellowtaleText.id = 'yellowtale';
//       outPutEl.appendChild(yellowtaleText);
      
//       const alcoholSvg = document.createElement('img');
//       alcoholSvg.classList.add('alc-svg');
//       const alcoholFilename = alcohol.replace(/[.%]/g, '') + '.svg'; 
//       alcoholSvg.src = 'Characters/' + alcoholFilename; 
//       outPutEl.appendChild(alcoholSvg);

//       const styleSvg = document.createElement('img');
//       styleSvg.classList.add('style-svg');
//       outPutEl.appendChild(styleSvg);
//       styleSvg.src = 'Characters/' + style + '.svg';


//       const flavorName = document.createElement('div');
//       flavorName.innerText = flavor;
//       flavorName.style.textAlign = 'center';
//       flavorName.style.position = 'absolute';
//       flavorName.style.bottom = '0';
//       flavorName.style.left = '0';
//       flavorName.style.right = '0';
//       flavorName.id = 'flavor'; 
//       outPutEl.appendChild(flavorName);
//       mainContainer.appendChild(outPutEl);
//     }
//   })
//   .catch(function (err) {
//     console.log("Something went wrong!", err);
//   });





let sheetID = "1AtEploiDiAXDOOtgxEm8e_b5H-e7la6WlCeRH-d-Vxs";
let tabName = 'Sheet1';

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

const aromaLookup = {
  'melon': '#FFAD9D',
  'citrus': '#F2994A',
  'pear': '#4DC480',
  'vanilla': '#4AA8FF',
  'berry': '#FF97EF',
  // 'mocha': '#B6772D'
};

const mainContainer = document.getElementById('main-container');

fetch(opensheet_uri)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < 15; i++) {
      const flavorIndex = i % data.length;
      const flavor = data[flavorIndex]['FLAVOR'];
      const aroma = data[flavorIndex]['AROMA'];
      const style = data[flavorIndex]['STYLE'];
      const alcohol = data[flavorIndex]['ALCOHOL'];
      const type = data[flavorIndex]['TYPE'];

      const outPutEl = document.createElement('div');
      outPutEl.classList.add('main-label');
      outPutEl.classList.add('custom-size'); 
      outPutEl.style.position = 'relative'; 
      
      outPutEl.style.backgroundColor = aromaLookup[aroma];
      
      const yellowtaleText = document.createElement('div');
      yellowtaleText.innerText = 'Yellowtail.';
      yellowtaleText.style.textAlign = 'center';
      yellowtaleText.id = 'yellowtale';
      outPutEl.appendChild(yellowtaleText);
      
      const alcoholSvg = document.createElement('img');
      alcoholSvg.classList.add('alc-svg');
      const alcoholFilename = alcohol.replace(/[.%]/g, '') + '.svg'; 
      alcoholSvg.src = 'Characters/' + alcoholFilename; 
      outPutEl.appendChild(alcoholSvg);

      const styleSvg = document.createElement('img');
      styleSvg.classList.add('style-svg');
      outPutEl.appendChild(styleSvg);
      styleSvg.src = 'Characters/' + style + '.svg';

      const typeSvg = document.createElement('img')
      typeSvg.classList.add('type-svg');
      outPutEl.appendChild(typeSvg);
      typeSvg.src = 'Characters/' + type + '.svg';

      const flavorName = document.createElement('div');
      flavorName.innerText = flavor;
      flavorName.style.textAlign = 'center';
      flavorName.style.position = 'absolute';
      flavorName.style.bottom = '0';
      flavorName.style.left = '0';
      flavorName.style.right = '0';
      flavorName.id = 'flavor'; 
      outPutEl.appendChild(flavorName);
      mainContainer.appendChild(outPutEl);
    }
  })
  .catch(function (err) {
    console.log("Something went wrong!", err);
  });

