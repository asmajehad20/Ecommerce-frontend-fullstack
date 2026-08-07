import { create } from "zustand";


export const userUserStore = create((set)=>({
    userName:'asma',
    changeName: ()=>{
        set((state)=>{
             userName:'aaa'
        })
       
    }
}));