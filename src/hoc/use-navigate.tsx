import {redirect} from "react-router-dom";

const useRedirect = (path: string) => {
    return redirect(path);
};

export default useRedirect;