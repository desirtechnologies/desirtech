const BackgroundSx = () => {

    const sxObject = {
        
        containerSx: {
            backgroundColor: "#000000FE",
            backgroundImage: "url('/assets/images/circuits.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
        }
    }

    return { ...sxObject }
}

export default BackgroundSx