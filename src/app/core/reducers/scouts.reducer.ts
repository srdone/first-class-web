import { createSelector } from 'reselect';
import { v4 as createUUID } from 'uuid';
import { Scout } from 'app/core/models';
import * as scout from 'app/core/actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Scout },
  selectedScoutId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  selectedScoutId: null,
};

export function reducer(state = initialState, action: scout.Actions): State {
  switch (action.type) {
    case scout.ADD: {
      const newScout: Scout = Object.assign({}, action.payload);
      const newScoutId = createUUID();
      newScout.id = newScoutId;
      
      return {
        ids: [...state.ids, ...newScoutId],
        entities: Object.assign({}, state.entities, { [newScoutId]: newScout }),
        selectedScoutId: state.selectedScoutId
      }
    }

    case scout.UPDATE: {
      const updatedScout: Scout = Object.assign({}, action.payload);
      
      return {
        ids: state.ids,
        entities: Object.assign({}, state.entities, { [updatedScout.id]: updatedScout }),
        selectedScoutId: state.selectedScoutId
      }
    }

    case scout.DELETE: {
      const idToDelete = action.payload;
      const remainingIds = state.ids.filter(id => id !== idToDelete);
      const remainingScouts = Object.assign({}, state.entities);
      delete remainingScouts[idToDelete];

      return {
        ids: remainingIds,
        entities: remainingScouts,
        selectedScoutId: state.selectedScoutId
      }
    }

    case scout.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedScoutId: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedScoutId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
