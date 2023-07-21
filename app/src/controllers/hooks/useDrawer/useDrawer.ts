import { atom, useRecoilState } from "recoil"

const drawerState = atom({
    key: 'drawerState',
    default: false
});

const useDrawer = () => {

    const [drawer, setDrawer] = useRecoilState(drawerState)

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    const closeDrawer = () => {
        setDrawer(false)
    }

    const openDrawer = () => {
        setDrawer(true)
    }

    return { drawer, toggleDrawer, closeDrawer, openDrawer }
}

export default useDrawer