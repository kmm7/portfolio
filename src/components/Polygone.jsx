import { Slider, Typography } from "@material-ui/core";

export default function Polygone(){
    return (
        <div>
            <Typography>
                # corners
            </Typography>
            <Slider
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                marks
                min={3}
                max={10}
            />
        </div>
    );
}
