// Number Sense.....
var numberData = [{
    "Rank": 1,
    "Name": "Toni Cavillo",
    "School": "O'Grady Elementary",
    "Grade": "2nd Grade"
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var numberTbody = document.querySelector("#number_sense tbody");

addDataToTbody(numberTbody, numberData);


// Creative Writing.....
var creativeData = [{
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var creativeTbody = document.querySelector("#creative_writing tbody");

addDataToTbody(creativeTbody, creativeData);

// Ready Writing.....
var readyData = [{
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var readyTbody = document.querySelector("#ready_writing tbody");

addDataToTbody(readyTbody, readyData);

// Oral Reading.....
var oralData = [{
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var oralTbody = document.querySelector("#oral_reading tbody");

addDataToTbody(oralTbody, oralData);

// Storytelling.....
var storyData = [{
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var storyTbody = document.querySelector("#storytelling tbody");

addDataToTbody(storyTbody, storyData);

// Calculators
var calData = [{
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var calTbody = document.querySelector("#calculator tbody");

addDataToTbody(calTbody, calData);

// Chess.....
var chessData = [{
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var chessTbody = document.querySelector("#chess tbody");

addDataToTbody(chessTbody, chessData);

// Spelling.....
var spellData = [{
    "Rank": "25",
    "Name": "Victor Rodriguez",
    "School": "Hard Knocks",
    "Grade": "Infinity"
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  },
  {
    "Rank": "",
    "Name": "",
    "School": "",
    "Grade": ""
  }
];

function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
  data.forEach((d, i) => {
    var tr = nl.insertRow(i);
    Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
      var cell = tr.insertCell(j);
      cell.innerHTML = d[k]; // Assign object values to cells   
    });
    nl.appendChild(tr);
  })
}

var spellTbody = document.querySelector("#spelling tbody");

addDataToTbody(spellTbody, spellData);

