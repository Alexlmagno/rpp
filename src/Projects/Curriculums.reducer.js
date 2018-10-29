import { CurriculumFilters, CHANGE_CV } from './Curriculum.actions'

const initialState = {
  curriculumFilter: CurriculumFilters.SHOW_ENGINEERING,
  todos: []
}

function curriculumFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case CHANGE_CV:
      return action.filter
    default:
      return state
  }
}

function CurriculumApp (state = {}, action) {
  return {
    curriculumFilter: curriculumFilter(state, action)
  }
}