let nextTodoId = 0;

export const addTodo = text => {
   return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
   }
};

export const setVisibilityFilter = filter => ({
   type: 'SET_VISIBILITY_FILTER',
   filter
});

export const toggleTodo = id => ({
   type: 'TOGGLE_TODO',
   id
});

export const deleteTodo = id => ({
   type: 'DELETE_TODO',
   id
});

export const editTodo = todo => ({
   type: 'EDIT_TODO',
   todo
});

export const VisibilityFilters = {
   SHOW_ALL: 'SHOW_ALL',
   SHOW_COMPLETED: 'SHOW_COMPLETED',
   SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function personsFetchDataSuccess(persons) {
    return {
        type: "PERSONS_FETCH_DATA_SUCCESS",
        persons
    }
}

export function personsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                console.log('response', response);})
            .then(persons => {
                console.log('persons', persons);
                dispatch(personsFetchDataSuccess(persons))})
            .catch(()=>{});
    }
}
