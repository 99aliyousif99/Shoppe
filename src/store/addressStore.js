import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAddressStore = create(
    persist(
        (set) => ({
            address: {
                address: "",
                townCity: "",
                postcode: "",
            },
            setAddress: (newAddress) => set({ address: newAddress }),
        }),
        {
            name: 'address-storage',
        }
    )
);

export default useAddressStore;