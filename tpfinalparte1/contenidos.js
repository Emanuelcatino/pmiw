function pantallas(estado, imagenes, txt) {

  fill(255, 204, 0);
  strokeWeight(5);
  stroke(0);
  let img = imagenes[estado];
  let x, y, textIndices;
  
  if (estado === 1) {
    x = 30; y = 300;
    textIndices = [];
  } else if (estado === 2) {
    x = 30; y = 30;
    textIndices = [];
  } else if (estado === 3) {
    x = 30; y = 30;
    textIndices = [];    
  } else if (estado === 4) {
    x = 50; y = 390;
    textIndices = [0,1];                          
  } else if (estado === 5) {
    x = 30; y = 390;
    textIndices = [2];
  } else if (estado === 6) {
    x = 30; y = 390;
    textIndices = [3];
  } else if (estado === 7) {
    x = 180; y = 370;
    textIndices = [4];
  } else if (estado === 8) {
    x = 60; y = 320;
    textIndices = [5];
  } else if (estado === 9) {
    x = 30; y = 410;
    textIndices = [6];
  } else if (estado === 10) {
    x = 250; y = 410;
    textIndices = [7];
  } else if (estado === 11) {
    x = 140; y = 370;
    textIndices = [8];
  } else if (estado === 12) {
    x = 60; y = 390;
    textIndices = [9];
  } else if (estado === 13) {
    x = 120; y = 430;
    textIndices = [10,11,12];
  } else if (estado === 14) {
    x = 130; y = 400;
    textIndices = [13];
  } else if (estado === 15) {
    x = 120; y= 400;
    textIndices = [14];
  } else if (estado === 16) {
    x= 50; y = 420;
    textIndices = [15,16,17];
  } else if (estado === 17) {
    x= 195; y = 390;
    textIndices = [18];
  } else if (estado === 18) {
    x= 30 ; y = 320 ;
    textIndices = [];
  } else if (estado === 19) {
    x= 30; y = 340;
    textIndices = [];
  } else if (estado === 20) {
    x= -10; y = 370;
    textIndices = [19,20,21,22];
  } else if (estado === 21) {
    x= 30; y = 320;
    textIndices = [];
  } else if (estado === 22) {
    x= 170; y = 380;
    textIndices = [23];
  } else if (estado === 23) {
    x= 30; y = 340;
    textIndices = [];
  } else if (estado === 24) {
    x= 100; y = 370;
    textIndices = [24];
  }
  
  image(img, 0, 0);
  for (let i = 0; i < textIndices.length; i++) {
    text(txt[textIndices[i]], x, y + i * 20);
  }
}
