export const LocalSave = {
    // Save to localStorage (key, value)
    save: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    // get from localStorage (key)
    get: (key) => {
        const item = localStorage.getItem(key);
        if (typeof item == "null" || typeof item == "undefined" || !item) {
            localStorage.setItem(key, JSON.stringify([]));
            return [];
        }
        return JSON.parse(item);
    }
}

export const FilterTypes = {
    All: (todos) => todos,
    Completed: (todos) => todos.filter((todo) => todo.completed === true),
    Active: (todos) => todos.filter((todo) => !todo?.completed),
}