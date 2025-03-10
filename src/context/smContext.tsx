import { createContext, useState, ReactNode, FC, ReactElement, useContext } from 'react';
import { GameObject } from '../interfaces/sharedInterfaces';
//import { weapons } from '../data/weapons';

interface SMContextType {
    view: 'menu' | 'play' | 'after';
    setView: React.Dispatch<React.SetStateAction<'menu' | 'play' | 'after'>>;
    gameObject: GameObject;
    setGameObject: React.Dispatch<React.SetStateAction<GameObject>>;
    dialogOpen: boolean;
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SMContext = createContext<SMContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
};

export const SMProvider: FC<Props> = ({ children }): ReactElement => {
    const [view, setView] = useState<'menu' | 'play' | 'after'>('menu');
    const [gameObject, setGameObject] = useState<GameObject>({
        player: 'testman'
    });
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    return (
        <SMContext.Provider value={{
            view, setView,
            gameObject, setGameObject,
            dialogOpen, setDialogOpen
        }}>
            {children}
        </SMContext.Provider>
    );
};

export const useSMContext = (): SMContextType => {
    const context = useContext(SMContext);

    if (!context) {
        throw new Error('useSMContext must be used within a SMProvider');
    }

    return context;
};
