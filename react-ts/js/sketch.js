let targetDim = $('#content-wrapper').width();

window.addEventListener("resize", function(){
    targetDim = $('#content-wrapper').width();
}, true);


// let sketch1 = function(p) {
//     let img;
//     p.idle = true;
//     p.phase1 = false;
//     p.phase2 = false;
//     p.phase3 = false;
  
//     p.w2X = 1;
//     p.w2Y = 1;
  
//     p.preload = function() {
//       img = p.loadImage('img/graph.png');
//       vector1 = p.loadImage('img/vector1.png');
//       vector2 = p.loadImage('img/vector2.png');
//     }
  
//     p.setup = function() {
//       p.createCanvas(500,500);
//       p.background(img);
//       p.v0 = p.createVector(0, 0); 
//       p.w1 = p.createVector(p.getXC(2),p.getYC(-1));
//       //Change limits in play1 too
//       p.w1slope = (p.w1.y/p.w1.x);
//       p.w2 = p.createVector(p.getXC(1),p.getYC(1));
//       p.w3 = p.createVector(0,0);
//     }
  
//     p.draw = function() {
//       p.background(img);
//       p.translate(p.width/2, p.height/2);
      
//       if(p.idle) {
//         p.drawArrow(p.v0, p.w1, 'rgb(225,24,75)');
//         p.drawArrow(p.v0, p.w2, 'rgb(22,132,255)');
//         p.image(vector1, 15, -110, 30, 60);
//         p.image(vector2, 100, 50, 30, 60);
//       } else if (p.phase1) {
//         p.play1();
//       } else if (p.phase2) {
//         p.play2();
//       } else if (p.phase3) {
//         p.play3();
//       }
//     }
  
//     p.play1 = function() {
//       p.drawArrow(p.w3, p.w2, 'rgb(22,132,255)');
//       p.drawArrow(p.v0, p.w1, 'rgb(225,24,75)');
//       if (p.w3.x !== p.w1.x) {
//         p.w3.x += 2;
//         p.w3.y -= -1;
//       } else {
//         setTimeout(() => {
//           p.phase1 = false;
//           p.phase2 = true;
//         }, 500)
        
//       } 
//     }
  
//     p.touchRight = false;
//     p.touches = 0;
//     p.lineX = 260;
//     p.lineY = -110;
//     p.play2 = function() {
//       if(p.touchRight) {
//         p.stroke('rgba(22,132,255,0.5)');
//         p.strokeWeight(3);
//         p.line(280, -130, p.lineX, p.lineY)
//         p.lineX -= 1.98;
//         p.lineY += 1.98;
//       }
//       p.drawArrow(p.w3, p.w2, 'rgb(22,132,255)');
//       p.drawArrow(p.v0, p.w1, 'rgb(225,24,75)');
    
      
//       p.w2.x += p.w2X*2;
//       p.w2.y -= p.w2Y*2;
  
//       if(p.touches === 2 && p.w2.x === 0) {
//         p.phase2 = false;
//         p.phase3 = true;
//       }
  
//       if(p.w2.x > 160 || p.w2.x < -210) {
//         if(p.w2.x > 160) {
//           p.touchRight = true;
//           p.touches++;
//         }
//         if(p.w2.x < -210) p.touches++;
//         p.w2X *= -1;
//         p.w2Y *= -1;
//       }
//     }
  
//     p.quad1 = -97;
//     p.quad2 = -97;
//     p.quad3 = -101;
//     p.quad4 = -101;
//     p.play3 = function() {
//       p.fill('rgba(22,132,255,0.5)');
//       p.strokeWeight(0);
//       // p.line(280, -130, p.lineX, p.lineY)
//       p.quad(p.quad3,250,250,p.quad4,250,p.quad1,p.quad2,250)
//       p.drawArrow(p.v0, p.w1, 'rgb(225,24,75)');
//       if(p.quad1 < 250) {
//         p.quad1 += 3;
//         p.quad2 += 3;
//         p.w1.x += 2;
//         p.w1.y += 1;
//       } else {
//         if (p.w1.x > 100) {
//           p.w1.x -= 4;
//           p.w1.y -= 2;
//         } else {
//           p.w1.x -= 2;
//           p.w1.y -= 1;
//           p.quad3 -= 3;
//           p.quad4 -= 3;
//         }
//       }
  
//       if (p.w1.y < -250) {
//         p.noLoop();
//         console.log('Finished!!!');
//       }
//     }
  
//     // draw an arrow for a vector at a given base position
//     p.drawArrow = function(base, vec, myColor) {
//       p.push();
//       p.stroke(myColor);
//       p.strokeWeight(3);
//       p.fill(myColor);
//       p.translate(base.x, base.y);
//       p.line(0, 0, vec.x, vec.y);
//       p.rotate(vec.heading());
//       let arrowSize = 6;
//       p.translate(vec.mag() - arrowSize, 0);
//       p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//       p.pop();
//     }
  
//     p.getXC = function(x) {
//       return x * 50;
//     }
  
//     p.getYC = function(y) {
//       return y * -50;
//     }
//   }
  
//   let s1 = new p5(sketch1);
  
  
// var playBtn = document.getElementById('play');
// playBtn.addEventListener('click', () => {
// s1.idle = false;
// s1.phase1 = true;
// });
  
let sketch1 = function(p) {
    let img;

    p.preload = function() {
    img = p.loadImage('img/graph.png');
    }

    p.setup = function() {
        let canvas = p.createCanvas(500,500);
        canvas.parent('sketch1')
        
        p.background(img);
        p.v0 = p.createVector(0, 0); 
        p.w1 = p.createVector(p.getXC(2),p.getYC(-1));      

        canvas.mouseOver(p.enter);
        canvas.mouseOut(p.exit);
        p.firstLoop = true;
        p.noLoop();
    }

    p.enter = function() {
        p.loop();
    }

    p.exit = function() {
        p.noLoop();
    }

    p.draw = function() {
        p.background(img);
        p.translate(p.width/2, p.height/2);
        if (p.mouseY < 0 || p.mouseY > 500 || p.mouseX < 0 || p.mouseX > 500) { 
            p.w2 = p.createVector(p.getXC(1), p.getYC(3));
        } else {
            if (p.firstLoop) {
                p.w2 = p.createVector(p.getXC(1), p.getYC(3));
                p.firstLoop = false;
            } else {
                p.w2 = p.createVector(p.mouseX,p.mouseY);
                p.w2.x -= p.width/2 + 100;
                p.w2.y -= p.height/2 + 50;
            }
            
        }
        p.w3 = p.createVector(p.w2.x + 100,p.w2.y + 50)
        console.log('Sketch 1');
        
        p.drawArrow(p.v0, p.w3, 'rgb(227,148,74)');
        p.drawArrow(p.w1, p.w2, 'rgb(22,132,255)');
        p.drawArrow(p.v0, p.w1, 'rgb(72,196,150)');
    }
    // draw an arrow for a vector at a given base position
    p.drawArrow = function(base, vec, myColor) {
        p.push();
        p.stroke(myColor);
        p.strokeWeight(3);
        p.fill(myColor);
        p.translate(base.x, base.y);
        p.line(0, 0, vec.x, vec.y);
        p.rotate(vec.heading());
        let arrowSize = 6;
        p.translate(vec.mag() - arrowSize, 0);
        p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        p.pop();
    }

    p.getXC = function(x) {
        return x * 50;
    }

    p.getYC = function(y) {
        return y * -50;
    }

    p.windowResized = function() {
        if (targetDim < 500) {
        p.resizeCanvas(targetDim, targetDim);
        } else {
        p.resizeCanvas(500, 500);  
        }
        
    }
}

let s1 = new p5(sketch1);
  
let sketch2 = function(p) {
    let img;

    p.preload = function() {
    img = p.loadImage('img/graph.png');
    }

    p.setup = function() {
    let canvas = p.createCanvas(500,500);
        canvas.parent('sketch2')
        p.background(img);

        p.v0 = p.createVector(0, 0); 
        p.w1 = p.createVector(p.getXC(2),p.getYC(-1));

        canvas.mouseOver(p.enter);
        canvas.mouseOut(p.exit);
        p.firstLoop = true;
        p.noLoop();

    }

    p.enter = function() {
        p.loop();
    }

    p.exit = function() {
        p.noLoop();
    }

    p.draw = function() {
        p.background(img);
        p.translate(p.width/2, p.height/2);
        if (p.mouseY < 0 || p.mouseY > 500 || p.mouseX < 0 || p.mouseX > 500) {
            p.w2 = p.createVector(p.getXC(2), p.getYC(1));
        } else {
            if (p.firstLoop) {
                p.w2 = p.createVector(p.getXC(2), p.getYC(1));
                p.firstLoop = false; 
            } else {
                p.w2 = p.createVector(p.mouseX,p.mouseY);
                p.w2.x -= p.width/2;
                p.w2.y -= p.height/2;
            }
            
        }
        
        console.log('Sketch 2');

        p.w3 = p.createVector(p.w2.x,p.w2.y);
        p.w3.mult(-1);
        p.w4 = p5.Vector.sub(p.w1,p.w2);
        p.drawArrow(p.w1, p.w3, 'rgba(22,132,255, 0.4)');
        p.drawArrow(p.w2, p.w4, 'rgba(250,148,74, 0.4)');
        p.drawArrow(p.v0, p.w1, 'rgb(72,196,150)');
        p.drawArrow(p.v0, p.w4, 'rgb(227,148,74)');
        p.drawArrow(p.v0, p.w2, 'rgb(22,132,255)');
    }
    // draw an arrow for a vector at a given base position
    p.drawArrow = function(base, vec, myColor) {
        p.push();
        p.stroke(myColor);
        p.strokeWeight(3);
        p.fill(myColor);
        p.translate(base.x, base.y);
        p.line(0, 0, vec.x, vec.y);
        p.rotate(vec.heading());
        let arrowSize = 6;
        p.translate(vec.mag() - arrowSize, 0);
        p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        p.pop();
    }

    p.getXC = function(x) {
        return x * 50;
    }

    p.getYC = function(y) {
        return y * -50;
    }

    p.windowResized = function() {
        if (targetDim < 500) {
        p.resizeCanvas(targetDim, targetDim);
        } else {
        p.resizeCanvas(500, 500);  
        }
        
    }
}

let s2 = new p5(sketch2);


let sketch3 = function(p) {
    let img;

    p.preload = function() {
    img = p.loadImage('img/graph.png');
    }

    p.setup = function() {
        let canvas = p.createCanvas(500,500);
        canvas.parent('sketch3')
        p.background(img);

        p.v0 = p.createVector(0, 0); 
        p.w1 = p.createVector(p.getXC(1),p.getYC(1));

        canvas.mouseOver(p.enter);
        canvas.mouseOut(p.exit);
        p.firstLoop = true;
        p.noLoop();

    }

    p.enter = function() {
        p.loop();
    }

    p.exit = function() {
        p.noLoop();
    }

    p.draw = function() {
        p.background(img);
        p.translate(p.width/2, p.height/2);
        if (p.mouseY < 0 || p.mouseY > 500 || p.mouseX < 0 || p.mouseX > 500) {
            p.w2 = p.createVector(p.getXC(2), p.getYC(2));
            p.text('Multiplication Factor: 2.00', -240, -230);
        } else {
            if(p.firstLoop) {
                p.w2 = p.createVector(p.getXC(2), p.getYC(2));
                p.text('Multiplication Factor: 2.00', -240, -230);
                p.firstLoop = false;
            } else {
                p.fac = p.map(p.mouseX - p.width/2, -200, 200, -5, 5, false);
                p.w2 = p5.Vector.mult(p.w1, p.fac);
                p.fill('white')
                p.text('Multiplication Factor: ' + p.fac.toFixed(2), -240, -230);
            }
        }

        console.log('Sketch 3');
        p.drawArrow(p.v0, p.w2, 'rgb(22,132,255)');
        p.drawArrow(p.v0, p.w1, 'rgb(72,196,150)');
        
        
    }
    // draw an arrow for a vector at a given base position
    p.drawArrow = function(base, vec, myColor) {
        p.push();
        p.stroke(myColor);
        p.strokeWeight(3);
        p.fill(myColor);
        p.translate(base.x, base.y);
        p.line(0, 0, vec.x, vec.y);
        p.rotate(vec.heading());
        let arrowSize = 6;
        p.translate(vec.mag() - arrowSize, 0);
        p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        p.pop();
    }

    p.getXC = function(x) {
        return x * 50;
    }

    p.getYC = function(y) {
        return y * -50;
    }

    p.windowResized = function() {
        if (targetDim < 500) {
        p.resizeCanvas(targetDim, targetDim);
        } else {
        p.resizeCanvas(500, 500);  
        }
        
    }
}

let s3 = new p5(sketch3);


let sketch4 = function(p) {
    let img;
    

    p.preload = function() {
    img = p.loadImage('img/graph.png');
    }

    p.setup = function() {
        let canvas = p.createCanvas(500,500);
        canvas.parent('sketch4')
        
        p.background(img);
        p.v0 = p.createVector(0, 0); 
        p.w1 = p.createVector(p.getXC(1),p.getYC(1));
        p.scale = p.createVector(2,-2);
        p.w2 = p.createVector(p.getXC(0),p.getYC(0));
        p.counter = 0;
        
        // p.start = p5.Vector.add(p.w1,p.w2);
        // p.end = p5.Vector.add(p.w1,p.w2);

        canvas.mouseOver(p.enter);
        canvas.mouseOut(p.exit);
        p.firstLoop = true;
        p.noLoop();
    }

    p.enter = function() {
        p.loop();
    }

    p.exit = function() {
        p.w2.y = 0;
        p.w1 = p.createVector(p.getXC(1),p.getYC(1));
        p.counter = 0;
        p.scale = p.createVector(2,-2);
        p.noLoop();
    }

    p.draw = function() {
        p.background(img);

        p.w1.add(p.scale);
        // p.end.add(p.scale);
        if (p.w1.x > p.width/2 || p.w1.x < -p.width/2) {
            p.scale.mult(-1);
        }
        p.dispText();
        p.translate(p.width/2, p.height/2);
        p.drawTraceLine(p.w2);
        if (p.w2.x === 0 && p.w2.y === 0) {} else {
            p.drawArrow(p.w1, p.w2, 'rgb(22,132,255)');
        }
        p.drawArrow(p.v0, p.w1, 'rgb(72,196,150)');
        p.changeV();  
    }
    // draw an arrow for a vector at a given base position
    p.drawArrow = function(base, vec, myColor) {
        p.push();
        p.stroke(myColor);
        p.strokeWeight(3);
        p.fill(myColor);
        p.translate(base.x, base.y);
        p.line(0, 0, vec.x, vec.y);
        p.rotate(vec.heading());
        let arrowSize = 6;
        p.translate(vec.mag() - arrowSize, 0);
        p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        p.pop();
    }

    p.getXC = function(x) {
        return x * 50;
    }

    p.getYC = function(y) {
        return y * -50;
    }

    p.windowResized = function() {
        if (targetDim < 500) {
        p.resizeCanvas(targetDim, targetDim);
        } else {
        p.resizeCanvas(500, 500);  
        }    
    }

    p.drawTraceLine = function(v) {
        p.push();
        p.stroke('rgba(227,148,74, 0.6)');
        p.translate(v.x, v.y);
        p.strokeWeight(3);
        p.beginShape(p.LINES);
        p.vertex(-1000, 1000);
        p.vertex(1000, -1000);
        p.endShape();
        p.pop();
    }

    p.dispText = function (params) {
        p.fill('rgb(22,132,255)');
        p.textSize(16);
        let str = `(${p.round(p.w2.x/50)} , ${p.round(-p.w2.y/50)})`
        p.text(str, 20, 30);
        p.fill('rgba(255, 255, 255, 0.8)');
        let ref = p.createVector(p.getXC(1),p.getYC(1));
        let mag = ref.mag();
        let sign = '+'
        if(p.w1.x < 0) {
            sign = '-';
        } else {
            sign = '+';
        }
        p.text(`${sign} ${Math.round((p.w1.mag()/mag) * 100)/100}`, 70, 30);
        console.log();
        
        p.fill('rgb(72,196,150)');
        p.text('(1 , 1)', 120, 30);
        
    }

    p.changeV = function(kcode) {
        p.counter++;
        if (p.counter >= 225 && p.counter < 355) {
            p.w2.y -= 2;
            p.start = p5.Vector.add(p.w1,p.w2);
            p.end = p5.Vector.add(p.w1,p.w2);
        } else if (p.counter >= 355 && p.counter < 605) {
            p.w2.y += 2;
            p.start = p5.Vector.add(p.w1,p.w2);
            p.end = p5.Vector.add(p.w1,p.w2);
        } else if (p.counter >= 605 && p.counter < 725) {
            p.w2.y -= 2;
            p.start = p5.Vector.add(p.w1,p.w2);
            p.end = p5.Vector.add(p.w1,p.w2);
        }

        if (p.counter >= 732) {
            p.counter = 225;
        }

        
    }
    
}

let s4 = new p5(sketch4);

document.addEventListener('keydown', e => {
    s4.changeV(e.keyCode);
});