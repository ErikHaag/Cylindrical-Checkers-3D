function nMan(X, Y, iR) {
  const man = {
    x: X,
    y: Y,
    isRed: iR,
    kinged: 0,
    disp: function() {
      push();
      if (this.isRed) {
        fill(255, 0, 0);
      } else {
        fill(50, 50, 50)
      }
      if (wrapBox.checked()) {
        rotateX(PI / 2);
        translate(0, 100 * this.y - 350, 0);
        rotateY((this.x * PI / 4) + (frameCount / 120));
        translate(0, 0, wrapH - 5);
        push();
        rotateX(-PI / 2)
        scale(100, -250, 100);
        model(checkerpiece);
        pop();
      } else {
        translate(100 * this.x - 350, -20, 100 * this.y - 350);
        push();
        scale(100, -100, 100);
        model(checkerpiece);
        pop();
      }
      if (this.kinged > 0) {
        push();
        translate(0, -10, 0);
        if (wrapBox.checked()) {
          rotateX(-PI / 2);
          translate(0, -20, 10)
        }
        scale(100, -100 * this.kinged, 100);
        fill(255);
        model(crown);
        if (this.kinged < 1) {
          this.kinged += 0.05;
        } else if (this.kinged > 1) {
          this.kinged = 1;
        }
        pop();
      }
      pop();
    },
    moveTo: function(nX, nY) {
      this.x = nX;
      this.y = nY;
    },
    king: function() {
      if (this.kinged == 0) {
        this.kinged = 0.05;
      }
    }
  };
  return man;
}
