export const taskListSelector = state => state.tasks.tasksList;

export const sortedTaskListSelector = state => {
    return taskListSelector(state)
        .slice()
        .reverse()
        .sort((a, b) => a.done - b.done);
};