import { useMemo } from "react";
import loadImage from "../js/loadImage";

const useLoadImage = (src) => {
    return useMemo(() => loadImage(src), [src]);
};

export default useLoadImage;
