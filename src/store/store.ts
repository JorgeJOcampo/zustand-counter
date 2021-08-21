import create from 'zustand';
import { persist, devtools, StateStorage } from 'zustand/middleware';

const URL =
  'https://private-5a714-defaultcountervalue.apiary-mock.com/default-counter-value';

// export const useStore = create((set, get) => ({
//   count: 0,
//   getCounter: () => fetch(URL).then(res => res.json()).then((res) => set(state => ({count: res.count}))),
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
//   next: () => get().count + 1,
// }));

export interface CountSlice {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  next: () => number;
}

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    let item = localStorage.getItem(name);
    if (!item) {
      const res = await fetch(URL);
      const json = await res.json();
      item = JSON.stringify({ state: json, version: 0 });
    }
    return item;
  },
  setItem: (name, value): void => {
    localStorage.setItem(name, value);
  }
};

const useStore = create<CountSlice>(
  persist(
    devtools((set, get) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
      next: () => get().count + 1
    })),
    {
      name: 'count-storage',
      getStorage: () => storage
    }
  )
);

export default useStore;
