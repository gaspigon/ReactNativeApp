export const SELECT_DESCRIPTION = 'SELECT_DESCRIPTION';
export const FILTERED_DESCRIPTION = 'FILTERED_DESCRIPTION';

export const selectDescription = (id) => ({
    type : SELECT_DESCRIPTION,
    descriptionID: id
});

export const filteredDescription = (id) => ({
    type : FILTERED_DESCRIPTION,
    categoryID: id
});

