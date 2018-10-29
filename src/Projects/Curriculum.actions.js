/* Actions types */

export const CHANGE_CV = 'CHANGE_CV'

/* Constants */

export const CurriculumFilters = {
  SHOW_ENGINEERING: 'SHOW_ENGINEERING',
  SHOW_MUSICAL: 'SHOW_MUSICAL'
}

/* Action creators */

export function setCurriculumFilter(filter) {
  return { type: CHANGE_CV, filter }
}