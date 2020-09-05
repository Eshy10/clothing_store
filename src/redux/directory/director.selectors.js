import { createSelector } from 'reselect';

const directorySelector = state => state.directory;

export const selectDirectorySections = createSelector(
 [directorySelector],
 directory => directory.sections
)



