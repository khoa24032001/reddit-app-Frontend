import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Truong Anh Khoa",
        age: "22",
        about: "I'm a software engineer",
        avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGAMLuWQcxug2Gvm-1f1fIZLG-zSVcTTQxQ&usqp=CAU",
        themeColor: "#ff9051"
    },
    reducers: {
        update:(state,action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
    }
});

export const {update} = userSlice.actions;

export default userSlice.reducer;