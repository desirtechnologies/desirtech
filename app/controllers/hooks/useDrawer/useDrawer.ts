import { atom, useRecoilState } from "recoil"

const drawerState = atom({
    key: 'drawerState',
    default: {
        isOpen: false
    },
});

const useDrawer = () => {

    const [drawer, setDrawer] = useRecoilState(drawerState)

    const toggleDrawer = () => {
        setDrawer({ isOpen: !drawer.isOpen })
    }

    const closeDrawer = () => {
        setDrawer({ isOpen: false })
    }

    const openDrawer = () => {
        setDrawer({ isOpen: true })
    }

    return { drawer, toggleDrawer, closeDrawer, openDrawer }
}

export default useDrawer