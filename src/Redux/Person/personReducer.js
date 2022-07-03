//initialize states
const initialState = [
  { id: 1, name: "hesam", age: 27 },
  { id: 2, name: "ali", age: 25 },
  { id: 3, name: "amir", age: 44 },
];

export function reducer(state=initialState,action){
    switch (action.type) {
        case "REQUEST_EDIT":   
            state.filter(item => item.id === action.payload.id).map((item) =>{
                item.name=action.payload.name;
                item.age=action.payload.age;
            })
            return [...state]
                

        default:
            return [...state]
    }
}