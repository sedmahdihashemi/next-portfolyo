
import create from 'zustand';

const useUserStore = create((set) => ({
  _data: {},
  updateUser: (data) => set({ _data: data }),
}));

export default useUserStore;