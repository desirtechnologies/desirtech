const BackgroundSx = () => {

    const sxObject = {

        containerSx: {
            backgroundColor: "#000000DF",
            backgroundImage: "url('/assets/images/circuits.svg'), url('/assets/images/noise.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
        }
    }

    return { ...sxObject }
}

export default BackgroundSx