import React, {useState} from "react";
import { Slider, Typography } from "@material-ui/core";
import PolygoneDrawer from "./PolygoneDrawer";

export default function Polygone(){
    const [corners, setCorners] = useState(3);

    return (
        <div>
            <PolygoneDrawer nCorners={corners}></PolygoneDrawer>
            <Typography>
                # corners
            </Typography>
            <Slider
                value={corners}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                marks
                onChange = {(e,v) => setCorners(v)}
                controlled = "true"
                min={3}
                max={10}
            />
        </div>
    );
}
