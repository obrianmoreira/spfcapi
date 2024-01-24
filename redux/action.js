const changeTableState = (tableState) => {
    return {
        type: 'UPDATE_TABLE_STATE',
        payload: tableState,
    };
}