function getRotation(t,o,n,a,i)
{
    i *= Math.PI/180;
    a -= o;
    n -= t;
    return [n*Math.cos(i)-a*Math.sin(i)+t,n*Math.sin(i)+a*Math.cos(i)+o];
}

function drawPolygon(nCorners,rotationAngle,radius)
{
    const i = 360/nCorners;
    let result= "";
    for(let e = 0; e<=nCorners; e++){
        let nextPoint = getRotation(150,150,150,150-radius,i*e+rotationAngle);
        result += " "+nextPoint[0]+", "+nextPoint[1];
    }
    return result;
}

export default function PolygoneDrawer(props){
    let radius = 150;
    let rotationAngle = 0;
    let coords = drawPolygon(props.nCorners,rotationAngle,radius);
    
    return(
        <div>
            <svg viewBox="0 0 1600 350">
            <g fill="Cyan" stroke="black" strokeWidth="5">
                <polygon points={coords} />
            </g>
            </svg>
        </div>

    );
}