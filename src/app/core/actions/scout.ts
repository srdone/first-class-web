import { Action } from '@ngrx/store';
import { Scout } from "app/core/models";

export const ADD = '[Scout] Add';
export const UPDATE = '[Scout] Update';
export const DELETE = '[Scout] Delete';
export const SELECT = '[Scout] Select';

export class AddAction implements Action {
  readonly type = ADD;

  constructor(public payload: Scout) {}
}

export class UpdateAction implements Action {
  readonly type = UPDATE;

  constructor(public payload: Scout) {}
}

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: string) {}
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}

export type Actions
  = AddAction
  | UpdateAction
  | DeleteAction
  | SelectAction;
