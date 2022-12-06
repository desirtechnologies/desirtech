import { notion } from "@configs/types"

const FacadeService = () => {

    const serviceObject = {
        version: Date.now(),
        types: { notion }
    }

    return { ...serviceObject }
}

export default FacadeService