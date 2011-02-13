module('Point');
test('new Point(10, 20)', function() {
	var point = new Point(10, 20);
    equals(point.x, 10);
    equals(point.y, 20);
});

test('new Point([10, 20])', function() {
	var point = new Point([10, 20]);
    equals(point.x, 10);
    equals(point.y, 20);
});

test('new Point({x: 10, y: 20})', function() {
	var point = new Point({x: 10, y: 20});
    equals(point.x, 10);
    equals(point.y, 20);
});

test('new Point(new Size(10, 20))', function() {
	var point = new Point(new Size(10, 20));
    equals(point.x, 10);
    equals(point.y, 20);
});

test('new Point({ width: 10, height: 20})', function() {
	var point = new Point({width: 10, height: 20});
    equals(point.x, 10);
    equals(point.y, 20);
});

module('Point vector operations');

test('normalize(length)', function() {
	var point = new Point(0, 10).normalize(20)
    equals(point.x, 0);
    equals(point.y, 20);
});

test('set length', function() {
	var point = new Point(0, 10);
	point.length = 20;
    equals(point.x, 0);
    equals(point.y, 20);
});

test('get angle', function() {
	var angle = new Point(0, 10).angle;
    equals(angle, 90);
});

test('getAngle(point)', function() {
	var angle = new Point(0, 10).getAngle([10, 10]);
    equals(Math.round(angle), 45);
});

test('rotate(degrees)', function() {
	var point = new Point(100, 50).rotate(90);
    equals(Math.round(point.x), -50);
    equals(Math.round(point.y), 100);
});

test('set angle', function() {
	var point = new Point(10, 20);
	point.angle = 92;
    equals(point.angle, 92);
});

test('getDirectedAngle(point)', function() {
	var angle = new Point().getDirectedAngle(new Point(10, 10));
	equals(angle, -45);
});