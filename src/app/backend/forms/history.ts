import type { Form } from "./types";

export type FormHistory = {
    states: Form[];
    index: number;
};

/**
 * @brief Creates a new form history with the initial form state
 * @param {Form} form - The initial form state
 * @returns {FormHistory} - The created form history
 */
export function createHistory(form: Form): FormHistory {
    return {
        states: [form],
        index: 0,
    };
}
/**
 * @brief Saves a new form state to the history, will not save if the new form state is the same as the current form state
 * @param {FormHistory} history - The current form history
 * @param {Form} form - The new form state to save
 * @returns {FormHistory} - The updated form history
 */
export function saveState(history: FormHistory, form: Form): FormHistory {
    if (getCurrentForm(history) === form) {
        return history;
    }

    const states = [...history.states.slice(0, history.index + 1), form];

    return {
        states,
        index: states.length - 1,
    };
}

/**
 * @brief Undoes the last change in the form history
 * @param {FormHistory} history - The current form history
 * @returns {FormHistory} - The updated form history after undoing the last change
 */
export function undo(history: FormHistory): FormHistory {
    if (history.index <= 0) {
        return history;
    }

    return {
        ...history,
        index: history.index - 1,
    };
}

/**
 * @brief Redoes the last undone change in the form history
 * @param {FormHistory} history - The current form history
 * @returns {FormHistory} - The updated form history after redoing the last undone change
 */
export function redo(history: FormHistory): FormHistory {
    if (history.index >= history.states.length - 1) {
        return history;
    }

    return {
        ...history,
        index: history.index + 1,
    };
}

/**
 * @brief Gets the current form state from the form history
 * @param {FormHistory} history - The current form history
 * @returns {Form} - The current form state
 */
export function getCurrentForm(history: FormHistory): Form {
    return history.states[history.index];
}
