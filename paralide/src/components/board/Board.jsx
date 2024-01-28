import Slide from "../slide/Slide";
import data from "../../data/data.json";

function Board() {
    return (
        <>
            <Slide data={data} />
        </>
    );
}

export default Board