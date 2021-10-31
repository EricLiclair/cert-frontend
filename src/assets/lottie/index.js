import Lottie from "react-lottie"
import finger_print from './fingerprint/500-fingerprint-security-outline-edited.json'
import finger_print_2 from './fingerprint2/lf30_tazikiq0.json'

const FingerPrint = ({ ...props }) => {
    return (
        <Lottie
            {...props}
            options={
                {
                    loop: true,
                    autoplay: true,
                    animationData: finger_print,
                    rendererSettings: {
                        // preserveAspectRatio: "xMidYMid slice"
                    }
                }
            }
        />
    )
}

const FingerPrint2 = ({ ...props }) => {
    return (
        <Lottie
            {...props}
            options={
                {
                    loop: true,
                    autoplay: false,
                    animationData: finger_print_2,
                    rendererSettings: {
                        // preserveAspectRatio: "xMidYMid slice"
                    }
                }
            }
        />
    )
}

export { FingerPrint, FingerPrint2 }
