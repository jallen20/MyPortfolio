export const buildPoints = (amplitude: any, isSineWave?: boolean): number[][] => {
    let _points = [];
    let originX = 0
    let originY = 200;
    var startPoint = [0, 400]
    var endPoint = [200, 600]

    let width = 9999;
    let pointSpacing = 1
    let angularFrequency = .05;

    let origin = {
        x: originX,
        y: originY
    }
    
    return buildPath(width, pointSpacing, origin.x, origin.y, amplitude, angularFrequency, startPoint, endPoint, isSineWave)

    // _points.push(startPoint);
    // for (let i = 0; i < width / pointSpacing; i++) {
    //     const x = i * pointSpacing + origin.x;
    //     const y = Math.sin(angularFrequency * (i)) * amplitude + origin.y;
    //     _points.push([x, y])
    // }
    // _points.push(endPoint);
    //
    // return _points;
};

const buildPath = (width: number,
                   pointSpacing: number,
                   originX: number,
                   originY: number, 
                   amplitude: number, 
                   angularFrequency: number, 
                   startPoint: number[], 
                   endPoint: number[],
                   isSineWave?: boolean) => {
    let _points = [];
    _points.push(startPoint);
    let x, y;
    
    if (isSineWave) {
        for (let i = 0; i < width / pointSpacing; i++) {
            x = i * pointSpacing + originX;
            y = Math.sin(angularFrequency * (i)) * amplitude + originY;
            _points.push([x, y])
        }
    } else {
        for (let i = 0; i < width / pointSpacing; i++) {
            x = Math.cos(angularFrequency * (i)) * amplitude + originX;
            //y = Math.sin(angularFrequency * (i)) * amplitude + originY;
            y = i * pointSpacing + originY
            _points.push([x, y])
        }
    }
    _points.push(endPoint);

    return _points;
}