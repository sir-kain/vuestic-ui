// @ts-ignore
import { ManualApiOptions } from '../../../DocsApi/ManualApiOptions'

export default {
  props: {
    options: { local: true },
    value: { local: true },
    size: { local: true },
    toggleColor: { local: true },
  },
  events: {
    input: {
      types: '(value: any) => void',
      local: true,
    },
  },
  methods: {
  },
  slots: {
  },
} as ManualApiOptions
