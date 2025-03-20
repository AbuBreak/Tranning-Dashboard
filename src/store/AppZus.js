// implements the app bar zustand, and it should be connected to service file. 

import { create } from 'zustand';
/**
    * Zustand Store is a hook!
    * You can put anything in it: primitives, objects, functions.
    * @function set merges state.
    * @var {mails, notifications}, Considered as an object, which will contains the state (true or false) and the count.
*/
const useAppZusStore = create((set) => ({
    mails: { count: 0, enabled: false },
    notifications: { count: 0, enabled: false },
    isTrainee: false,

    // Actions to update state
    setMails: (count, enabled) => set({ mails: { count, enabled } }),
    setNotifications: (count, enabled) => set({ notifications: { count, enabled } }),
}));


export default useAppZusStore;
