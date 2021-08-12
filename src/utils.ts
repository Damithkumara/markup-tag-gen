import { voidTags } from './Constants'

export const isVoidTag = (tag: string): boolean => voidTags.includes(tag)

export const hasWhitespace = (str: string): boolean => /\s/.test(str)
