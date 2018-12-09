function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

} 

function draw() {
	//colorMode(HSB,360,100,100);
	angleMode(DEGREES);
	var CentX = windowWidth/2;
	var Twist = 30
	var CentY = windowHeight/2;
	var Diameter = 100;
	background(255, 148, 0)
	for (var Dscale = 0.5; Dscale < 3.5; Dscale = Dscale +0.25) {
		for (var Theta = 5; Theta <360; Theta = Theta +30){
			fill(100,255*(Theta/windowHeight),100)
			ellipse(CentX+Dscale*Diameter*cos(Theta+Twist*Dscale), CentY+Dscale*Diameter*sin(Theta+Twist*Dscale), 25, 25);
		}
	}
}
	
	//noStroke();
	//for (var W = windowWidth/2; W < windowWidth; W = W + 10) {
		//for (var H = 0; H <windowHeight/2; H = H + 30){
			//ellipse(W, H, 10, 2);
