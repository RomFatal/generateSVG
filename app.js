//import shapes from './data.json';
const ns = 'http://www.w3.org/2000/svg';

const shapes = [
    { "type": "rectangle", "color": "blue", "x": 50, "y": 50, "width": 100, "height": 100 },
    { "type": "polygon", "color": "green", "points": [[10, 10], [100, 10], [100, 100], [10, 100]] },
    { "type": "rectangle", "color": "red", "x": 200, "y": 200, "width": 150, "height": 75 },
    { "type": "polygon", "color": "yellow", "points": [[300, 300], [400, 300], [400, 400], [300, 400]] }
];


(function generateSVG() {
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('height', '500')
    svg.setAttribute('width', '500')
    document.body.appendChild(svg)

    shapes.forEach(shape => {
        switch (shape.type) {
            case 'rectangle':
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
                rect.setAttribute('x', shape.x)
                rect.setAttribute('y', shape.y)
                rect.setAttribute('height', shape.height)
                rect.setAttribute('width', shape.width)
                rect.setAttribute('fill', shape.color)
                svg.appendChild(rect)
                break;
            case 'polygon':
                const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
                poly.setAttribute('points', shape.points)
                poly.setAttribute('fill', shape.color)
                svg.appendChild(poly)
                break;
            default:
                break;
        }
    })

})();