const todos = (state = [], action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [
            ...state,
            {
               id: action.id,
               text: action.text,
               completed: false
            }
         ];
      case 'TOGGLE_TODO':
         return state.map((todo, index) => {
            if (index === action.id) {
               return Object.assign({}, todo, {
                  completed: !todo.completed
               })
            }
            return todo;
         });
      case 'DELETE_TODO':
         return state.filter((todo) => {
            return todo.id !== action.id;
         });
      default:
         return state;
   }
};

export default todos
