class Poid {
    constructor() {
        this.y = 80;
        this.vel = 0;
        this.acc = 0;

        this.w = 40;
        this.borderRadius = 4;
    }

    applyForce() {
        let k = 0.05;
        let c = 0.2;
        let l0 = 0;

        this.acc += k * (l0 - this.y) - c * this.vel;
    }

    update() {
        this.applyForce();

        this.vel += this.acc;
        this.y += this.vel;
        this.acc *= 0;

    }

    show() {
        rectMode(CENTER);

        fill(50);
        // line(0, 0, 0, this.y);
        rect(0, this.y, this.w, this.w, this.borderRadius, this.borderRadius, this.borderRadius, this.borderRadius);
    }

    isDragged() {
        rectMode(CENTER);

        this.y = mouseY - height / 2 + this.y;
        this.y /= 3;


        fill(50);
        rect(0, this.y, this.w, this.w, this.borderRadius, this.borderRadius, this.borderRadius, this.borderRadius);
    }
}