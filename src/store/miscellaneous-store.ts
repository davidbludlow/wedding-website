import { reactive } from 'vue';


export const miscellaneousStore = reactive({
  tab: null as null | TabName
});

export const tabNames = [
  'home',
  'pictures',
  'rsvp',
  'registry',
  'details',
] as const;
type TabName = typeof tabNames[number];
